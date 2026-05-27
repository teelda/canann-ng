import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.EMAIL_TO ?? "hellocanann@gmail.com";

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

export async function POST(req: Request) {
  const { name, email, type, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: true });
  }

  const label = typeLabels[type] ?? type;

  await resend.emails.send({
    from: "Canann Website <onboarding@resend.dev>",
    to: [TO],
    replyTo: email,
    subject: `[Contact] ${label} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#39a46b">New contact form submission</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#727272;font-size:13px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#727272;font-size:13px">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#727272;font-size:13px">Type</td><td style="padding:8px 0">${label}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e4e4e4;margin:16px 0"/>
        <p style="white-space:pre-wrap;color:#222;line-height:1.6">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
