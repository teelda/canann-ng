import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const TO = process.env.EMAIL_TO ?? "hellocanann@gmail.com";

export async function POST(req: Request) {
  const { name, email, amount, message, mode } = await req.json();

  if (!resend) {
    return NextResponse.json({ ok: true });
  }

  const amountFmt = amount ? `₦${Number(amount).toLocaleString("en-NG")}` : "unspecified";
  const modeLabel = mode === "community" ? "Share with community" : "Remain anonymous";

  await resend.emails.send({
    from: "Canann Website <onboarding@resend.dev>",
    to: [TO],
    replyTo: email || undefined,
    subject: `[Transfer] Bank transfer confirmed — ${amountFmt}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#39a46b">Bank transfer notification</h2>
        <p style="color:#727272;font-size:14px">A donor has confirmed a bank transfer on the website.</p>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#727272;font-size:13px">Amount</td><td style="padding:8px 0;font-weight:700;font-size:18px;color:#39a46b">${amountFmt}</td></tr>
          <tr><td style="padding:8px 0;color:#727272;font-size:13px">Name</td><td style="padding:8px 0;font-weight:600">${name || "Anonymous"}</td></tr>
          <tr><td style="padding:8px 0;color:#727272;font-size:13px">Email</td><td style="padding:8px 0">${email ? `<a href="mailto:${email}">${email}</a>` : "not provided"}</td></tr>
          <tr><td style="padding:8px 0;color:#727272;font-size:13px">Preference</td><td style="padding:8px 0">${modeLabel}</td></tr>
        </table>
        ${message ? `<hr style="border:none;border-top:1px solid #e4e4e4;margin:16px 0"/><p style="white-space:pre-wrap;color:#222;line-height:1.6">${message}</p>` : ""}
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
