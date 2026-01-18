"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PayFastSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear cart after PayFast redirect
    localStorage.removeItem("hellobumbleCart");
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      {/* ✅ Typography corrected */}
      <h1 className="text-3xl tracking-wide mb-4">
        Thank you for your order 🐝
      </h1>

      <p className="mb-6">
        We’ve received your order and payment details successfully.
      </p>

      <div className="bg-white/70 rounded-2xl p-6 shadow text-left space-y-3">
        <p>
          Your order is now being reviewed and prepared.
        </p>
        <p>
          You will receive a confirmation email shortly.
        </p>
        <p>
          If you have any questions, please contact{" "}
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
