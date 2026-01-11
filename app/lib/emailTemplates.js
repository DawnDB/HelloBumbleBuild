export function customerOrderEmail({ orderNumber, paymentMethod }) {
  const paymentText =
    paymentMethod === "eft"
      ? "Please complete payment via EFT using your order number as reference."
      : "Your PayFast payment is being processed.";

  return `
    <h2>Thank you for your HelloBumble order 🐝</h2>
    <p>Your order has been received successfully.</p>

    <p><strong>Order number:</strong> ${orderNumber}</p>

    <p>${paymentText}</p>

    <p>
      If you have any questions, feel free to reply to this email or contact us at
      <strong>dawn@hellobumble.co.za</strong>.
    </p>

    <p>With love,<br/>HelloBumble</p>
  `;
}

export function adminOrderEmail({ orderNumber, total, paymentMethod }) {
  return `
    <h2>New HelloBumble Order 🐝</h2>

    <p><strong>Order number:</strong> ${orderNumber}</p>
    <p><strong>Total:</strong> R${total}</p>
    <p><strong>Payment method:</strong> ${paymentMethod}</p>

    <p>Please log in to Supabase to process this order.</p>
  `;
}
