"use client";

import { useRouter } from "next/navigation";

export default function PayFastCancelledPage() {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl font-hellobumble mb-4">
        Payment Cancelled
      </h1>

      <p className="mb-6">
        Your payment was cancelled and no money was taken.
      </p>

      <div className="bg-white/70 rounded-2xl p-6 shadow text-left space-y-3">
        <p>
          You can try again or choose EFT as a payment option at checkout.
        </p>
        <p>
          If you experienced an issue, please contact{" "}
          <strong>dawn@hellobumble.co.za</strong>.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <button
          onClick={() => router.push("/cart/shipping/checkout")}
          className="btn-cart w-full"
        >
          Try Again
        </button>

        <button
          onClick={() => router.push("/shop")}
          className="w-full border rounded-2xl py-3"
        >
          Back to Shop
        </button>
      </div>
    </div>
  );
}
