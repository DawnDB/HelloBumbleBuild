"use client";

import { useSearchParams } from "next/navigation";

export default function EFTConfirmationPage() {
  const params = useSearchParams();
  const orderNumber = params.get("order");

  if (!orderNumber) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p>Your order reference could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-product mb-4">
        Thank you for your order 🐝
      </h1>

      <p className="mb-6">
        Please complete payment using the reference below.
      </p>

      <div className="bg-white/70 rounded-2xl p-6 shadow space-y-3 text-left">
        <p><strong>Order number:</strong> {orderNumber}</p>
        <p><strong>Bank:</strong> FNB</p>
        <p><strong>Account Name:</strong> HelloBumble</p>
        <p><strong>Branch Code:</strong> 250655</p>
        <p><strong>Reference:</strong> {orderNumber}</p>
        <p>Email POP to <strong>dawn@hellobumble.co.za</strong></p>
      </div>
    </div>
  );
}
