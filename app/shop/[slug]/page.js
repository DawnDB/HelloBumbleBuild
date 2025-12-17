"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "../products";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Product not found</p>;

  const unitPrice =
    selectedSize && product.prices
      ? product.prices[selectedSize]
      : 0;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) return;

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
      <Image
        src={selectedColor?.image || product.colors[0].image}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-2xl mx-auto"
      />

      <h1 className="font-product text-3xl mt-6 text-center">
        {product.name}
      </h1>

      <p className="font-description text-center mt-2">
        {product.description}
      </p>

      {/* Sizes */}
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

      {/* Colors */}
      <div className="flex gap-3 justify-center mt-6">
        {product.colors.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedColor(c)}
            className="px-3 py-2 bg-white/60 rounded-xl"
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Price */}
      {selectedSize && (
        <p className="text-center mt-6 font-description text-xl">
          Price: <strong>R{unitPrice}</strong>
        </p>
      )}

      {/* Quantity */}
      <div className="flex justify-center gap-4 mt-6">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
          –
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button
        onClick={handleAddToCart}
        className="btn-cart mt-8 mx-auto block"
      >
        Add to Cart
      </button>
    </div>
  );
}