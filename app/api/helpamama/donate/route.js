import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, contact, donationType, condition, durationUsed, purchaseType } = data;

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
      subject: "Help-a-Mama Donation Offer",
      html: `
        <h2>Help-a-Mama Donation Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>What They Want to Donate:</strong> ${donationType}</p>
        <p><strong>Estimated Condition:</strong> ${condition}</p>
        <p><strong>How Long Used:</strong> ${durationUsed}</p>
        <p><strong>Purchased As:</strong> ${purchaseType}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Donation email sent" }), { status: 200 });

  } catch (error) {
    console.error("Help-a-Mama Donation Error:", error);
    return new Response(JSON.stringify({ message: "Email failed" }), { status: 500 });
  }
}
