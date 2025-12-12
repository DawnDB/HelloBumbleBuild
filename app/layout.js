"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import localFont from "next/font/local";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import Image from "next/image";

// Import modals
import BuzzLetterModal from "@/app/components/modals/NewsletterModal";
import ContactModal from "@/app/components/modals/ContactModal";

// Fonts (local)
const helloBumbleFont = localFont({ src: "/fonts/GreatVibes-Regular.ttf", variable: "--font-hellobumble" });
const productFont = localFont({ src: "/fonts/IngridDarling-Regular.ttf", variable: "--font-product" });
const descriptionFont = localFont({ src: "/fonts/ABeeZee-Regular.ttf", variable: "--font-description" });

// Use the contact number saved in memory (international format)
const WHATSAPP_INTL = "27749735861"; // 074 973 5861 -> +27 74 973 5861

export const metadata = {
  title: "HelloBumble",
  description: "Buzz into a better life",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <html lang="en" className={`${helloBumbleFont.variable} ${productFont.variable} ${descriptionFont.variable}`}>
      <body className="min-h-screen bg-[url('/pastel-marble.jpg')] bg-cover bg-center text-neutral-blackText font-description">
        <Header />
        <main className="pt-32 pb-48">{children}</main>

        <Footer
          onOpenNewsletter={() => setShowNewsletter(true)}
          onOpenContact={() => setShowContactModal(true)}
        />

        <BuzzLetterModal isOpen={showNewsletter} onClose={() => setShowNewsletter(false)} />
        <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
      </body>
    </html>
  );
}

/* ---------------------------------- HEADER ----------------------------------- */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-soft">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* left: optional nav (desktop could have items here later) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/shop" className="text-sm font-medium">Shop</Link>
          <Link href="/preloved" className="text-sm font-medium">Pre-Loved</Link>
        </div>

        {/* center: brand */}
        <Link
          href="/about/hellobumble"
          className="absolute left-1/2 -translate-x-1/2 text-4xl font-hellobumble hover:text-neutral-palePurpleClickable"
        >
          HelloBumble
        </Link>

        {/* right: mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-md"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* desktop right-side (can add links or icons) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/profile" className="text-sm font-medium">Profile</Link>
          <Link href="/cart" className="text-sm font-medium">Cart</Link>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="ml-auto w-72 bg-white/90 backdrop-blur-md h-full p-6 flex flex-col">
            <div className="flex justify-end">
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2">
                <FaTimes className="text-2xl" />
              </button>
            </div>

            <MobileMenu closeMenu={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------- MOBILE MENU ----------------------------------- */
function MobileMenu({ closeMenu }) {
  return (
    <nav className="flex flex-col gap-4 mt-2 text-lg">
      <Link href="/" onClick={closeMenu}>Home</Link>

      <p className="font-product font-semibold mt-4">About</p>
      <Link href="/about/hellobumble" className="ml-4" onClick={closeMenu}>HelloBumble</Link>
      <Link href="/about/pandm" className="ml-4" onClick={closeMenu}>Products & Materials</Link>
      <Link href="/ambuzzador" className="ml-4" onClick={closeMenu}>AmbuZZador</Link>
      <Link href="/preloved" className="ml-4" onClick={closeMenu}>Pre-Loved</Link>
      <Link href="/about/helpamama" className="ml-4" onClick={closeMenu}>Help-a-Mama</Link>
      <a href="#footer-contact" onClick={closeMenu}>Contact</a>

      <p className="font-product font-semibold mt-4">Shop</p>
      <Link href="/shop/diapering" className="ml-4" onClick={closeMenu}>Diapering</Link>
      <Link href="/shop/essentials" className="ml-4" onClick={closeMenu}>Essentials</Link>
      <Link href="/shop/mom" className="ml-4" onClick={closeMenu}>Mom</Link>

      {/* SECOND pre-loved link (on purpose, as you said!) */}
      <Link href="/preloved" className="ml-4" onClick={closeMenu}>Pre-Loved</Link>

      <Link href="/profile" className="ml-4" onClick={closeMenu}>Profile</Link>
    </nav>
  );
}

/* ---------------------------------- FOOTER ----------------------------------- */
function Footer({ onOpenNewsletter, onOpenContact }) {
  return (
    <footer id="footer-contact" className="bg-neutral-whiteOverlay backdrop-blur-md rounded-t-3xl shadow-soft px-6 py-12 mt-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-product mb-2">Sign up for our new arrivals, promotions and discounts letter.</h2>
          <p className="text-sm mb-4">Emails will be few and far in between to ensure we do not spam you.</p>
          <button
            className="mt-2 px-6 py-3 rounded-xl bg-pastel-pink shadow-soft font-medium"
            onClick={onOpenNewsletter}
          >
            Sign Up
          </button>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-product mb-3">Contact us</h3>
          <p className="flex items-center gap-2 mb-2"><FaPhone /> Dawn - 074 973 5861</p>
          <p className="flex items-center gap-2"><FaEnvelope /> dawn@hellobumble.co.za</p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_INTL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-2"
            >
              <FaWhatsapp className="text-2xl" /> <span className="sr-only">WhatsApp</span>
            </a>

            <a href="https://www.facebook.com/share/1KHh7JdWk3/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-2xl" />
            </a>

            <a href="https://www.instagram.com/_hellobumble_?igsh=NmN5bGt6ODI5Y2wz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl" />
            </a>

            <a href="https://www.tiktok.com/@_hellobumble_?_r=1&_t=ZM-91qpeuJJyfL" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Branding & Links */}
        <div className="text-center md:text-right">
          <Image src="/hellobumble-logo.jpg" alt="HelloBumble logo" width={120} height={120} className="mx-auto md:ml-auto rounded-full" />
          <p className="font-hellobumble text-3xl mt-4">Join the BuZZ</p>

          <div className="mt-6 flex flex-col items-center md:items-end gap-2">
            <Link href="/about/hellobumble">HelloBumble</Link>
            <Link href="/about/pandm">Products and Materials</Link>
            <Link href="/ambuzzador">AmbuZZador</Link>
            <Link href="/preloved">Pre-Loved</Link>
            <Link href="/about/helpamama">Help-a-Mama</Link>
            <button className="text-sm underline mt-2" onClick={onOpenContact}>Contact us</button>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm">All rights reserved</p>
        <p className="font-hellobumble text-2xl mt-4">HelloBumble est. 2025</p>
        <button className="mx-auto block mt-6 text-sm underline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
      </div>
    </footer>
  );
}