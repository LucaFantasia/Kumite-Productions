import { Resend } from "resend";

function mustGetEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

type Payload = {
  email: string;
  services: string[];
  details: string;
  page?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    const email = (body.email || "").trim();
    const services = Array.isArray(body.services) ? body.services : [];
    const details = (body.details || "").trim();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
    }
    if (services.length === 0) {
      return Response.json({ ok: false, error: "Please select at least one service." }, { status: 400 });
    }
    if (details.length < 10) {
      return Response.json({ ok: false, error: "Please add a bit more detail." }, { status: 400 });
    }

    const resend = new Resend(mustGetEnv("RESEND_API_KEY"));

    const ENQUIRE_TO = mustGetEnv("ENQUIRE_TO"); 
    const MAIL_FROM = mustGetEnv("MAIL_FROM");   
    const SITE_NAME = process.env.SITE_NAME || "Kumite Productions";

    const servicesText = services.map((s) => `• ${s}`).join("\n");

    const subjectToTeam = `New enquiry (${services.join(", ")})`;
    const textToTeam = `New enquiry received

From: ${email}
Services:
${servicesText}

Details:
${details}
`;

    const subjectToUser = `We received your enquiry — ${SITE_NAME}`;
    const textToUser = `Thanks for reaching out!

We’ve received your enquiry and will reply as soon as possible.

Your details:
Email: ${email}
Services:
${servicesText}

Message:
${details}

— ${SITE_NAME}
`;

    // 1) Email to Kumite
    await resend.emails.send({
      from: MAIL_FROM,
      to: ENQUIRE_TO,
      replyTo: email,
      subject: subjectToTeam,
      text: textToTeam,
    });

    // 2) Confirmation to user
    await resend.emails.send({
      from: MAIL_FROM,
      to: email,
      subject: subjectToUser,
      text: textToUser,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    console.error("ENQUIRE EMAIL ERROR (RESEND):", err);
    return Response.json(
      { ok: false, error: "Server error sending email. Please try again later." },
      { status: 500 }
    );
  }
}
