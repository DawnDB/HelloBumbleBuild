"use client";

import { useState } from "react";

export default function UnifiedModal({
  isOpen,
  modalKey,
  config,
  onClose,
}) {
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen || !config) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch(config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSuccess(true);

      // Auto-close after success
      setTimeout(() => {
        setSuccess(false);
        setFormData({});
        onClose();
      }, 2500);
    } catch (err) {
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white/70 rounded-2xl shadow-soft p-6 w-full max-w-md relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {config.title}
        </h2>

        {/* Form */}
        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4">

            {config.fields.map((field) => {
              // 🐝 Honeypot field (hidden from humans)
              if (field.honeypot) {
                return (
                  <input
                    key={field.name}
                    type="text"
                    name={field.name}
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                    onChange={handleChange}
                  />
                );
              }

              // Normal fields
              return (
                <div key={field.name}>
                  {field.type !== "textarea" ? (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      placeholder={field.label}
                      onChange={handleChange}
                      className="input w-full"
                    />
                  ) : (
                    <textarea
                      name={field.name}
                      required={field.required}
                      placeholder={field.label}
                      onChange={handleChange}
                      className="input w-full h-24"
                    />
                  )}
                </div>
              );
            })}

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full"
            >
              {submitting ? "Sending…" : "Submit"}
            </button>
          </form>
        ) : (
          <p className="text-center font-semibold text-neutral-blackText">
            {config.successMessage} 💛🐝
          </p>
        )}
      </div>
    </div>
  );
}
