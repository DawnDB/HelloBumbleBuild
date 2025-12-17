"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-20 font-description">
      {/* ABOUT CONTENT BOX */}
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10 text-center">
        {/* Main Title */}
        <h1 className="text-5xl mb-6 font-hellobumble text-neutral-blackText">
          About HelloBumble
        </h1>

        {/* Section Heading */}
        <h2 className="text-2xl mb-4 tracking-wider">
          Our Story
        </h2>

        <p className="mb-8 leading-relaxed opacity-90">
          From the moment I found out I was pregnant in 2024, I knew I wanted to
          raise my baby in a more natural, eco-friendly way. I spent months
          researching and buying cloth nappies, wipes, towels, clothing — you
          name it. But once my baby girl arrived in 2025, the reality hit: so
          many of the products available were expensive, impractical, or simply
          not designed by someone who had actually used them.
        </p>

        <p className="mb-8 leading-relaxed opacity-90">
          I found myself adjusting, tweaking, and redesigning almost everything
          I bought just to make it work for us. I complained to my husband
          endlessly about how the people who made A, B, and C must have never
          actually had a baby… and somewhere between the late-night feeds and my
          living room experiments, HelloBumble was born.
        </p>

        {/* Section Heading */}
        <h2 className="text-2xl mb-4 tracking-wider">
          What We Stand For
        </h2>

        <p className="mb-8 leading-relaxed opacity-90">
          HelloBumble is built on the belief that parents deserve products that
          truly work — products that are thoughtfully designed, affordable, and
          comfortable for little ones. We choose our fabrics with intention:
          soft, absorbent, durable, and kind to the planet. Every item is
          created with real parenting in mind, inspired by real experiences.
        </p>

        {/* Section Heading */}
        <h2 className="text-2xl mb-4 tracking-wider">
          Why Moms Love Us
        </h2>

        <p className="mb-8 leading-relaxed opacity-90">
          Our aim is simple: quality over quantity. From nappies to boosters to
          accessories, each HelloBumble product is crafted to last, to perform,
          and to make your day just a little easier. Whether you're new to cloth
          or already in love with it, we’re here to support your journey with
          essentials that feel good and work beautifully.
        </p>

        {/* No Labels Section */}
        <h2 className="text-2xl mb-4 tracking-wider">
          No Labels. Just Love.
        </h2>

        <p className="mb-12 leading-relaxed opacity-90">
          At HelloBumble, we care deeply about your baby <em>and</em> the planet.
          That’s why we don’t use printed or stitched labels on or inside our
          products — fewer labels means softer fabrics, less waste, and a more
          comfortable experience for your little one.
          <br /><br />
          Instead, you’ll recognise HelloBumble items by our{" "}
          <span className="font-hellobumble">
            signature baby-blue and pink stitching, snaps, and zips
          </span>
          , present on all products. (Promotional products may occasionally use
          alternative detailing, but the same heart and quality always remain.)
        </p>

        {/* Shop Button */}
        <Link href="/shop" className="btn-primary">
          Shop Now
        </Link>

        {/* Closing Line */}
        <p className="tracking-wider text-lg opacity-95 mt-10">
          BuZZ into a better life with HelloBumble.
        </p>
      </div>
    </div>
  );
}