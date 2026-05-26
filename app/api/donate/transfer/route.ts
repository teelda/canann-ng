import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, amount, message, mode } = await req.json();

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO ?? "hellocanann@gmail.com";

  if (!user || !pass) {
    return NextResponse.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST ?? "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const modeLabel = mode === "community" ? "Share with community" : "Remain anonymous";
  const amountFmt = amount ? `₦${Number(amount).toLocaleString("en-NG")}` : "unspecified";

  await transporter.sendMail({
    from: `"Canann Website" <${user}>`,
    to,
    replyTo: email || user,
    subject: `[Transfer] Bank transfer notification — ${amountFmt}`,
    text: [
      `A donor has confirmed a bank transfer.`,
      ``,
      `Amount: ${amountFmt}`,
      `Name: ${name || "Anonymous"}`,
      `Email: ${email || "not provided"}`,
      `Preference: ${modeLabel}`,
      ``,
      message ? `Message: ${message}` : "",
    ]
      .filter((l) => l !== undefined)
      .join("\n"),
    html: `
      <p>A donor has confirmed a bank transfer.</p>
      <p><strong>Amount:</strong> ${amountFmt}</p>
      <p><strong>Name:</strong> ${name || "Anonymous"}</p>
      <p><strong>Email:</strong> ${email ? `<a href="mailto:${email}">${email}</a>` : "not provided"}</p>
      <p><strong>Preference:</strong> ${modeLabel}</p>
      ${message ? `<hr/><p style="white-space:pre-wrap">${message}</p>` : ""}
    `,
  });

  return NextResponse.json({ ok: true });
}
