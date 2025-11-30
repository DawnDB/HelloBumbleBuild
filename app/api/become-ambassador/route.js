import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json(); // <-- Added await
    const { name, email, babyInfo, socialHandles, goals, experience } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"HelloBumble" <${process.env.SMTP_USER}>`,
      to: "dawn@hellobumble.co.za",
      subject: "New Brand Ambassador Application",
      html: `
        <h2>New Brand Ambassador Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Baby Info:</strong> ${babyInfo}</p>
        <p><strong>Social Handles / Intro:</strong> ${socialHandles}</p>
        <p><strong>Goals:</strong> ${goals}</p>
        <p><strong>Experience:</strong> ${experience}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
  }
}
