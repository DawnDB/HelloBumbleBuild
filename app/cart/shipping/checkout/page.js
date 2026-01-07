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

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
      return;
    }

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
      .then(({ data }) => {
        if (!data) router.replace("/cart/shipping");
        else setAddress(data);
      });
  }, [user, loading, cart, router]);

  if (loading || !shipping || !address) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal + shipping.cost;

  const createOrder = async () => {
    setSubmitting(true);

    const { error } = await supabase.from("orders").insert({
      user_id: user.id,
      order_number: orderNumber,
      total,
      payment_method: paymentMethod,
      shipping_address_id: shipping.addressId,
      status: paymentMethod === "payfast" ? "awaiting_payment" : "pending",
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

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-hellobumble mb-10 text-center">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 bg-neutral-whiteOverlay p-6 rounded-2xl shadow-soft">
          <h2 className="font-semibold">Shipping Details</h2>
          <p>{address.full_name}</p>
          <p>{address.phone}</p>
          <p>{address.address_line1}</p>
          <p>{address.city}, {address.province}</p>

          <div className="mt-6 space-y-2">
            <label className="flex gap-2 items-center">
              <input type="radio" checked={paymentMethod === "payfast"} onChange={() => setPaymentMethod("payfast")} />
              PayFast
            </label>
            <label className="flex gap-2 items-center">
              <input type="radio" checked={paymentMethod === "eft"} onChange={() => setPaymentMethod("eft")} />
              Manual EFT
            </label>
          </div>
        </div>

        <div className="bg-white/70 rounded-2xl p-6 shadow">
          {cart.map((item) => (
            <div key={item.slug} className="flex justify-between mb-2">
              <span>{item.name} × {item.quantity}</span>
              <span>R{item.price * item.quantity}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>R{total}</span>
          </div>

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
              <button disabled={submitting} className="w-full bg-black text-white py-3 rounded-2xl">
                Pay with PayFast
              </button>
            </form>
          ) : (
            <button
              disabled={submitting}
              onClick={async () => {
                const ok = await createOrder();
                if (ok)
                  router.push(`/cart/shipping/checkout/eft-confirmation?order=${orderNumber}`);
              }}
              className="w-full border py-3 mt-6 rounded-2xl"
            >
              Place EFT Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
