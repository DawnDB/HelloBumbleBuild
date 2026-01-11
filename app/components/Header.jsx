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
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-soft">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Left desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/shop" className="text-sm font-medium">
            Shop
          </Link>
          <Link href="/preloved" className="text-sm font-medium">
            Pre-Loved
          </Link>
        </div>

        {/* Brand */}
        <Link
          href="/about/hellobumble"
          className="absolute left-1/2 -translate-x-1/2 text-4xl font-hellobumble hover:text-neutral-palePurpleClickable"
        >
          HelloBumble
        </Link>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-md"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Right desktop icons */}
        <div className="hidden md:flex items-center gap-5 text-xl">

          {/* Login icon only (no profile before launch) */}
          {!user && (
            <Link
              href="/login"
              aria-label="Login"
              className="hover:text-neutral-palePurpleClickable transition"
            >
              <FaUser />
            </Link>
          )}

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Cart"
            className="hover:text-neutral-palePurpleClickable transition"
          >
            <FaShoppingCart />
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="ml-auto w-72 bg-white/90 backdrop-blur-md h-full p-6 flex flex-col">
            <div className="flex justify-end">
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-2"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

            <MobileMenu
              closeMenu={() => setMobileOpen(false)}
              user={user}
            />
          </div>
        </div>
      )}
    </header>
  );
}
