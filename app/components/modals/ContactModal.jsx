"use client";

import { useState } from "react";
import UnifiedModal from "./UnifiedModal";

export default function ContactModal({ show, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const modalTitle = "Contact Us";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to your email API
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: modalTitle, // ← modal title used as email subject
          message: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        }),
      });

      setSuccessMessage("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setSuccessMessage("Error sending message. Please try again.");
    }
  };

  return (
    <UnifiedModal show={show} onClose={onClose} successMessage={successMessage}>
      <h2 className="text-xl font-bold mb-4 text-black">{modalTitle}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-white/10 border border-gray-300"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-white/10 border border-gray-300"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 rounded bg-white/10 border border-gray-300"
          rows={4}
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-300 rounded py-2 font-semibold hover:bg-purple-400"
        >
          Send Message
        </button>
      </form>
    </UnifiedModal>
  );
}
