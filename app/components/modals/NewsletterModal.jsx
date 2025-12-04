"use client";

import { useState } from "react";
import UnifiedModal from "./UnifiedModal";

export default function NewsletterModal({ show, onClose }) {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const modalTitle = "Newsletter Subscription";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example: send data to your API
    try {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: modalTitle, // ← this sets the email subject
          message: `New subscriber: ${email}`,
        }),
      });

      setSuccessMessage("Subscription successful!");
      setEmail(""); // clear form
    } catch (err) {
      console.error(err);
      setSuccessMessage("Error sending. Please try again.");
    }
  };

  return (
    <UnifiedModal show={show} onClose={onClose} successMessage={successMessage}>
      <h2 className="text-xl font-bold mb-4 text-black">{modalTitle}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-white/10 border border-gray-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-300 rounded py-2 font-semibold hover:bg-purple-400"
        >
          Subscribe
        </button>
      </form>
    </UnifiedModal>
  );
}
