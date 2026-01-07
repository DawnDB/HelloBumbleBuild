"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";

function generateOrderNumber() {
  return "HB-" + Date.now();
}

export default function CheckoutPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { cart } = useCart();

  const [shipping, setShipping] = useState(null);
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("payfast");
  const [orderNumber] = useState(generateOrderNumber());
  const [submitting, setSubmitting] = useState(false);

  /* ================================
     🔐 LOAD + GUARDS
  ================================= */
  useEffect(() => {
    const savedShipping = localStorage.getItem("hellobumbleShipping");

    if (!savedShipping || cart.length === 0) {
      router.replace("/cart");
      return;
    }

    const parsed = JSON.parse(savedShipping);
    setShipping(parsed);

    supabase
      .from("shipping_addresses")
      .select("*")
      .eq("id", parsed.addressId)
      .single()
      .then(({ data, error }) => {
        if (error || !data) {
          router.replace("/cart/shipping");
          return;
        }
        setAddress(data);
      });
  }, [cart, router]);

  if (loading || !shipping || !address) return null;

  /* ================================
     💰 TOTAL
  ================================= */
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal + shipping.cost;

  /* ================================
     🧾 CREATE ORDER
  ================================= */
  const createOrder = async () => {
    setSubmitting(true);

    const { error } = await supabase.from("orders").insert({
      user_id: user.id,
      order_number: orderNumber,
      total,
      payment_method: paymentMethod,
      shipping_address_id: shipping.addressId,
      status: "pending",
      items: cart,
    });

    if (error) {
      console.error(error);
      alert("Failed to create order.");
      setSubmitting(false);
      return false;
    }

    return true;
  };

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
          <p>
            {address.address_line1}
            {address.address_line2 && `, ${address.address_line2}`}
          </p>
          <p>
            {address.city}, {address.province}, {address.postal_code}
          </p>

          {/* 💳 Payment method */}
          <div className="mt-6 space-y-2">
            <label className="flex gap-2 items-center">
              <input
                type="radio"
                checked={paymentMethod === "payfast"}
                onChange={() => setPaymentMethod("payfast")}
              />
              PayFast (Card / Instant EFT)
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="radio"
                checked={paymentMethod === "eft"}
                onChange={() => setPaymentMethod("eft")}
              />
              Manual EFT (FNB Business)
            </label>
          </div>
        </div>

        {/* 🧾 Order summary */}
        <div className="bg-white/70 rounded-2xl p-6 shadow">
          {cart.map((item) => (
            <div key={item.slug} className="flex justify-between mb-2">
              <span>{item.name} × {item.quantity}</span>
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

          <p className="text-sm mt-2">
            Order number: <strong>{orderNumber}</strong>
          </p>

          {/* 💳 PAYMENT */}
          {paymentMethod === "payfast" ? (
            <form
              action="/api/payfast"
              method="post"
              onSubmit={async (e) => {
                e.preventDefault();
                const ok = await createOrder();
                if (ok) e.target.submit();
              }}
              className="mt-6"
            >
              <input type="hidden" name="m_payment_id" value={orderNumber} />
              <input
                type="hidden"
                name="custom_str1"
                value={JSON.stringify({ cart, shipping, total })}
              />
              <button
                disabled={submitting}
                className="w-full rounded-2xl bg-black text-white py-3"
              >
                {submitting ? "Processing…" : "Pay with PayFast"}
              </button>
            </form>
          ) : (
            <button
              disabled={submitting}
              onClick={async () => {
                const ok = await createOrder();
                if (ok) router.push("/cart/shipping/checkout/eft-confirmation");
              }}
              className="w-full rounded-2xl border py-3 mt-6"
            >
              {submitting ? "Saving…" : "Place EFT Order"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
