// app/layout.js
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import localFont from "next/font/local";
import { FaBars, FaTimes } from "react-icons/fa";

// Brand font → HelloBumble (Great Vibes)
const helloBumbleFont = localFont({
  src: "/fonts/GreatVibes-Regular.ttf",
  variable: "--font-hellobumble",
});

// Headings / Buttons → Ingrid Darling
const productFont = localFont({
  src: "/fonts/IngridDarling-Regular.ttf",
  variable: "--font-product",
});

// Description font → ABeeZee
const descriptionFont = localFont({
  src: "/fonts/ABeeZee-Regular.ttf",
  variable: "--font-description",
});

export const metadata = {
  title: "HelloBumble",
  description: "Buzz into a better life",
  icons: { icon: "/favicon.ico" },
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
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}

/* ----------------------------------
   HEADER COMPONENT
----------------------------------- */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 z-50 flex items-center justify-between px-6 py-4 shadow-soft">
      {/* LEFT: MENU */}
      <div className="hidden md:flex">
        <Menu />
      </div>

      {/* MOBILE HAMBURGER */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={() => setMobileOpen(true)}>
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* RIGHT: CART + PROFILE */}
      <div className="flex items-center gap-4">
        <Link href="/cart" className="btn-cart font-description">
          Cart
        </Link>

        <Link href="/profile" className="btn-size font-description">
          Profile
        </Link>
      </div>

      {/* MOBILE SLIDE-IN PANEL */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="w-64 bg-white/80 backdrop-blur-md h-full p-6 relative flex flex-col">
            <button
              className="self-end mb-6"
              onClick={() => setMobileOpen(false)}
            >
              <FaTimes className="text-2xl" />
            </button>

            <MobileMenu />
          </div>
        </div>
      )}
    </header>
  );
}

/* ----------------------------------
   DESKTOP MENU COMPONENT
----------------------------------- */
function Menu() {
  return (
    <nav className="flex items-center gap-6 font-description">
      <Link href="/" className="hover:text-palePurpleClickable">
        Home
      </Link>

      {/* ABOUT DROPDOWN */}
      <div className="relative group">
        <button className="hover:text-palePurpleClickable">About</button>
        <div className="absolute left-0 mt-3 w-56 bg-white/50 backdrop-blur-md rounded-xl shadow-soft opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 p-4 space-y-3">
          <Link href="/about/hellobumble" className="block font-product hover:text-palePurpleClickable">
            HelloBumble
          </Link>
          <Link href="/about/pandm" className="block font-product hover:text-palePurpleClickable">
            Products & Materials
          </Link>
          <Link href="/ambuzzador" className="block font-product hover:text-palePurpleClickable">
            AmbuZZador
          </Link>
          <Link href="/preloved" className="block font-product hover:text-palePurpleClickable">
            Pre-Loved
          </Link>
          <Link href="/about/helpamama" className="block font-product hover:text-palePurpleClickable">
            Help-a-Mama
          </Link>
        </div>
      </div>

      <Link href="/contact" className="hover:text-palePurpleClickable">
        Contact
      </Link>

      {/* SHOP DROPDOWN */}
      <div className="relative group">
        <button className="hover:text-palePurpleClickable">Shop</button>
        <div className="absolute left-0 mt-3 w-56 bg-white/50 backdrop-blur-md rounded-xl shadow-soft opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 p-4 space-y-3">
          <Link href="/shop/diapering" className="block font-product hover:text-palePurpleClickable">
            Diapering
          </Link>
          <Link href="/shop/essentials" className="block font-product hover:text-palePurpleClickable">
            Essentials
          </Link>
          <Link href="/shop/mom" className="block font-product hover:text-palePurpleClickable">
            Mom
          </Link>
        </div>
      </div>

      <Link href="/preloved" className="hover:text-palePurpleClickable">
        Pre-Loved
      </Link>

      <Link href="/profile" className="hover:text-palePurpleClickable">
        Profile
      </Link>
    </nav>
  );
}

/* ----------------------------------
   MOBILE MENU COMPONENT
----------------------------------- */
function MobileMenu() {
  return (
    <nav className="flex flex-col gap-4 font-product">
      <Link href="/">Home</Link>

      <p className="font-product font-semibold mt-4">About</p>
      <Link href="/about/hellobumble" className="ml-4">HelloBumble</Link>
      <Link href="/about/pandm" className="ml-4">Products & Materials</Link>
      <Link href="/ambuzzador" className="ml-4">AmbuZZador</Link>
      <Link href="/preloved" className="ml-4">Pre-Loved</Link>
      <Link href="/about/helpamama" className="ml-4">Help-a-Mama</Link>

      <Link href="/contact">Contact</Link>

      <p className="font-product font-semibold mt-4">Shop</p>
      <Link href="/shop/diapering" className="ml-4">Diapering</Link>
      <Link href="/shop/essentials" className="ml-4">Essentials</Link>
      <Link href="/shop/mom" className="ml-4">Mom</Link>

      <Link href="/preloved">Pre-Loved</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
