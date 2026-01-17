"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "@/app/shop/products";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Product not found</p>;

  /* ===============================
     🔹 AUTO-SELECT SIZE IF NONE
  =============================== */
  useEffect(() => {
    if (!product.sizes && selectedSize === null) {
      setSelectedSize("One Size");
    }
  }, [product.sizes, selectedSize]);

  /* ===============================
     🔹 PRICE LOGIC (SAFE)
  =============================== */
  const unitPrice = product.prices
    ? selectedSize
      ? product.prices[selectedSize]
      : 0
    : product.price ?? 0;

  /* ===============================
     🔹 ADD TO CART
  =============================== */
  const handleAddToCart = () => {
    if (!selectedColor) return;

    const cartItem = {
      cartKey: `${product.slug}-${selectedColor.name}-${selectedSize}`,
      slug: product.slug,
      name: product.name,
      image: selectedColor.image,
      color: selectedColor.name,
      size: selectedSize,
      price: unitPrice,
      quantity,
    };

    const existing =
      JSON.parse(localStorage.getItem("hellobumbleCart")) || [];

    localStorage.setItem(
      "hellobumbleCart",
      JSON.stringify([...existing, cartItem])
    );
  };

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      {/* Image */}
      <Image
        src={selectedColor?.image || product.colors?.[0]?.image}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-2xl mx-auto"
      />

      {/* Name */}
      <h1 className="font-product text-3xl mt-6 text-center">
        {product.name}
      </h1>

      {/* Description */}
      <p className="font-description text-center mt-2">
        {product.description}
      </p>

      {/* Sizes (ONLY if they exist) */}
      {Array.isArray(product.sizes) && (
        <div className="flex gap-3 justify-center mt-6">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-xl ${
                selectedSize === size
                  ? "bg-purple-300"
                  : "bg-white/60"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      )}

      {/* Colors */}
      <div className="flex gap-3 justify-center mt-6">
        {product.colors.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedColor(c)}
            className={`px-3 py-2 rounded-xl ${
              selectedColor?.name === c.name
                ? "bg-purple-200"
                : "bg-white/60"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Price */}
      {unitPrice > 0 && (
        <p className="text-center mt-6 font-description text-xl">
          Price: <strong>R{unitPrice}</strong>
        </p>
      )}

      {/* Quantity */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          –
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="btn-cart mt-8 mx-auto block"
      >
        Add to Cart
      </button>
    </div>
  );
}
