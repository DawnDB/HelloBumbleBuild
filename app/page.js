import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-24 px-6">

      {/* --- HELLOBUMBLE TITLE (NO BOX) --- */}
      <h1 className="text-5xl font-hellobumble text-neutral-blackText mb-2">
        HelloBumble
      </h1>

      <p className="text-lg font-product tracking-wide text-neutral-blackText">
        Buzz into a better life
      </p>

      <p className="text-lg font-product tracking-wide mb-10 text-neutral-blackText">
        Mom &amp; Baby Cloth Essentials
      </p>

      {/* --- ABOUT SECTION --- */}
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-6 mb-10 text-center">
        <Link href="/about/hellobumble">
          <h2 className="text-3xl font-description text-neutral-palePurpleClickable mb-2 cursor-pointer">
            About HelloBumble
          </h2>
        </Link>

        <p className="font-description text-neutral-blackText">
          At HelloBumble, we believe in comfort, simplicity, and sustainability.
          Our cloth essentials are thoughtfully crafted to support your parenting
          journey with softness, practicality, and eco-friendly choices.
        </p>
      </div>

      {/* --- PRODUCTS & MATERIALS --- */}
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-6 mb-10 text-center">
        <Link href="/about/pandm">
          <h2 className="text-3xl font-description text-neutral-palePurpleClickable mb-2 cursor-pointer">
            Our Products &amp; Materials
          </h2>
        </Link>

        <p className="font-description text-neutral-blackText">
          Explore the natural, breathable fabrics we use — always chosen for{" "}
          <strong>comfort and function first</strong>.
        </p>
      </div>

      {/* --- SHOP SECTION --- */}
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-6 mb-10 text-center">
        <Link href="/shop">
          <h2 className="text-3xl font-description text-neutral-palePurpleClickable mb-4 cursor-pointer">
            Shop HelloBumble
          </h2>
        </Link>

        <Link href="/shop">
          <div className="w-full h-48 bg-white/40 rounded-xl flex items-center justify-center cursor-pointer">
            <p className="font-description text-neutral-blackText opacity-60">
              Shop Photo Placeholder
            </p>
          </div>
        </Link>
      </div>

      {/* --- TREASURY --- */}
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-6 mb-10 text-center">
        <h2 className="text-3xl font-description text-neutral-blackText mb-4">
          Treasury
        </h2>

        <div className="flex flex-col gap-3">
          <Link
            href="/preloved"
            className="text-2xl font-description text-neutral-palePurpleClickable"
          >
            Pre-Loved
          </Link>

          <Link
            href="/about/helpamama"
            className="text-2xl font-description text-neutral-palePurpleClickable"
          >
            Help-a-Mama
          </Link>
        </div>
      </div>

      {/* --- AMBUZZADOR --- */}
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-6 mb-16 text-center">
        <Link href="/ambuzzador">
          <h2 className="text-3xl font-description text-neutral-palePurpleClickable mb-2 cursor-pointer">
            AmbuZZador
          </h2>
        </Link>

        <p className="font-description text-neutral-blackText">
          Join our hive of ambassadors and help other families discover
          beautiful, practical, earth-minded cloth solutions.
        </p>
      </div>

    </div>
  );
}