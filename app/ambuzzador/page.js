"use client";

import { useModal } from "@/app/ClientShell";

export default function AmbuzzadorPage() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-20 font-description">
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10 text-center">
        <h1 className="text-5xl mb-10 tracking-wide">
          HelloBumble AmbuZZador Program
        </h1>

        <h2 className="text-2xl mb-4 tracking-wider">
          Become Part of the Buzz
        </h2>

        <p className="mb-8 leading-relaxed">
          The HelloBumble AmbuZZador Program is our way of growing a real,
          loving, family-centered community. We are looking for{" "}
          <strong>
            moms, moms-to-be, cloth moms, moms switching from disposables,
            midwives, doulas, and day-care caregivers
          </strong>{" "}
          who believe in natural, affordable, truly functional cloth essentials.
        </p>

        <p className="mb-8 leading-relaxed">
          As an AmbuZZador, you’ll get early access to new products, exclusive
          discounts, and opportunities to test items before launch. In return,
          we simply ask that you share honest reviews, photos, and help spread
          the HelloBumble buzz.
        </p>

        <h2 className="text-2xl mb-4 tracking-wider">
          How It Works
        </h2>

        <p className="mb-10 leading-relaxed">
          Click the button below to apply. A short form will open. Once submitted,
          we’ll review your application and contact you if you’re a good fit.
        </p>

        <button
          onClick={() => openModal("ambuzzador")}
          className="btn-primary"
        >
          Become an AmbuZZador
        </button>
      </div>
    </div>
  );
}
