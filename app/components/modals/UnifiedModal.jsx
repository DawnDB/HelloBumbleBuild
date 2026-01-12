"use client";

import { useState } from "react";
import { modalConfigs } from "./modalConfigs";

export default function UnifiedModal({ activeModal, closeModal }) {
  if (!activeModal) return null;

  const config = modalConfigs[activeModal];
  if (!config) return null;

  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // 🐝 Honeypot spam protection
    if (formData.company) return;

    setSubmitting(true);

    try {
      const res = await fetch(config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: config.subject,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          closeModal();
          setFormData({});
        }, 2500);
      }
    } catch (err) {
      console.error("Modal submit error:", err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-center text-xl font-semibold">
          {config.title}
        </h2>

        {success ? (
          <p className="text-center text-green-600">
            {config.successMessage}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {config.fields.map((field) => {
              // 🐝 honeypot (hidden)
              if (field.name === "company") {
                return (
                  <input
                    key="company"
                    type="text"
                    name="company"
                    value={formData.company || ""}
                    onChange={handleChange}
                    className="hidden"
                    autoComplete="off"
                  />
                );
              }

              if (field.type === "textarea") {
                return (
                  <textarea
                    key={field.name}
                    name={field.name}
                    placeholder={field.label}
                    required={field.required}
                    onChange={handleChange}
                    className="w-full rounded border p-2"
                  />
                );
              }

              return (
                <input
                  key={field.name}
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.label}
                  required={field.required}
                  onChange={handleChange}
                  className="w-full rounded border p-2"
                />
              );
            })}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded bg-black px-4 py-2 text-white"
            >
              {submitting ? "Sending..." : "Submit"}
            </button>
          </form>
        )}

        <button
          onClick={closeModal}
          className="mt-4 w-full text-sm text-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}
