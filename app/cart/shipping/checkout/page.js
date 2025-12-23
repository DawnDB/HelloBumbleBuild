"use client";

import { useEffect, useState } from "react";

function generateOrderNumber() {
  return "HB-" + Date.now();
}

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("payfast");
  const [orderNumber] = useState(generateOrderNumber());

  useEffect(() => {
    const savedCart = localStorage.getItem("hellobumbleCart");
    const savedShipping = localStorage.getItem("hellobumbleShipping");

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedShipping) setShipping(JSON.parse(savedShipping));
  }, []);

  if (!shipping || cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <p>Your checkout session has expired.</p>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-product mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Shipping summary */}
        <div className="space-y-4">
          <h2 className="font-semibold">Shipping Details</h2>

          <div className="text-sm space-y-1">
            <p>{shipping.name}</p>
            <p>{shipping.email}</p>
            <p>{shipping.phone}</p>
            <p>
              {shipping.address}, {shipping.city}, {shipping.postal}
            </p>
          </div>

          {/* Payment method */}
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

        {/* Order summary */}
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

          <p className="text-sm mt-2">
            Order number: <strong>{orderNumber}</strong>
          </p>

          {paymentMethod === "payfast" ? (
            <form action="/api/payfast" method="post" className="mt-6">
              <input type="hidden" name="orderNumber" value={orderNumber} />
              <input type="hidden" name="amount" value={total} />
              <input
                type="hidden"
                name="order"
                value={JSON.stringify({ cart, shipping, total })}
              />
              <button className="w-full rounded-2xl bg-black text-white py-3">
                Pay with PayFast
              </button>
            </form>
          ) : (
            <form action="/api/eft" method="post" className="mt-6">
              <input type="hidden" name="orderNumber" value={orderNumber} />
              <input
                type="hidden"
                name="order"
                value={JSON.stringify({ cart, shipping, total })}
              />
              <button className="w-full rounded-2xl border py-3">
                Place EFT Order
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}