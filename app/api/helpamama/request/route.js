import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, contact, babyAge, babyWeight, situation } = data;

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

    const mailOptions = {
      from: `"HelloBumble" <${process.env.SMTP_USER}>`,
      to: "dawn@hellobumble.co.za",
      subject: "Help-a-Mama Request for Assistance",
      html: `
        <h2>Help-a-Mama Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Baby Age:</strong> ${babyAge}</p>
        <p><strong>Baby Weight:</strong> ${babyWeight}</p>
        <p><strong>Situation:</strong> ${situation}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Request email sent" }), { status: 200 });

  } catch (error) {
    console.error("Help-a-Mama Request Error:", error);
    return new Response(JSON.stringify({ message: "Email failed" }), { status: 500 });
  }
}
