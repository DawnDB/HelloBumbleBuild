"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart
  useEffect(() => {
    const saved = localStorage.getItem("hellobumbleCart");
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("hellobumbleCart", JSON.stringify(cartItems));
  }, [cartItems]);

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

  return (
    <div className="min-h-screen px-6 py-20 flex justify-center">
      <div className="w-full max-w-4xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10">

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-hellobumble text-neutral-blackText mb-3">
            Your Cart
          </h1>
          <p className="font-description italic text-neutral-blackText">
            A few beautiful essentials, almost ready for home.
          </p>
        </header>

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div className="text-center space-y-4">
            <p className="font-description text-lg text-neutral-blackText">
              Your cart is currently empty.
            </p>
            <Link
              href="/shop"
              className="underline font-description text-neutral-palePurpleClickable"
            >
              Browse the shop →
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <div
                key={item.cartKey}
                className="flex flex-col sm:flex-row items-center gap-6 bg-white/60 p-5 rounded-2xl shadow-soft"
              >
                {/* Image */}
                {item.image && (
                  <div className="w-28 h-28 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-product text-xl text-neutral-blackText">
                    {item.name}
                  </h2>

                  <p className="font-description text-sm opacity-80">
                    {item.color && `Color: ${item.color}`}
                    {item.size && ` • Size: ${item.size}`}
                    {item.style && ` • Style: ${item.style}`}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decrement(item.cartKey)}
                    className="btn-quantity-blue w-8 h-8 rounded-xl text-lg"
                  >
                    –
                  </button>

                  <span className="font-description text-lg">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increment(item.cartKey)}
                    className="btn-quantity-blue w-8 h-8 rounded-xl text-lg"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.cartKey)}
                  className="font-description text-sm underline text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Continue to Shipping */}
            <div className="bg-white/60 p-6 rounded-2xl shadow-soft flex justify-center">
              <Link
                href="/cart/shipping"
                className="btn-cart px-10 py-4 rounded-2xl"
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