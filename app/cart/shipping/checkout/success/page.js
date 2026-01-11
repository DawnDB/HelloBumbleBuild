"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PayFastSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Optional: clear cart after successful redirect
    localStorage.removeItem("hellobumbleCart");
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl font-hellobumble mb-4">
        Payment Successful 🐝
      </h1>

      <p className="mb-6">
        Thank you! Your payment was successful and your order is being processed.
      </p>

      <div className="bg-white/70 rounded-2xl p-6 shadow text-left space-y-3">
        <p>
          You’ll receive a confirmation email shortly once payment is verified.
        </p>
        <p>
          If you have any questions, please contact us at{" "}
          <strong>dawn@hellobumble.co.za</strong>
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <button
          onClick={() => router.push("/shop")}
          className="btn-cart w-full"
        >
          Continue Shopping
        </button>

        <button
          onClick={() => router.push("/")}
          className="w-full border rounded-2xl py-3"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
