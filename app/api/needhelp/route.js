import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      contact,
      babyAge,
      babyWeight,
      situation, // matches modalConfigs
      company,   // 🐝 honeypot
    } = body;

    /* 🐝 HONEYPOT CHECK (SILENT SUCCESS) */
    if (company) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    /* 🛑 VALIDATION */
    if (!name || !contact || !situation) {
      return new Response(
        JSON.stringify({
          message: "Name, contact and situation are required",
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
      from: `"HelloBumble Help-a-Mama" <${process.env.SMTP_USER}>`,
      to: "dawn@hellobumble.co.za",
      subject: "Help-a-Mama Request",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Help-a-Mama Request 🐝</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Baby Age:</strong> ${babyAge || "N/A"}</p>
          <p><strong>Baby Weight:</strong> ${babyWeight || "N/A"}</p>

          <p><strong>Situation:</strong></p>
          <p>${situation}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Help-a-Mama email sent" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("NeedHelp API Error:", error);
    return new Response(
      JSON.stringify({ message: "Email failed" }),
      { status: 500 }
    );
  }
}
