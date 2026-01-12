// app/api/payfast/notify/route.js

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.formData();

    // Only process successful payments
    if (data.get("payment_status") !== "COMPLETE") {
      return NextResponse.json({ ignored: true });
    }

    const orderNumber = data.get("m_payment_id");
    const orderDataRaw = data.get("custom_str1");

    if (!orderNumber || !orderDataRaw) {
      return NextResponse.json(
        { error: "Missing order data" },
        { status: 400 }
      );
    }

    const orderData = JSON.parse(orderDataRaw);

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: "dawn@hellobumble.co.za",
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: "HelloBumble <dawn@hellobumble.co.za>",
      to: "dawn@hellobumble.co.za",
      subject: `New Paid Order – ${orderNumber}`,
      text: `
NEW PAID ORDER (PAYFAST)

Order Number: ${orderNumber}

Customer:
${orderData.shipping.name}
${orderData.shipping.email}
${orderData.shipping.phone}

Shipping Address:
${orderData.shipping.address}
${orderData.shipping.city}
${orderData.shipping.postal}

Products:
${orderData.cart
  .map(
    (i) => `${i.name} × ${i.quantity} – R${i.price * i.quantity}`
  )
  .join("\n")}

Total Paid: R${orderData.total}

Payment Method: PayFast
`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("PayFast IPN error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
