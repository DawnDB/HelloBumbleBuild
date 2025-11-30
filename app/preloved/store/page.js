"use client";

import Link from "next/link";

export default function PreLovedStore() {
  // Example product data — replace with dynamic data later
  const products = [
    { id: 1, name: "NB Nappy - Grade A", price: "R x", image: "/placeholder-nappy.jpg" },
    { id: 2, name: "Medium Nappy - Grade B", price: "R x", image: "/placeholder-nappy.jpg" },
    { id: 3, name: "Booster - Grade A", price: "R x", image: "/placeholder-booster.jpg" },
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-[url('/pastel-marble.jpg')] bg-cover bg-center flex justify-center">
      
      {/* Main Content Box */}
      <div className="w-full max-w-6xl bg-whiteOverlay rounded-2xl shadow-soft p-10">

        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-hellobumble text-black mb-2">
            HelloBumble Pre-Loved Store
          </h1>
          <p className="text-lg md:text-xl font-description italic max-w-3xl mx-auto mb-4">
            Giving previously loved nappies and boosters a second chance to bring comfort and joy.
          </p>
          <div>
            <Link 
              href="/preloved" 
              className="underline text-palePurpleClickable font-description"
            >
              ← Back to Pre-Loved
            </Link>
          </div>
        </header>

        {/* Products Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-whiteOverlay rounded-2xl shadow-soft p-6 flex flex-col items-center transition hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="font-description text-xl text-black mb-2 text-center">
                {product.name}
              </h3>
              <p className="font-description text-black mb-4">{product.price}</p>
              <button className="btn-cart font-description w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
