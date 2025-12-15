"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaArrowUp,
} from "react-icons/fa";

const WHATSAPP_INTL = "27749735861"; // +27 74 973 5861

export default function Footer({ onOpenNewsletter, onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer-contact"
      className="bg-neutral-whiteOverlay backdrop-blur-md rounded-t-3xl shadow-soft px-6 py-12 mt-24"
    >
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Newsletter */}
        <div className="text-center bg-white/60 rounded-3xl shadow-soft p-8">
          <h3 className="text-xl font-semibold mb-2">
            Sign up for our new arrivals, promotions and discounts letter.
          </h3>
          <p className="text-sm text-neutral-700 mb-6">
            Emails will be few and far in between to ensure we do not spam you.
          </p>

          {onOpenNewsletter && (
            <button
              onClick={onOpenNewsletter}
              className="btn-primary mx-auto"
            >
              Sign up
            </button>
          )}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Start text */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">About us</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about/hellobumble">HelloBumble</Link>
              </li>
              <li>
                <Link href="/about/pandm">Products and Materials</Link>
              </li>
              <li>
                <Link href="/ambuzzador">AmbuZZador</Link>
              </li>
              <li>
                <Link href="/preloved">Pre-Loved</Link>
              </li>
              <li>
                <Link href="/about/helpamama">Help-a-Mama</Link>
              </li>
              <li>
                {onOpenContact && (
                  <button
                    onClick={onOpenContact}
                    className="underline underline-offset-4"
                  >
                    Contact us
                  </button>
                )}
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Contact us</h4>

            <div className="flex items-center gap-3 text-sm">
              <FaPhone />
              <span>Dawn – 074&nbsp;973&nbsp;5861</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope />
              <span>dawn@hellobumble.co.za</span>
            </div>
          </div>

          {/* Branding */}
          <div className="text-center space-y-4">
            <Image
              src="/hellobumble logo.jpg"
              alt="HelloBumble logo"
              width={120}
              height={120}
              className="mx-auto"
            />

            <p className="font-hellobumble text-2xl">
              Join the BuZZ
            </p>

            <div className="flex justify-center gap-5 text-2xl">
              <a
                href={`https://wa.me/${WHATSAPP_INTL}`}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-500" />
              </a>

              <a
                href="https://www.facebook.com/share/1Bdn9cs6RX/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-600" />
              </a>

              <a
                href="https://www.instagram.com/_hellobumble_?igsh=NmN5bGt6ODI5Y2wz"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500" />
              </a>

              <a
                href="https://www.tiktok.com/@_hellobumble_?_r=1&_t=ZM-91qpeuJJyfL"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center space-y-3 text-sm">
          <p>All rights reserved</p>

          <p className="font-hellobumble text-lg">
            HelloBumble est. 2025
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 underline underline-offset-4"
          >
            <FaArrowUp /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}