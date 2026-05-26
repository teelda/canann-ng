import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, type, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO ?? "hellocanann@gmail.com";

  if (!user || !pass) {
    // Env not configured — accept silently so UX still works in preview
    return NextResponse.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST ?? "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const typeLabels: Record<string, string> = {
    general: "General enquiry",
    donate: "Make a donation",
    volunteer: "Volunteer",
    partner: "Partner with Canann",
    "ai-education": "AI Education Partnership",
    "pad-a-girl": "Pad a Girl Partnership",
    media: "Media / Press",
    other: "Something else",
  };

  await transporter.sendMail({
    from: `"Canann Website" <${user}>`,
    to,
    replyTo: email,
    subject: `[Contact] ${typeLabels[type] ?? type} — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nType: ${typeLabels[type] ?? type}\n\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Type:</strong> ${typeLabels[type] ?? type}</p>
      <hr/>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
