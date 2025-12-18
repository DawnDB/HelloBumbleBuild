"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";

export default function ShippingPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { cart } = useCart();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
    if (!loading && cart.length === 0) {
      router.push("/cart");
    }
  }, [user, loading, cart, router]);

  if (loading || !user) return null;

  return (
    <div className="min-h-screen px-6 py-20 flex justify-center">
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10">
        <h1 className="text-3xl font-hellobumble text-center mb-6">
          Shipping Details
        </h1>

        {/* SHIPPING OPTIONS */}
        <div className="space-y-4">
          <label className="block">
            <input type="radio" name="shipping" value="free" />
            <span className="ml-2">
              Free – Arrange own courier pickup
            </span>
          </label>

          <label className="block">
            <input type="radio" name="shipping" value="courier" />
            <span className="ml-2">
              R150 – Courier Guy delivery
            </span>
          </label>
        </div>

        {/* ADDRESS FORM (next step) */}
        <p className="mt-8 text-sm opacity-70">
          Address form will auto-fill from your profile.
        </p>

        <button className="btn-cart mt-6 w-full">
          Continue to Checkout →
        </button>
      </div>
    </div>
  );
}