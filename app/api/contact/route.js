import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      message,
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
          message: "Name, email and message are required",
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
      from: `"HelloBumble Contact" <${process.env.SMTP_USER}>`,
      to: "dawn@hellobumble.co.za",
      subject: "Website Inquiry - Contact Form",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Message 🐝</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Contact email sent" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return new Response(
      JSON.stringify({ message: "Email failed" }),
      { status: 500 }
    );
  }
}
