"use client";

import Link from "next/link";

export default function ShopPage() {
  const categories = [
    {
      name: "Diapering",
      slug: "diapering",
    },
    {
      name: "Mom",
      slug: "mom",
    },
    {
      name: "Essentials",
      slug: "essentials",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20 text-blackText">
      {/* PAGE TITLE */}
      <h1 className="text-4xl mb-4 text-center font-hellobumble">
        Shop
      </h1>

      <p className="text-center mb-12 font-description opacity-90">
        Choose a category to start your HelloBumble journey 🐝
      </p>

      {/* CATEGORY GRID */}
      <div className="max-w-md mx-auto flex flex-col gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop/${cat.slug}`}
            className="group block"
          >
            <div className="bg-whiteOverlay backdrop-blur-sm rounded-2xl shadow-soft overflow-hidden transition transform group-hover:scale-[1.02]">
              {/* IMAGE PLACEHOLDER */}
              <div className="h-44 bg-gray-200 flex items-center justify-center text-gray-500 font-description">
                Image Placeholder
              </div>

              {/* CATEGORY NAME */}
              <div className="py-4">
                <h2 className="text-2xl text-center font-hellobumble">
                  {cat.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}