import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, motivation } = await request.json();

    if (!name || !email || !motivation) {
      return new Response(JSON.stringify({ message: "Name, email and motivation are required" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"HelloBumble AmbuZZador" <${process.env.SMTP_USER}>`,
      to: "dawn@hellobumble.co.za",
      subject: "AmbuZZador Application",
      html: `
        <h2>New AmbuZZador Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Motivation:</strong> ${motivation}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "AmbuZZador email sent" }), { status: 200 });
  } catch (error) {
    console.error("AmbuZZador API Error:", error);
    return new Response(JSON.stringify({ message: "Email failed" }), { status: 500 });
  }
}
