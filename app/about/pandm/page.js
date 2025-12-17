"use client";

export default function ProductsAndMaterials() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-20 font-description">
      {/* Main Content Box */}
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10 text-center">
        {/* Page Title */}
        <h1 className="text-5xl mb-10 tracking-wide">
          Products & Materials
        </h1>

        {/* PRODUCTS SECTION */}
        <h2 className="text-2xl mb-4 tracking-wider">
          Products
        </h2>

        <p className="mb-8 leading-relaxed">
          Every HelloBumble product is handmade by a mom — designed, tested,
          tweaked, and perfected through real everyday use. Everything is
          tested in-house with my own baby, and with the help of close friends
          and family, to make sure our products truly work for real families.
        </p>

        <p className="mb-8 leading-relaxed">
          Baby comfort and safety are always the first priority. That’s why
          every HelloBumble design focuses on softness, function, and durability.
          We make products that feel good, perform beautifully, and help make
          parenting just a little easier.
        </p>

        <p className="mb-12 leading-relaxed">
          We believe in full transparency. Each product will always list exactly
          what it’s made of and how it compares, so parents can make confident,
          informed choices.
        </p>

        {/* MATERIALS SECTION */}
        <h2 className="text-2xl mb-4 tracking-wider">
          Materials
        </h2>

        <p className="mb-8 leading-relaxed">
          We try to source locally where possible, but we also search globally
          to ensure we’re working only with the best materials available. All
          fabrics and components we use are baby-safe, gentle on skin, and chosen
          with intention.
        </p>

        <p className="mb-8 leading-relaxed">
          We prioritise natural fibres and eco-conscious choices, always aiming
          to keep our products safe, sustainable, and made with the highest
          quality standards.
        </p>

        {/* MATERIAL LIST */}
        <ul className="text-left mx-auto mb-10 leading-relaxed list-disc pl-6 max-w-md">
          <li>Cotton</li>
          <li>Hemp</li>
          <li>Bamboo</li>
          <li>Polyester</li>
          <li>OEKO-TEX certified TPU</li>
          <li>OEKO-TEX certified snaps</li>
        </ul>

        {/* Closing Line */}
        <p className="tracking-wider text-lg opacity-95">
          Made with love. Made with intention. Made for your little Bumble.
        </p>
      </div>
    </div>
  );
}