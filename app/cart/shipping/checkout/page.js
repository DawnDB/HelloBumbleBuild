"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { cart } = useCart();

  const [shipping, setShipping] = useState(null);
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("payfast");
  const [submitting, setSubmitting] = useState(false);

  /* ================================
     🔐 LOAD + GUARDS
  ================================= */
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
      return;
    }

    if (cart.length === 0) {
      router.replace("/cart");
      return;
    }

    const savedShipping = localStorage.getItem("hellobumbleShipping");

    if (!savedShipping) {
      router.replace("/cart/shipping");
      return;
    }

    const parsed = JSON.parse(savedShipping);

    if (!parsed.addressSnapshot || parsed.cost === undefined) {
      router.replace("/cart/shipping");
      return;
    }

    setShipping(parsed);
    setAddress(parsed.addressSnapshot);
  }, [user, loading, cart, router]);

  if (loading || !shipping || !address) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="opacity-70">Preparing checkout…</p>
      </div>
    );
  }

  /* ================================
     💰 TOTALS (DISPLAY ONLY)
     (authoritative totals calculated
      again on server)
  ================================= */
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal + shipping.cost;

  /* ================================
     🧾 CREATE ORDER (API)
  ================================= */
  async function createOrder() {
    setSubmitting(true);

    const res = await fetch("/api/orders/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        shippingAddressId: shipping.addressId,
        cart,
        shippingCost: shipping.cost,
      }),
    });

    if (!res.ok) {
      setSubmitting(false);
      throw new Error("Order creation failed");
    }

    const data = await res.json();

    // Persist order for confirmation / payment steps
    sessionStorage.setItem(
      "hellobumbleOrder",
      JSON.stringify(data)
    );

    return data; // { orderId, orderNumber }
  }

  /* ================================
     🎨 UI
  ================================= */
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-hellobumble mb-10 text-center">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* 📦 Shipping summary */}
        <div className="space-y-4 bg-neutral-whiteOverlay p-6 rounded-2xl shadow-soft">
          <h2 className="font-semibold">Shipping Details</h2>
          <p>{address.full_name}</p>
          <p>{address.phone}</p>
          <p>{address.address_line1}</p>
          {address.address_line2 && <p>{address.address_line2}</p>}
          <p>
            {address.city}, {address.province}, {address.postal_code}
          </p>
          <p>{address.country}</p>

          <p className="mt-4 font-medium">
            Delivery method:{" "}
            {shipping.method === "courier"
              ? "Courier Guy (R150)"
              : "Own courier pickup"}
          </p>

          {/* 💳 Payment method */}
          <div className="mt-6 space-y-2">
            <label className="flex gap-2 items-center">
              <input
                type="radio"
                checked={paymentMethod === "payfast"}
                onChange={() => setPaymentMethod("payfast")}
              />
              PayFast
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="radio"
                checked={paymentMethod === "eft"}
                onChange={() => setPaymentMethod("eft")}
              />
              Manual EFT
            </label>
          </div>
        </div>

        {/* 🧾 Order summary */}
        <div className="bg-white/70 rounded-2xl p-6 shadow">
          {cart.map((item) => (
            <div key={item.slug} className="flex justify-between mb-2">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>R{item.price * item.quantity}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>R{subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>R{shipping.cost}</span>
          </div>

          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span>R{total}</span>
          </div>

          {/* 💳 PAYMENT ACTIONS */}
          {paymentMethod === "payfast" ? (
            <form
              action="/api/payfast"
              method="post"
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const { orderNumber } = await createOrder();
                  e.target.m_payment_id.value = orderNumber;
                  e.target.submit();
                } catch {
                  alert("Unable to place order. Please try again.");
                }
              }}
              className="mt-6"
            >
              <input type="hidden" name="m_payment_id" />
              <input
                type="hidden"
                name="custom_str1"
                value={JSON.stringify({ cart, shipping, total })}
              />

              <button
                disabled={submitting}
                className="w-full bg-black text-white py-3 rounded-2xl"
              >
                {submitting ? "Processing…" : "Pay with PayFast"}
              </button>
            </form>
          ) : (
            <button
              disabled={submitting}
              onClick={async () => {
                try {
                  const { orderNumber } = await createOrder();
                  router.push(
                    `/cart/shipping/checkout/eft-confirmation?order=${orderNumber}`
                  );
                } catch {
                  alert("Unable to place order. Please try again.");
                }
              }}
              className="w-full border py-3 mt-6 rounded-2xl"
            >
              {submitting ? "Saving…" : "Place EFT Order"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
