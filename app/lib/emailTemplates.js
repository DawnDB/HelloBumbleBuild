const signatureBlock = `
  <div style="
    background-image: url('https://hellobumble.co.za/pastel-marble.jpg');
    background-size: cover;
    padding: 16px;
    margin-top: 24px;
  ">
    <div style="
      background-color: rgba(255, 255, 255, 0.78);
      border-radius: 14px;
      padding: 16px;
      color: #333;
      font-family: Arial, Helvetica, sans-serif;
      max-width: 520px;
    ">
      <p style="margin:0 0 10px 0;">
        <strong>Dawn Bekker</strong><br/>
        Founder
      </p>

      <p style="margin:0 0 10px 0;">
        <a href="mailto:dawn@hellobumble.co.za" style="color:#333; text-decoration:none;">
          dawn@hellobumble.co.za
        </a><br/>
        081&nbsp;767&nbsp;6829<br/>
        <a href="https://hellobumble.co.za" style="color:#333; text-decoration:none;">
          hellobumble.co.za
        </a>
      </p>

      <div style="text-align:center; margin:10px 0;">
        <a href="https://wa.me/27817676829" target="_blank" style="margin:0 6px;">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
               alt="WhatsApp" width="18" height="18" />
        </a>
        <a href="https://www.facebook.com/share/14QEj7y5Liv/" target="_blank" style="margin:0 6px;">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
               alt="Facebook" width="18" height="18" />
        </a>
        <a href="https://www.instagram.com/_hellobumble_?igsh=NmN5bGt6ODI5Y2wz" target="_blank" style="margin:0 6px;">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
               alt="Instagram" width="18" height="18" />
        </a>
        <a href="https://www.tiktok.com/@_hellobumble_" target="_blank" style="margin:0 6px;">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
               alt="TikTok" width="18" height="18" />
        </a>
      </div>

      <div style="text-align:center; margin-top:12px;">
        <img src="https://hellobumble.co.za/hellobumble-logo.jpg"
             alt="HelloBumble Logo"
             style="width:70px; height:auto;" />
      </div>
    </div>
  </div>
`;

export function customerOrderEmail({ orderNumber, paymentMethod }) {
  const paymentText =
    paymentMethod === "eft"
      ? "Please complete payment via EFT using your order number as the payment reference."
      : "Your PayFast payment is being securely processed.";

  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color:#333;">
      <h2>Thank you for your HelloBumble order 🐝</h2>

      <p>Your order has been received successfully.</p>

      <p><strong>Order number:</strong> ${orderNumber}</p>

      <p>${paymentText}</p>

      <p>
        If you have any questions, you can simply reply to this email and I’ll be happy to help.
      </p>

      ${signatureBlock}
    </div>
  `;
}

export function adminOrderEmail({ orderNumber, total, paymentMethod }) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color:#333;">
      <h2>New HelloBumble Order 🐝</h2>

      <p><strong>Order number:</strong> ${orderNumber}</p>
      <p><strong>Total:</strong> R${total}</p>
      <p><strong>Payment method:</strong> ${paymentMethod}</p>

      <p>Please log into Supabase to process this order.</p>

      ${signatureBlock}
    </div>
  `;
}
