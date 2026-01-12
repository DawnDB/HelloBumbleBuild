"use client";

import Link from "next/link";
import { useModal } from "@/app/components/modals/ModalContext";

export default function MobileMenu({ closeMenu }) {
  const { openModal } = useModal();

  return (
    <nav className="flex flex-col gap-4 mt-2 text-lg font-description">

      <Link href="/" onClick={closeMenu}>
        Home
      </Link>

      <p className="font-product font-semibold mt-4">
        About
      </p>

      <Link href="/about/hellobumble" className="ml-4" onClick={closeMenu}>
        HelloBumble
      </Link>

      <Link href="/about/pandm" className="ml-4" onClick={closeMenu}>
        Products & Materials
      </Link>

      <Link href="/ambuzzador" className="ml-4" onClick={closeMenu}>
        AmbuZZador
      </Link>

      <Link href="/preloved" className="ml-4" onClick={closeMenu}>
        Pre-Loved
      </Link>

      <Link href="/about/helpamama" className="ml-4" onClick={closeMenu}>
        Help-a-Mama
      </Link>

      <button
        onClick={() => {
          openModal("contact");
          closeMenu();
        }}
        className="text-left"
      >
        Contact
      </button>

      <p className="font-product font-semibold mt-4">
        Shop
      </p>

      <Link href="/shop/diapering" className="ml-4" onClick={closeMenu}>
        Diapering
      </Link>

      <Link href="/shop/essentials" className="ml-4" onClick={closeMenu}>
        Essentials
      </Link>

      <Link href="/shop/mom" className="ml-4" onClick={closeMenu}>
        Mom
      </Link>

      {/* intentional duplicate */}
      <Link href="/preloved" className="ml-4" onClick={closeMenu}>
        Pre-Loved
      </Link>
    </nav>
  );
}
