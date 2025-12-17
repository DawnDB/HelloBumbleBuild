import Link from "next/link";

export default function Shop() {
  const categories = [
    {
      slug: "diapering",
      name: "Diapering",
    },
    {
      slug: "mom",
      name: "Mom",
    },
    {
      slug: "essentials",
      name: "Essentials",
    },
    {
      slug: "preloved",
      name: "Pre-Loved",
      href: "/preloved", // special case, outside /shop
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center text-center px-6 py-20">

      {/* Page Heading */}
      <h1 className="text-4xl mb-6 font-hand">
        Shop
      </h1>

      {/* Description */}
      <p className="text-lg mb-8 font-sans">
        Select a category to browse products.
      </p>

      {/* Category Cards */}
      <div className="flex flex-col gap-8 w-full max-w-md">
        {categories.map((cat) => {
          const href = cat.href ?? `/shop/${cat.slug}`;

          return (
            <Link key={cat.slug} href={href} className="block">
              <div className="rounded-2xl shadow-md overflow-hidden">
                <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-600">
                  Image Placeholder
                </div>
                <h2 className="text-2xl py-4 font-hand">
                  {cat.name}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}