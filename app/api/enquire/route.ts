import nodemailer from "nodemailer";

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

    const SMTP_HOST = mustGetEnv("SMTP_HOST");
    const SMTP_PORT = Number(mustGetEnv("SMTP_PORT"));
    const SMTP_USER = mustGetEnv("SMTP_USER");
    const SMTP_PASS = mustGetEnv("SMTP_PASS");

    const MAIL_FROM = mustGetEnv("MAIL_FROM"); // e.g. "Kumite Productions <no-reply@yourdomain.com>"
    const ENQUIRE_TO = mustGetEnv("ENQUIRE_TO"); // e.g. "contact@kumiteproductions.co.uk"
    const SITE_NAME = process.env.SITE_NAME || "Kumite Productions";

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465, false otherwise
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const servicesText = services.map((s) => `• ${s}`).join("\n");

    // 1) Email to Kumite
    const subjectToTeam = `New enquiry (${services.join(", ")})`;
    const textToTeam = `New enquiry received

From: ${email}
Services:
${servicesText}

Details:
${details}
`;

    // 2) Confirmation email to user
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

    await transporter.sendMail({
      from: MAIL_FROM,
      to: ENQUIRE_TO,
      replyTo: email,
      subject: subjectToTeam,
      text: textToTeam,
    });

    await transporter.sendMail({
      from: MAIL_FROM,
      to: email,
      subject: subjectToUser,
      text: textToUser,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    // Avoid leaking sensitive info to client
    return Response.json(
      { ok: false, error: "Server error sending email. Please try again later." },
      { status: 500 }
    );
  }
}
