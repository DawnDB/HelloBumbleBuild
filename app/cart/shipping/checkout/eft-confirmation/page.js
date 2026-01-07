"use client";

import { useSearchParams } from "next/navigation";

export default function EFTConfirmationPage() {
  const params = useSearchParams();
  const orderNumber = params.get("order");

  // 🔐 Safety guard
  if (!orderNumber) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p>Your order reference could not be found.</p>
        <p className="text-sm mt-2">
          Please contact us if you need assistance.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-product mb-4">
        Thank you for your order 🐝
      </h1>

      <p className="mb-6">
        Your order has been placed and is awaiting EFT payment.
      </p>

      <div className="bg-white/70 rounded-2xl p-6 shadow text-left space-y-3">
        <p>
          <strong>Order number:</strong>{" "}
          <span className="font-mono">{orderNumber}</span>
        </p>

        <hr />

        <h2 className="font-semibold">EFT Banking Details</h2>

        <p><strong>Bank:</strong> FNB</p>
        <p><strong>Account Type:</strong> Business Cheque</p>
        <p><strong>Account Name:</strong> HelloBumble</p>
        <p><strong>Account Number:</strong> XXXXXXXX</p>
        <p><strong>Branch Code:</strong> 250655</p>

        <p className="mt-4">
          <strong>Payment reference:</strong>{" "}
          <span className="font-mono">{orderNumber}</span>
        </p>

        <hr />

        <p className="text-sm">
          Please email your <strong>proof of payment (POP)</strong> to:
        </p>

        <p className="font-semibold">
          dawn@hellobumble.co.za
        </p>
      </div>

      <p className="mt-8 text-sm">
        Once payment is received, your order will be processed with love 💛
      </p>
    </div>
  );
}
