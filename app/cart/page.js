"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("hellobumbleCart");
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  const increment = (cartKey) =>
    setCartItems((items) =>
      items.map((i) =>
        i.cartKey === cartKey
          ? { ...i, quantity: i.quantity + 1 }
          : i
      )
    );

  const decrement = (cartKey) =>
    setCartItems((items) =>
      items.map((i) =>
        i.cartKey === cartKey
          ? { ...i, quantity: Math.max(1, i.quantity - 1) }
          : i
      )
    );

  const removeItem = (cartKey) =>
    setCartItems((items) =>
      items.filter((i) => i.cartKey !== cartKey)
    );

  const updateCart = () =>
    localStorage.setItem(
      "hellobumbleCart",
      JSON.stringify(cartItems)
    );

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen px-6 py-20 flex justify-center">
      <div className="w-full max-w-4xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10">

        <h1 className="text-4xl font-hellobumble text-center mb-10">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <div
                key={item.cartKey}
                className="flex flex-col sm:flex-row gap-6 bg-white/60 p-5 rounded-2xl"
              >
                <div className="w-28 h-28 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-product text-xl">
                    {item.name}
                  </h2>

                  <p className="font-description text-sm opacity-80">
                    Color: {item.color} • Size: {item.size}
                  </p>

                  <p className="font-description mt-2">
                    R{item.price} × {item.quantity} ={" "}
                    <strong>
                      R{item.price * item.quantity}
                    </strong>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={() => decrement(item.cartKey)}>
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item.cartKey)}>
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.cartKey)}
                  className="underline text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Cart summary */}
            <div className="bg-white/60 p-6 rounded-2xl flex flex-col gap-4">
              <p className="text-xl text-center">
                Cart Total: <strong>R{cartTotal}</strong>
              </p>

              <button
                onClick={updateCart}
                className="btn-primary"
              >
                Update Cart
              </button>

              <Link
                href="/cart/shipping"
                className="btn-cart text-center"
              >
                Continue to Shipping →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}