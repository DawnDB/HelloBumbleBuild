"use client";

import Link from "next/link";
import { products } from "../products";
import { useModal } from "@/app/components/modals/ModalContext";

export default function DiaperingPage() {
  const { openModal } = useModal();

  const diaperingProducts = products.filter(
    (p) => p.category === "diapering"
  );

  return (
    <div className="min-h-screen px-6 py-20 text-blackText">
      <h1 className="text-4xl mb-10 text-center font-hellobumble">
        Diapering
      </h1>

      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
        {diaperingProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="bg-whiteOverlay backdrop-blur-sm rounded-2xl p-4 shadow-soft hover:scale-[1.02] transition block"
          >
            <div className="h-28 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-description">
              Image
            </div>

            <p className="mt-3 text-center font-hellobumble">
              {product.name}
            </p>
          </Link>
        ))}
      </div>

      {/* CUTE CUSTOM FABRIC MESSAGE */}
      <p className="mt-20 text-center font-description opacity-90">
        Have a fabric you absolutely love? 💕
        <button
          onClick={() => openModal("contact")}
          className="underline text-neutral-palePurpleClickable ml-1"
        >
          Pop us a message
        </button>{" "}
        and we’ll happily create something just for you 🐝
      </p>
    </div>
  );
}
