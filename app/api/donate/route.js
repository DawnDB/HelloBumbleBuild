import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, donationAmount, message } = await request.json();

    if (!name || !email || !donationAmount) {
      return new Response(JSON.stringify({ message: "Name, email and donation amount are required" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"HelloBumble Donations" <${process.env.SMTP_USER}>`,
      to: "dawn@hellobumble.co.za",
      subject: "Donation Submitted",
      html: `
        <h2>New Donation</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Amount:</strong> ${donationAmount}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Donation email sent" }), { status: 200 });
  } catch (error) {
    console.error("Donate API Error:", error);
    return new Response(JSON.stringify({ message: "Email failed" }), { status: 500 });
  }
}
