import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.formData();

  const orderNumber = data.get("orderNumber");
  const order = JSON.parse(data.get("order"));

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
    subject: `New EFT Order – ${orderNumber}`,
    text: `
NEW EFT ORDER (AWAITING PAYMENT)

Order Number: ${orderNumber}

Customer:
${order.shipping.name}
${order.shipping.email}
${order.shipping.phone}

Shipping Address:
${order.shipping.address}
${order.shipping.city}
${order.shipping.postal}

Products:
${order.cart.map(
  (i) => `${i.name} × ${i.quantity} – R${i.price * i.quantity}`
).join("\n")}

Total: R${order.total}

Customer must EFT using reference:
${orderNumber}

POP will be emailed to:
dawn@hellobumble.co.za
`,
  });

  return Response.redirect(
    `${process.env.NEXT_PUBLIC_SITE_URL}/cart/shipping/checkout/eft-confirmation?order=${orderNumber}`
  );
}