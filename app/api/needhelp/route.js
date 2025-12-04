import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, contact, babyAge, babyWeight, needs } = await request.json();

    if (!name || !contact || !needs) {
      return new Response(JSON.stringify({ message: "Name, contact and needs are required" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"HelloBumble Need Help" <${process.env.SMTP_USER}>`,
      to: "dawn@hellobumble.co.za",
      subject: "Help-a-Mama Request",
      html: `
        <h2>New Help-a-Mama Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Baby Age:</strong> ${babyAge || "N/A"}</p>
        <p><strong>Baby Weight:</strong> ${babyWeight || "N/A"}</p>
        <p><strong>Needs:</strong> ${needs}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Help-a-Mama email sent" }), { status: 200 });
  } catch (error) {
    console.error("NeedHelp API Error:", error);
    return new Response(JSON.stringify({ message: "Email failed" }), { status: 500 });
  }
}
