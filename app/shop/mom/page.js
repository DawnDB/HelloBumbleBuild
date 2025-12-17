"use client";

import Link from "next/link";
import { products } from "../products";

export default function MomPage() {
  const momProducts = products.filter(
    (p) => p.category === "mom"
  );

  return (
    <div className="min-h-screen px-6 py-20 text-blackText">
      <h1 className="text-4xl mb-10 text-center font-hellobumble">
        Mom
      </h1>

      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
        {momProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="bg-whiteOverlay backdrop-blur-sm rounded-2xl p-4 shadow-soft hover:scale-[1.02] transition block"
          >
            <div className="h-28 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              Image
            </div>

            <p className="mt-3 text-center font-hellobumble">
              {product.name}
            </p>
          </Link>
        ))}
      </div>

      <p className="mt-20 text-center font-description opacity-90">
        Want your favourite fabric turned into something special? 🌸  
        <button className="underline text-palePurpleClickable ml-1">
          Message us
        </button>{" "}
        and we’ll sort it together.
      </p>
    </div>
  );
}