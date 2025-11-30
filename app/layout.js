// app/layout.js

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import localFont from "next/font/local";

// Brand font → HelloBumble (Great Vibes)
const helloBumbleFont = localFont({
  src: "../public/fonts/GreatVibes-Regular.ttf",
  variable: "--font-hellobumble",
});

// Product names → Ingrid Darling
const productFont = localFont({
  src: "../public/fonts/IngridDarling-Regular.ttf",
  variable: "--font-product",
});

// Everything else → ABeeZee
const descriptionFont = localFont({
  src: "../public/fonts/ABeeZee-Regular.ttf",
  variable: "--font-description",
});

export const metadata = {
  title: "HelloBumble",
  description: "Buzz into a better life",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${helloBumbleFont.variable}
        ${productFont.variable}
        ${descriptionFont.variable}
      `}
    >
      <body className="min-h-screen bg-[url('/pastel-marble.jpg')] bg-cover bg-center text-black font-description">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}

// -------------------------
// Header Component
// -------------------------
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 z-50 flex items-center justify-between px-6 py-4 shadow-soft">
      {/* LEFT: MENU */}
      <Menu />

      {/* RIGHT: CART + PROFILE */}
      <div className="flex item// app/layout.js

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import localFont from "next/font/local";

// Brand font → HelloBumble (Great Vibes)
const helloBumbleFont = localFont({
  src: "../public/fonts/GreatVibes-Regular.ttf",
  variable: "--font-hellobumble",
});

// Product names → Ingrid Darling
const productFont = localFont({
  src: "../public/fonts/IngridDarling-Regular.ttf",
  variable: "--font-product",
});

// Everything else → ABeeZee
const descriptionFont = localFont({
  src: "../public/fonts/ABeeZee-Regular.ttf",
  variable: "--font-description",
});

export const metadata = {
  title: "HelloBumble",
  description: "Buzz into a better life",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${helloBumbleFont.variable}
        ${productFont.variable}
        ${descriptionFont.variable}
      `}
    >
      <body className="min-h-screen bg-[url('/pastel-marble.jpg')] bg-cover bg-center text-black font-description">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}

// -------------------------
// Header Component
// -------------------------
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 z-50 flex items-center justify-between px-6 py-4 shadow-soft">
      {/* LEFT: MENU */}
      <Menu />

      {/* RIGHT: CART + PROFILE */}
      <div className="flex items-center gap-4">
        <Link
          href="/cart"
          className="btn-cart text-black font-description"
        >
          Cart
        </Link>

        <Link
          href="/profile"
          className="btn-size text-black font-description"
        >
          Profile
        </Link>
      </div>
    </header>
  );
}

// -------------------------
// MENU Component
// -------------------------
function Menu() {
  return (
    <nav className="flex items-center gap-6">
      {/* HOME */}
      <Link
        href="/"
        className="hover:text-palePurpleClickable font-description"
      >
        Home
      </Link>

      {/* ABOUT DROPDOWN */}
      <div className="relative group">
        <button className="hover:text-palePurpleClickable font-description">
          About
        </button>

        {/* DROPDOWN PANEL */}
        <div className="absolute left-0 mt-3 w-56 bg-white/50 backdrop-blur-md rounded-xl shadow-soft opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 p-4 space-y-3">
          <Link href="/about/hellobumble" className="block hover:text-palePurpleClickable">HelloBumble</Link>
          <Link href="/about/pandm" className="block hover:text-palePurpleClickable">Products & Materials</Link>
          <Link href="/ambuzzador" className="block hover:text-palePurpleClickable">AmbuZZador</Link>
          <Link href="/preloved" className="block hover:text-palePurpleClickable">Pre-Loved</Link>
          <Link href="/about/helpamama" className="block hover:text-palePurpleClickable">Help-a-Mama</Link>
        </div>
      </div>

      {/* CONTACT */}
      <Link
        href="/contact"
        className="hover:text-palePurpleClickable font-description"
      >
        Contact
      </Link>

      {/* SHOP MAIN LINK */}
      <Link
        href="/shop"
        className="hover:text-palePurpleClickable font-description"
      >
        Shop
      </Link>

      {/* SHOP SUBLINKS */}
      <Link
        href="/shop/diapering"
        className="hover:text-palePurpleClickable font-description"
      >
        Diapering
      </Link>

      <Link
        href="/shop/essentials"
        className="hover:text-palePurpleClickable font-description"
      >
        Essentials
      </Link>

      <Link
        href="/shop/mom"
        className="hover:text-palePurpleClickable font-description"
      >
        Mom
      </Link>

      <Link
        href="/preloved"
        className="hover:text-palePurpleClickable font-description"
      >
        Pre-Loved
      </Link>

      {/* PROFILE IN MENU (as requested) */}
      <Link
        href="/profile"
        className="hover:text-palePurpleClickable font-description"
      >
        Profile
      </Link>
    </nav>
  );
}
