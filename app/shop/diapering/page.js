import Link from "next/link";
import { diaperingProducts } from "@/app/data/products/diapering";

export default function DiaperingPage() {
  return (
    <div className="min-h-screen px-6 py-20 text-gray-900">

      {/* Page Heading */}
      <h1 className="text-4xl text-center mb-10 font-hand">
        Diapering
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {diaperingProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/diapering/${product.slug}`}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:scale-[1.02] transition block"
          >
            {/* Image */}
            <div className="w-full h-28 bg-purple-100 rounded-xl flex items-center justify-center text-purple-400 font-sans text-sm">
              Image
            </div>

            {/* Product Name */}
            <p className="mt-3 text-purple-700 text-sm font-hand">
              {product.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}