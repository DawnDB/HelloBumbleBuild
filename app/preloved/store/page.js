import Link from "next/link";
import Image from "next/image";
import GradeBadge from "@/app/components/GradeBadge";

export default function PreLovedStore() {
  // Static example data — easy to replace with DB later
  const products = [
    {
      id: 1,
      name: "WakylooZ Pocket Nappy",
      size: "NB",
      grade: "A",
      price: "R180",
      image: "/placeholder-nappy.jpg",
    },
    {
      id: 2,
      name: "WakylooZ Pocket Nappy",
      size: "Medium",
      grade: "B",
      price: "R140",
      image: "/placeholder-nappy.jpg",
    },
    {
      id: 3,
      name: "Bamboo Booster",
      size: "One Size",
      grade: "A",
      price: "R60",
      image: "/placeholder-booster.jpg",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 flex justify-center">
      <div className="w-full max-w-6xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10">

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-hellobumble text-neutral-blackText mb-3">
            Pre-Loved Store
          </h1>

          <p className="text-lg font-description italic max-w-3xl mx-auto mb-4 text-neutral-blackText">
            Gently loved cloth essentials, carefully checked and ready for a new little story.
          </p>

          <Link
            href="/preloved"
            className="underline text-neutral-palePurpleClickable font-description"
          >
            ← Back to Pre-Loved
          </Link>
        </header>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/60 rounded-2xl shadow-soft p-5 flex flex-col"
            >
              {/* Image + badge */}
              <div className="relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-56"
                />

                <div className="absolute top-3 left-3">
                  <GradeBadge grade={product.grade} />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-product text-xl text-neutral-blackText">
                  {product.name}
                </h3>

                <p className="text-sm text-neutral-blackText/70">
                  Size: {product.size}
                </p>

                <p className="mt-2 font-semibold text-neutral-blackText">
                  {product.price}
                </p>
              </div>

              {/* Action */}
              <button
  className="btn-cart mt-4 w-full"
  aria-label={`Add ${product.name} size ${product.size} to cart`}
>
  Add to Cart
</button>

            </div>
          ))}
        </section>

        {/* Empty-state placeholder (future safe) */}
        {products.length === 0 && (
          <p className="text-center font-description text-neutral-blackText/70 mt-12">
            No Pre-Loved items available right now — check back soon 💛
          </p>
        )}
      </div>
    </div>
  );
}