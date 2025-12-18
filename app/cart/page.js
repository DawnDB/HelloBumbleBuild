"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen px-6 py-20 flex justify-center">
      <div className="w-full max-w-4xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10">

        <h1 className="text-4xl font-hellobumble text-center mb-10">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
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
                  <button
                    onClick={() =>
                      updateQuantity(item.cartKey, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    –
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.cartKey, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.cartKey)}
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