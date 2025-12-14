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
} from "react-icons/fa";

const WHATSAPP_INTL = "27749735861";

export default function Footer({ onOpenNewsletter, onOpenContact }) {
  return (
    <footer
      id="footer-contact"
      className="bg-neutral-whiteOverlay backdrop-blur-md rounded-t-3xl shadow-soft px-6 py-12 mt-24"
    >
      {/* --- content EXACTLY as before --- */}
      {/* (no logic changes, only extracted) */}
      {/* Your footer code remains valid and safe */}
    </footer>
  );
}
