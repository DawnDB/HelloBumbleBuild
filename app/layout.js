import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import localFont from "next/font/local";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

// Fonts
const helloBumbleFont = localFont({ src: "/fonts/GreatVibes-Regular.ttf", variable: "--font-hellobumble" });
const productFont = localFont({ src: "/fonts/IngridDarling-Regular.ttf", variable: "--font-product" });
const descriptionFont = localFont({ src: "/fonts/ABeeZee-Regular.ttf", variable: "--font-description" });

export const metadata = {
  title: "HelloBumble",
  description: "Buzz into a better life",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${helloBumbleFont.variable} ${productFont.variable} ${descriptionFont.variable}`}>
      <body className="min-h-screen bg-[url('/pastel-marble.jpg')] bg-cover bg-center text-black font-description">
        <Header />
        <main className="pt-32 pb-48">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/* ---------------------------------- HEADER ----------------------------------- */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-soft flex items-center justify-between px-6 py-4">
      <Link href="/about/hellobumble" className="absolute left-1/2 -translate-x-1/2 text-4xl font-hellobumble hover:text-palePurpleClickable">
        HelloBumble
      </Link>
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(true)}><FaBars className="text-2xl" /></button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="w-64 bg-white/90 backdrop-blur-md h-full p-6 flex flex-col relative">
            <button className="self-end mb-6" onClick={() => setMobileOpen(false)}><FaTimes className="text-2xl" /></button>
            <MobileMenu />
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------- MOBILE MENU ----------------------------------- */
function MobileMenu() {
  return (
    <nav className="flex flex-col gap-4">
      <Link href="/">Home</Link>
      <p className="font-product font-semibold mt-4">About</p>
      <Link href="/about/hellobumble" className="ml-4">HelloBumble</Link>
      <Link href="/about/pandm" className="ml-4">Products & Materials</Link>
      <Link href="/ambuzzador" className="ml-4">AmbuZZador</Link>
      <Link href="/preloved" className="ml-4">Pre-Loved</Link>
      <Link href="/about/helpamama" className="ml-4">Help-a-Mama</Link>
      <a href="#footer-contact">Contact</a>

      <p className="font-product font-semibold mt-4">Shop</p>
      <Link href="/shop/diapering" className="ml-4">Diapering</Link>
      <Link href="/shop/essentials" className="ml-4">Essentials</Link>
      <Link href="/shop/mom" className="ml-4">Mom</Link>
      <Link href="/preloved" className="ml-4">Pre-Loved</Link>
      <Link href="/profile" className="ml-4">Profile</Link>
    </nav>
  );
}

/* ---------------------------------- FOOTER ----------------------------------- */
function Footer() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <footer id="footer-contact" className="bg-white/60 backdrop-blur-md rounded-t-3xl shadow-soft px-8 py-16 mt-24 relative">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="text-2xl font-product">Sign up for our new arrivals, promotions and discounts letter.</h2>
        <p className="text-sm mt-2">Emails will be few and far in between to ensure we do not spam you.</p>
        <button className="mt-4 px-6 py-3 rounded-xl bg-pastelPink shadow-soft" onClick={() => setShowNewsletter(true)}>Sign Up</button>
      </div>

      <h3 className="text-xl font-product mb-4">Contact us</h3>
      <p className="flex items-center gap-2"><FaPhone /> Dawn - 0817676829</p>
      <p className="flex items-center gap-2"><FaEnvelope /> dawn@hellobumble.co.za</p>

      <div className="text-center mt-10">
        <Image src="/hellobumble-logo.jpg" alt="HelloBumble logo" width={120} height={120} className="mx-auto rounded-full" />
        <p className="font-hellobumble text-3xl mt-4">Join the BuZZ</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://wa.me/27817676829" target="_blank">WA</a>
          <a href="https://www.facebook.com/share/1KHh7JdWk3/" target="_blank">FB</a>
          <a href="https://www.instagram.com/_hellobumble_?igsh=NmN5bGt6ODI5Y2wz" target="_blank">IG</a>
          <a href="https://www.tiktok.com/@_hellobumble_?_r=1&_t=ZM-91qpeuJJyfL" target="_blank">TT</a>
        </div>
      </div>

      <div className="mt-16">
        <h4 className="font-product text-lg">About us</h4>
        <div className="flex flex-col gap-1 mt-2">
          <Link href="/about/hellobumble">HelloBumble</Link>
          <Link href="/about/pandm">Products and Materials</Link>
          <Link href="/ambuzzador">AmbuZZador</Link>
          <Link href="/preloved">Pre-Loved</Link>
          <Link href="/about/helpamama">Help-a-Mama</Link>
          <button onClick={() => setShowContactModal(true)}>Contact us</button>
        </div>
      </div>

      <p className="mt-16 text-center text-sm">All rights reserved</p>
      <p className="text-center font-hellobumble text-2xl mt-4">HelloBumble est. 2025</p>
      <button className="mx-auto block mt-6 text-sm underline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>

      <BuzzLetterModal isOpen={showNewsletter} onClose={() => setShowNewsletter(false)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </footer>
  );
}
