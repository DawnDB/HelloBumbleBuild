import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.formData();

  if (data.get("payment_status") !== "COMPLETE") {
    return new Response("Ignored");
  }

  const orderData = JSON.parse(data.get("custom_str1")); 
  const orderNumber = data.get("m_payment_id");

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: "dawn@hellobumble.co.za",
      import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.formData();

  if (data.get("payment_status") !== "COMPLETE") {
    return new Response("Ignored");
  }

  const orderData = JSON.parse(data.get("custom_str1")); 
  const orderNumber = data.get("m_payment_id");

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
${orderData.cart.map(
  (i) => `${i.name} × ${i.quantity} – R${i.price * i.quantity}`
).join("\n")}

Total Paid: R${orderData.total}

Payment Method: PayFast
`,
  });

  return new Response("OK");
}