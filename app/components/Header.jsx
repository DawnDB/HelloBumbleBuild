"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { useAuth } from "@/app/context/AuthContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow-soft transition-colors ${
        mobileOpen ? "bg-white" : "bg-white/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 relative">

        {/* ===== MOBILE HEADER ===== */}
        <div className="flex items-center justify-between md:hidden">

          {/* Menu (LEFT) */}
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="p-2"
          >
            <FaBars className="text-2xl" />
          </button>

          {/* Brand (CENTER) */}
          <Link
            href="/about/hellobumble"
            className="text-4xl font-hellobumble"
          >
            HelloBumble
          </Link>

          {/* Cart (RIGHT) */}
          <Link href="/cart" aria-label="Cart" className="p-2">
            <FaShoppingCart className="text-2xl" />
          </Link>
        </div>

        {/* ===== DESKTOP HEADER ===== */}
        <div className="hidden md:flex items-center justify-between relative">

          {/* Left links */}
          <div className="flex items-center gap-6">
            <Link href="/shop" className="text-sm font-medium">
              Shop
            </Link>
            <Link href="/preloved" className="text-sm font-medium">
              Pre-Loved
            </Link>
          </div>

          {/* Brand (CENTER ABSOLUTE) */}
          <Link
            href="/about/hellobumble"
            className="absolute left-1/2 -translate-x-1/2 text-4xl font-hellobumble hover:text-neutral-palePurpleClickable transition"
          >
            HelloBumble
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-5 text-xl">
            {!user && (
              <Link
                href="/login"
                aria-label="Login"
                className="hover:text-neutral-palePurpleClickable transition"
              >
                <FaUser />
              </Link>
            )}

            <Link
              href="/cart"
              aria-label="Cart"
              className="hover:text-neutral-palePurpleClickable transition"
            >
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU OVERLAY + DRAWER ===== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">

          {/* Soft white overlay */}
          <div
            className="absolute inset-0 bg-white/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer (slidesfromLEFT to match menu position) */}
          <div className="w-72 h-full bg-neutral-whiteOverlay backdrop-blur-md p-6 flex flex-col relative z-10">

            <div className="flex justify-end">
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-2"
              >
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
