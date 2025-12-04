"use client";

import { useEffect } from "react";

export default function UnifiedModal({ show, onClose, children, successMessage }) {
  // Auto-close the modal if there's a success message
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // closes after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [successMessage, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black hover:text-gray-700"
        >
          ✕
        </button>

        {/* Modal content */}
        {children}

        {/* Success message */}
        {successMessage && (
          <div className="mt-4 text-black text-center font-semibold">
            {successMessage} 💛🐝
          </div>
        )}
      </div>
    </div>
  );
}
