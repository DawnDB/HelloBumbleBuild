"use client";

import { useState } from "react";
import UnifiedModal from "./UnifiedModal";
import { modalConfigs } from "./modalConfigs";

export default function ConfigModal({ type, show, onClose }) {
  const config = modalConfigs[type];
  const [form, setForm] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!config) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: config.subject,
          message: Object.entries(form)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n"),
        }),
      });

      setSuccessMessage(config.successMessage);
      setForm({});
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UnifiedModal show={show} onClose={onClose} successMessage={successMessage}>
      <h2 className="text-xl font-bold mb-4 text-black text-center">
        {config.title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3 font-description">
        {config.fields.map((field) =>
          field.type === "textarea" ? (
            <textarea
              key={field.name}
              name={field.name}
              placeholder={field.label}
              value={form[field.name] || ""}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 rounded bg-white/10 border border-gray-300"
              required={field.required}
            />
          ) : (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.label}
              value={form[field.name] || ""}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/10 border border-gray-300"
              required={field.required}
            />
          )
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? "Sending..." : "Submit"}
        </button>

        <button type="button" onClick={onClose} className="btn-secondary w-full">
          Close
        </button>
      </form>
    </UnifiedModal>
  );
}