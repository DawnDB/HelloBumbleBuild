"use client";

import { useState } from "react";
import { diaperingProducts } from "@/app/data/products/diapering";

export default function ProductPage({ params }) {
  const product = diaperingProducts.find(
    (p) => p.slug === params.slug
  );

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  const { name, colors, sizes, images } = product;

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      product: name,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
    alert("Added to cart!");
  };

  return (
    <div className="p-6 text-gray-800">

      {/* PRODUCT NAME */}
      <h1 className="text-3xl font-bold font-hand">
        {name}
      </h1>

      {/* IMAGE — CHANGES WITH COLOR */}
      <div className="w-full h-56 bg-purple-100 rounded-2xl mt-6 shadow-md flex items-center justify-center text-purple-400 font-semibold text-base">
        {images?.[selectedColor] ? (
          <img
            src={images[selectedColor]}
            alt={`${name} - ${selectedColor}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          "Image Placeholder"
        )}
      </div>

      {/* COLOR OPTIONS */}
      <h3 className="mt-10 text-lg font-semibold font-hand">Color</h3>
      <div className="flex gap-3 flex-wrap mt-2 font-hand">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`px-4 py-2 rounded-2xl border-2 text-sm font-semibold ${
              selectedColor === color
                ? "bg-purple-200 border-purple-300 text-purple-700"
                : "bg-white border-purple-200 text-purple-600"
            }`}
          >
            {color}
          </button>
        ))}
      </div>

      {/* SIZE OPTIONS */}
      <h3 className="mt-10 text-lg font-semibold font-hand">Size</h3>
      <div className="flex gap-3 flex-wrap mt-2 font-hand">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-4 py-2 rounded-2xl border-2 text-sm font-semibold ${
              selectedSize === size
                ? "bg-pink-200 border-pink-300 text-pink-700"
                : "bg-white border-pink-200 text-pink-600"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* QUANTITY */}
      <h3 className="mt-10 text-lg font-semibold font-hand">Quantity</h3>
      <div className="flex items-center gap-4 mt-2 font-hand">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="w-10 h-10 rounded-xl bg-red-100 text-red-600 text-xl font-bold"
        >
          –
        </button>

        <div className="w-10 text-center text-lg font-semibold">
          {quantity}
        </div>

        <button
          onClick={() => setQuantity(quantity + 1)}
          className="w-10 h-10 rounded-xl bg-green-100 text-green-700 text-xl font-bold"
        >
          +
        </button>
      </div>

      {/* ADD TO CART */}
      <button
        onClick={handleAddToCart}
        className="mt-10 w-full py-4 bg-yellow-300 text-yellow-900 rounded-xl text-lg font-bold shadow-md font-hand"
      >
        Add to Cart
      </button>
    </div>
  );
}