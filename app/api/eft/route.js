import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const data = await req.formData();

    const company = data.get("company"); // 🐝 honeypot
    if (company) {
      return new Response(null, { status: 200 });
    }

    const orderNumber = data.get("orderNumber");
    const orderRaw = data.get("order");

    if (!orderNumber || !orderRaw) {
      return new Response("Invalid EFT payload", { status: 400 });
    }

    let order;
    try {
      order = JSON.parse(orderRaw);
    } catch {
      return new Response("Invalid order data", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"HelloBumble Orders" <${process.env.SMTP_USER}>`,
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
${order.cart
  .map((i) => `${i.name} × ${i.quantity} – R${i.price * i.quantity}`)
  .join("\n")}

Total: R${order.total}

Customer must EFT using reference:
${orderNumber}

POP will be emailed to:
dawn@hellobumble.co.za
`,
    });

    return Response.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}/cart/shipping/checkout/eft-confirmation?order=${orderNumber}`,
      303
    );
  } catch (error) {
    console.error("EFT Order Email Error:", error);
    return new Response("Email failed", { status: 500 });
  }
}
