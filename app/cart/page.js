"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const cartTotal = cart.length
    ? cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    : 0;

  return (
    <div className="min-h-screen px-6 py-20 flex justify-center">
      <div className="w-full max-w-4xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10">

        <h1 className="text-4xl font-hellobumble text-center mb-10">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center space-y-6">
            <p>Your cart is empty.</p>

            <Link
              href="/shop"
              className="btn-primary inline-block"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">

            {cart.map((item) => (
              <div
                key={item.cartKey}
                className="flex flex-col sm:flex-row gap-6 bg-white/60 p-5 rounded-2xl"
              >
                {/* Image */}
                <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Info */}
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

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        updateQuantity(
                          item.cartKey,
                          item.quantity - 1
                        );
                      }
                    }}
                    disabled={item.quantity === 1}
                    className={`px-2 ${
                      item.quantity === 1
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    –
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.cartKey,
                        item.quantity + 1
                      )
                    }
                    className="px-2"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() =>
                    removeFromCart(item.cartKey)
                  }
                  className="underline text-red-500 text-sm self-start sm:self-center"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Summary */}
            <div className="bg-white/60 p-6 rounded-2xl flex flex-col gap-4">
              <p className="text-xl text-center">
                Cart Total: <strong>R{cartTotal}</strong>
              </p>

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
