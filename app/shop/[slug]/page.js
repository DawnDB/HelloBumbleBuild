"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "../products";

export default function ProductPage() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-description">
        Product not found 🐝
      </div>
    );
  }

  // SAFE DEFAULTS
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || null
  );
  const [selectedStyle, setSelectedStyle] = useState(
    product.styles?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    const cartItem = {
      slug: product.slug,
      name: product.name,
      color: selectedColor?.name,
      size: selectedSize,
      style: selectedStyle,
      quantity,
    };

    console.log("Added to cart:", cartItem);
    alert("Added to cart 🐝");
  };

  return (
    <div className="min-h-screen px-6 py-20 text-blackText max-w-3xl mx-auto">
      {/* PRODUCT NAME */}
      <h1 className="text-4xl mb-4 font-hellobumble text-center">
        {product.name}
      </h1>

      {/* PRODUCT IMAGE */}
      <div className="w-full h-64 bg-gray-200 rounded-2xl shadow-soft flex items-center justify-center mb-6 overflow-hidden">
        {selectedColor && (
          <img
            src={selectedColor.image}
            alt={selectedColor.name}
            className="object-cover w-full h-full"
          />
        )}
      </div>

      {/* DESCRIPTION */}
      <p className="font-description leading-relaxed mb-8 opacity-90 text-center">
        {product.description}
      </p>

      {/* COLORS */}
      {product.colors && (
        <>
          <h3 className="mt-8 mb-2 font-hellobumble">Color</h3>
          <div className="flex gap-3 flex-wrap">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color)}
                className={`px-4 py-2 rounded-2xl border text-sm font-description ${
                  selectedColor?.name === color.name
                    ? "bg-pastelBlue border-pastelBlue"
                    : "bg-whiteOverlay border-gray-300"
                }`}
              >
                {color.name}
              </button>
            ))}
          </div>
        </>
      )}

      {/* SIZES */}
      {product.sizes && (
        <>
          <h3 className="mt-8 mb-2 font-hellobumble">Size</h3>
          <div className="flex gap-3 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-2xl border text-sm font-description ${
                  selectedSize === size
                    ? "bg-pastelPink border-pastelPink"
                    : "bg-whiteOverlay border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </>
      )}

      {/* STYLES */}
      {product.styles && (
        <>
          <h3 className="mt-8 mb-2 font-hellobumble">Style</h3>
          <div className="flex gap-3 flex-wrap">
            {product.styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-4 py-2 rounded-2xl border text-sm font-description ${
                  selectedStyle === style
                    ? "bg-pastelPurple border-pastelPurple"
                    : "bg-whiteOverlay border-gray-300"
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </>
      )}

      {/* QUANTITY */}
      <h3 className="mt-8 mb-2 font-hellobumble">Quantity</h3>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="w-10 h-10 rounded-xl bg-red-100 text-red-600 font-bold"
        >
          –
        </button>
        <span className="font-description">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="w-10 h-10 rounded-xl bg-green-100 text-green-700 font-bold"
        >
          +
        </button>
      </div>

      {/* ADD TO CART */}
      <button
        onClick={handleAddToCart}
        className="mt-10 w-full py-4 rounded-2xl bg-pastelYellow text-blackText font-description shadow-soft"
      >
        Add to Cart
      </button>
    </div>
  );
}