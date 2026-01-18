"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "@/app/shop/products";
import { useCart } from "@/app/context/CartContext";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  const { cart, updateQuantity } = useCart();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <p>Product not found</p>
      </div>
    );
  }

  /* ===============================
     🔹 AUTO-SELECT SIZE (SAFE)
  =============================== */
  useEffect(() => {
    if (
      Array.isArray(product.sizes) &&
      product.sizes.length === 1 &&
      !selectedSize
    ) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product.sizes, selectedSize]);

  /* ===============================
     🔹 PRICE LOGIC (SAFE)
  =============================== */
  const unitPrice =
    selectedSize && product.prices?.[selectedSize]
      ? product.prices[selectedSize]
      : 0;

  /* ===============================
     🔹 ADD TO CART (CONTEXT-SAFE)
  =============================== */
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize || unitPrice === 0) return;

    const cartKey = `${product.slug}-${selectedColor.name}-${selectedSize}`;

    const existingItem = cart.find((item) => item.cartKey === cartKey);

    if (existingItem) {
      updateQuantity(cartKey, existingItem.quantity + quantity);
      return;
    }

    const newItem = {
      cartKey,
      slug: product.slug,
      name: product.name,
      image: selectedColor.image,
      color: selectedColor.name,
      size: selectedSize,
      price: unitPrice,
      quantity,
    };

    // add via context
    updateQuantity(cartKey, quantity);
    localStorage.setItem(
      "hellobumbleCart",
      JSON.stringify([...cart, newItem])
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
      {Array.isArray(product.sizes) && (
        <div className="flex gap-3 justify-center mt-6">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-xl ${
                selectedSize === size
                  ? "bg-neutral-palePurpleClickable text-white"
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
                ? "bg-neutral-palePurpleClickable text-white"
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
