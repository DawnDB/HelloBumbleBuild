import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      social,
      message, // matches modalConfigs
      company, // 🐝 honeypot
    } = body;

    /* 🐝 HONEYPOT CHECK (SILENT SUCCESS) */
    if (company) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    /* 🛑 VALIDATION */
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Name, email and motivation are required",
        }),
        { status: 400 }
      );
    }

    /* ✉️ MAIL TRANSPORT */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    /* 📬 EMAIL CONTENT */
    const mailOptions = {
      from: `"HelloBumble AmbuZZador" <${process.env.SMTP_USER}>`,
      to: "dawn@hellobumble.co.za",
      subject: "AmbuZZador Application",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New AmbuZZador Application 🐝</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          ${social ? `<p><strong>Social Handle:</strong> ${social}</p>` : ""}

          <p><strong>Motivation:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "AmbuZZador email sent" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("AmbuZZador API Error:", error);
    return new Response(
      JSON.stringify({ message: "Email failed" }),
      { status: 500 }
    );
  }
}
