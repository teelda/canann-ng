import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { amount, email, name, message } = await req.json();

  if (!amount || !email || !name) {
    return NextResponse.json({ error: "amount, email, and name are required" }, { status: 400 });
  }

  const amountKobo = Math.round(Number(amount) * 100);
  if (isNaN(amountKobo) || amountKobo < 10000) {
    return NextResponse.json({ error: "Minimum donation is ₦100" }, { status: 400 });
  }

  const callbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/donate/success`;

  const res = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      amount: amountKobo,
      callback_url: callbackUrl,
      metadata: { name, message: message ?? "" },
    }),
  });

  const data = await res.json();

  if (!res.ok || !data.status) {
    return NextResponse.json({ error: data.message ?? "Paystack error" }, { status: 502 });
  }

  return NextResponse.json({
    authorization_url: data.data.authorization_url,
    reference: data.data.reference,
  });
}
