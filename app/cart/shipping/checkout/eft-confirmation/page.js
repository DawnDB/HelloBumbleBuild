"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function EFTConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderFromUrl = searchParams.get("order");

  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    // 1️⃣ Try sessionStorage (fresh checkout)
    const saved = sessionStorage.getItem("hellobumbleOrder");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.orderNumber) {
          setOrderNumber(parsed.orderNumber);
          return;
        }
      } catch {
        // ignore parse errors
      }
    }

    // 2️⃣ Fallback to URL param (refresh-safe)
    if (orderFromUrl) {
      setOrderNumber(orderFromUrl);
      return;
    }

    // 3️⃣ Nothing found → back to cart
    router.replace("/cart");
  }, [orderFromUrl, router]);

  if (!orderNumber) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="opacity-70">Loading payment details…</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-hellobumble mb-4">
        Thank you for your order 🐝
      </h1>

      <p className="mb-6">
        Please complete your EFT payment using the details below.
      </p>

      <div className="bg-white/70 rounded-2xl p-6 shadow space-y-3 text-left">
        <p><strong>Order reference:</strong> {orderNumber}</p>
        <p><strong>Bank:</strong> FNB</p>
        <p><strong>Account Name:</strong> HelloBumble</p>
        <p><strong>Account Number:</strong> XXXXXXXX</p>
        <p><strong>Branch Code:</strong> 250655</p>
        <p><strong>Payment Reference:</strong> {orderNumber}</p>
        <p>
          Please email your proof of payment to{" "}
          <strong>dawn@hellobumble.co.za</strong>
        </p>
      </div>

      <p className="mt-6 text-sm opacity-70">
        Orders will be processed once payment has cleared.
      </p>

      {/* 🔁 ACTIONS */}
      <div className="mt-10 flex flex-col gap-4">
        <button
          onClick={() => router.push("/shop")}
          className="btn-cart w-full"
        >
          Return to Shop
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
