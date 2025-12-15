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

  const increment = (id) =>
    setCartItems((items) =>
      items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );

  const decrement = (id) =>
    setCartItems((items) =>
      items.map((i) =>
        i.id === id
          ? { ...i, quantity: i.quantity > 1 ? i.quantity - 1 : 1 }
          : i
      )
    );

  const removeItem = (id) =>
    setCartItems((items) => items.filter((i) => i.id !== id));

  const totalPrice = cartItems.reduce(
    (t, item) => t + item.price * item.quantity,
    0
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
              href="/preloved/store"
              className="underline font-description text-neutral-palePurpleClickable"
            >
              Browse Pre-Loved Store →
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">

            {/* Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-6 bg-white/60 p-5 rounded-2xl shadow-soft"
              >
                {/* Image */}
                <div className="w-28 h-28 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-product text-xl text-neutral-blackText">
                    {item.name}
                  </h2>
                  <p className="font-description mt-1 text-neutral-blackText">
                    R{item.price}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decrement(item.id)}
                    className="btn-quantity-blue w-8 h-8 rounded-xl text-lg"
                  >
                    –
                  </button>

                  <span className="font-description text-lg">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increment(item.id)}
                    className="btn-quantity-blue w-8 h-8 rounded-xl text-lg"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="font-description text-sm underline text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total */}
            <div className="bg-white/60 p-6 rounded-2xl shadow-soft flex flex-col sm:flex-row justify-between items-center">
              <p className="font-description text-xl text-neutral-blackText">
                Total: R{totalPrice}
              </p>

              <Link
                href="/cart/shipping"
                className="btn-cart mt-4 sm:mt-0 px-8 py-3 rounded-2xl"
              >
                Continue to Shipping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}