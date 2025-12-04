import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return new Response(JSON.stringify({ message: "Name and email are required" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"HelloBumble Newsletter" <${process.env.SMTP_USER}>`,
      to: "dawn@hellobumble.co.za",
      subject: "New BuZZ Letter Subscription",
      html: `
        <h2>New BuZZ Letter Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Newsletter signup email sent" }), { status: 200 });
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return new Response(JSON.stringify({ message: "Email failed" }), { status: 500 });
  }
}
