"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Modals (unchanged)
import BuzzLetterModal from "@/app/components/modals/NewsletterModal";
import ContactModal from "@/app/components/modals/ContactModal";

export default function ClientShell({ children }) {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <Header />

      <main className="pt-32 pb-48">
        {children}
      </main>

      <Footer
        onOpenNewsletter={() => setShowNewsletter(true)}
        onOpenContact={() => setShowContactModal(true)}
      />

      <BuzzLetterModal
        isOpen={showNewsletter}
        onClose={() => setShowNewsletter(false)}
      />

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </>
  );
}
