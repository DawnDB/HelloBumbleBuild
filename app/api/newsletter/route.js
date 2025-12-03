import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email } = data;

    if (!name || !email) {
      return new Response(JSON.stringify({ message: "Name and email required" }), { status: 400 });
    }

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
      subject: "New BuZZ Letter Subscription",
      html: `
        <h2>New BuZZ Letter Subscription</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Subscription email sent" }), { status: 200 });

  } catch (error) {
    console.error("Newsletter API Error:", error);
    return new Response(JSON.stringify({ message: "Email failed" }), { status: 500 });
  }
}
