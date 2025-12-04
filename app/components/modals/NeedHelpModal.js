"use client";

import { useState } from "react";
import UnifiedModal from "@/app/components/modal/UnifiedModal";

export default function NeedHelpModal({ show, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    babyAge: "",
    babyWeight: "",
    situation: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/helpamama", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "Need" }),
      });

      setSubmitted(true);

      setForm({
        name: "",
        babyAge: "",
        babyWeight: "",
        situation: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <UnifiedModal
      show={show}
      onClose={onClose}
      successMessage={submitted ? "Your request has been sent!" : ""}
    >
      {!submitted && (
        <div>
          <h2 className="text-3xl font-hellobumble text-center mb-4">
            Help-a-Mama Request
          </h2>

          <form
            className="font-description flex flex-col space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full p-3 rounded-2xl bg-white/10 text-black placeholder-black font-description"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              className="w-full p-3 rounded-2xl bg-white/10 text-black placeholder-black font-description"
              placeholder="Baby Age"
              name="babyAge"
              value={form.babyAge}
              onChange={handleChange}
            />

            <input
              className="w-full p-3 rounded-2xl bg-white/10 text-black placeholder-black font-description"
              placeholder="Baby Weight"
              name="babyWeight"
              value={form.babyWeight}
              onChange={handleChange}
            />

            <textarea
              className="w-full p-3 rounded-2xl bg-white/10 text-black placeholder-black font-description"
              placeholder="Tell us about your situation"
              name="situation"
              value={form.situation}
              rows={3}
              onChange={handleChange}
            />

            <button type="submit" className="btn-cart w-full mt-2">
              Send Request
            </button>

            <button type="button" className="btn-size w-full" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      )}
    </UnifiedModal>
  );
}
