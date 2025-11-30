"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Cart() {
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
    <div className="min-h-screen px-6 py-20 text-black">
      <h1
        className="text-4xl mb-10 text-center"
        style={{ fontFamily: "var(--font-description)" }}
      >
        Cart
      </h1>

      {cartItems.length === 0 ? (
        <p
          className="text-center text-lg"
          style={{ fontFamily: "var(--font-description)" }}
        >
          Your cart is empty.
        </p>
      ) : (
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 bg-whiteOverlay p-4 rounded-2xl shadow"
            >
              {/* Image */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center sm:text-left">
                <h2
                  className="text-xl"
                  style={{ fontFamily: "var(--font-description)" }}
                >
                  {item.name}
                </h2>

                <p
                  className="mt-1"
                  style={{ fontFamily: "var(--font-description)" }}
                >
                  R{item.price}
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrement(item.id)}
                  className="btn-quantity-blue w-8 h-8 flex items-center justify-center rounded-xl font-hand text-lg"
                >
                  –
                </button>

                <span
                  className="text-lg"
                  style={{ fontFamily: "var(--font-description)" }}
                >
                  {item.quantity}
                </span>

                <button
                  onClick={() => increment(item.id)}
                  className="btn-quantity-blue w-8 h-8 flex items-center justify-center rounded-xl font-hand text-lg"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 font-description text-sm underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total + Continue */}
          <div className="bg-whiteOverlay p-6 rounded-2xl shadow flex flex-col sm:flex-row justify-between items-center">
            <p
              className="text-xl"
              style={{ fontFamily: "var(--font-description)" }}
            >
              Total: R{totalPrice}
            </p>

            <Link
              href="/cart/shipping"
              className="btn-cart mt-4 sm:mt-0 px-8 py-3 text-lg rounded-2xl shadow font-hand"
            >
              Continue to Shipping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
