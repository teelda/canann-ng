import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const reference = req.nextUrl.searchParams.get("reference");

  if (!reference) {
    return NextResponse.json({ error: "reference is required" }, { status: 400 });
  }

  const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
  });

  const data = await res.json();

  if (!res.ok || !data.status) {
    return NextResponse.json({ error: data.message ?? "Verification failed" }, { status: 502 });
  }

  const tx = data.data;
  return NextResponse.json({
    status: tx.status,
    amount: tx.amount / 100,
    email: tx.customer.email,
    name: tx.metadata?.name ?? "",
    reference: tx.reference,
    paid_at: tx.paid_at,
  });
}
