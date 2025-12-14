"use client";

import Link from "next/link";

export default function MobileMenu({ closeMenu }) {
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

      {/* intentional duplicate */}
      <Link href="/preloved" className="ml-4" onClick={closeMenu}>Pre-Loved</Link>

      <Link href="/profile" className="ml-4" onClick={closeMenu}>Profile</Link>
    </nav>
  );
}
