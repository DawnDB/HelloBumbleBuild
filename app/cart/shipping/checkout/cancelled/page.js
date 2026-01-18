"use client";

import { useRouter } from "next/navigation";

export default function PayFastCancelledPage() {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      {/* ✅ Typography corrected */}
      <h1 className="text-3xl tracking-wide mb-4">
        Payment not completed
      </h1>

      <p className="mb-6">
        Your payment was cancelled and no money was taken.
      </p>

      <div className="bg-white/70 rounded-2xl p-6 shadow text-left space-y-3">
        <p>
          You can return to checkout to try again or choose Manual EFT instead.
        </p>
        <p>
          If something didn’t work as expected, please contact{" "}
          <strong>dawn@hellobumble.co.za</strong>.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <button
          onClick={() => router.push("/cart/shipping/checkout")}
          className="btn-cart w-full"
        >
          Return to Checkout
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
