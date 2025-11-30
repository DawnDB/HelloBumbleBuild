"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[url('/pastel-marble.jpg')] bg-cover bg-center flex flex-col items-center pt-24 px-6">

      {/* --- HELLOBUMBLE TITLE (NO BOX) --- */}
      <h1 className="text-5xl font-hellobumble text-blackText mb-2">
        HelloBumble
      </h1>

      <p className="text-lg font-product tracking-wide text-blackText">
        Buzz into a better life
      </p>

      <p className="text-lg font-product tracking-wide mb-10 text-blackText">
        Mom&amp;Baby Cloth Essentials
      </p>

      {/* --- ABOUT SECTION (IN BOX) --- */}
      <div className="w-full max-w-3xl bg-whiteOverlay rounded-2xl shadow-soft p-6 mb-10 text-center">
        <Link href="/about/hellobumble">
          <h2 className="text-3xl font-description text-palePurpleClickable cursor-pointer mb-2">
            About HelloBumble
          </h2>
        </Link>

        <p className="font-description text-blackText">
          At HelloBumble, we believe in comfort, simplicity, and sustainability.
          Our cloth essentials are thoughtfully crafted to support your parenting
          journey with softness, practicality, and eco-friendly choices.
        </p>
      </div>

      {/* --- PRODUCTS & MATERIALS SECTION (IN BOX) --- */}
      <div className="w-full max-w-3xl bg-whiteOverlay rounded-2xl shadow-soft p-6 mb-10 text-center">
        <Link href="/about/pandm">
          <h2 className="text-3xl font-description text-palePurpleClickable cursor-pointer mb-2">
            Our Products &amp; Materials
          </h2>
        </Link>

        <p className="font-description text-blackText">
          Explore the natural, breathable fabrics we use — always chosen for{" "}
          <strong>comfort and function first</strong>.
        </p>
      </div>

      {/* --- SHOP SECTION (IN BOX) --- */}
      <div className="w-full max-w-3xl bg-whiteOverlay rounded-2xl shadow-soft p-6 mb-10 text-center">
        <Link href="/shop">
          <h2 className="text-3xl font-description text-palePurpleClickable cursor-pointer mb-4">
            Shop HelloBumble
          </h2>
        </Link>

        {/* Photo placeholder */}
        <Link href="/shop">
          <div className="w-full h-48 bg-white/40 rounded-xl flex items-center justify-center cursor-pointer mb-3">
            <p className="font-description text-blackText opacity-60">
              Shop Photo Placeholder
            </p>
          </div>
        </Link>
      </div>

      {/* --- TREASURY SECTION (IN BOX) --- */}
      <div className="w-full max-w-3xl bg-whiteOverlay rounded-2xl shadow-soft p-6 mb-10 text-center">
        <h2 className="text-3xl font-description text-blackText mb-4">
          Treasury
        </h2>

        <div className="flex flex-col gap-3">
          <Link href="/preloved">
            <p className="text-2xl font-description text-palePurpleClickable cursor-pointer">
              Pre-Loved
            </p>
          </Link>

          <Link href="/about/helpamama">
            <p className="text-2xl font-description text-palePurpleClickable cursor-pointer">
              Help-a-Mama
            </p>
          </Link>
        </div>
      </div>

      {/* --- AMBUZZADOR SECTION (IN BOX) --- */}
      <div className="w-full max-w-3xl bg-whiteOverlay rounded-2xl shadow-soft p-6 mb-10 text-center">
        <Link href="/ambuzzador">
          <h2 className="text-3xl font-description text-palePurpleClickable cursor-pointer mb-2">
            AmbuZZador
          </h2>
        </Link>

        <p className="font-description text-blackText">
          Join our hive of ambassadors and help other families discover
          beautiful, practical, earth-minded cloth solutions.
        </p>
      </div>

      {/* --- CONTACT SECTION (IN BOX) --- */}
      <div className="w-full max-w-3xl bg-whiteOverlay rounded-2xl shadow-soft p-6 mb-6 text-center">
        <p className="font-description text-blackText mb-2">
          dawn@hellobumble.co.za
        </p>
        <p className="font-description text-blackText">
          081 767 6829
        </p>
      </div>

      {/* --- SOCIAL ICONS (NO BOX) --- */}
      <div className="flex justify-center gap-6 text-3xl mb-10">
        <a href="https://wa.me/27817676829" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-[#25D366]" />
        </a>

        <a
          href="https://www.facebook.com/share/1CunQ2gf77/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-[#1877F2]" />
        </a>

        <a
          href="https://www.instagram.com/_hellobumble_?igsh=NmN5bGt6ODI5Y2wz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-[#E1306C]" />
        </a>

        <a
          href="https://www.tiktok.com/@_hellobumble_?_r=1&_t=ZM-91plD7guPGq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="text-black" />
        </a>
      </div>
    </div>
  );
}
