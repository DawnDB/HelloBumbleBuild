"use client";

import Link from "next/link";
import { products } from "../products";

export default function EssentialsPage() {
  const essentialsProducts = products.filter(
    (p) => p.category === "essentials"
  );

  return (
    <div className="min-h-screen px-6 py-20 text-blackText">
      {/* Page Heading */}
      <h1 className="text-4xl mb-10 text-center font-hellobumble">
        Essentials
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
        {essentialsProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="bg-whiteOverlay backdrop-blur-sm rounded-2xl p-4 shadow-soft hover:scale-[1.02] transition block"
          >
            {/* Image Placeholder */}
            <div className="h-28 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-description">
              Image
            </div>

            {/* Product Name */}
            <p className="mt-3 text-center font-hellobumble">
              {product.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Custom Fabric Message */}
      <p className="mt-20 text-center font-description opacity-90 max-w-xl mx-auto">
        Got a fabric you’re absolutely in love with? 🐝💛  
        <button className="underline text-palePurpleClickable ml-1">
          Send us a little buzz
        </button>{" "}
        and we’ll happily chat about making something just for you.
      </p>
    </div>
  );
}