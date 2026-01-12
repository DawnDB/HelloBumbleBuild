"use client";

import { useModal } from "@/app/ClientShell";

export default function AmbuzzadorPage() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center font-description">
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10 text-center">
        <h1 className="text-5xl mb-6 font-hellobumble text-neutral-blackText">
          HelloBumble AmbuZZador Program
        </h1>

        <h2 className="text-2xl mb-4 tracking-wide">
          Become Part of the Buzz
        </h2>

        <p className="max-w-2xl mx-auto mb-6 opacity-90 leading-relaxed">
          The HelloBumble AmbuZZador Program is our way of growing a real,
          loving, family-centered community. We are looking for{" "}
          <strong>
            moms, moms-to-be, cloth moms, moms switching from disposables,
            midwives, doulas, and day-care caregivers
          </strong>{" "}
          who believe in natural, affordable, truly functional cloth essentials.
        </p>

        <p className="max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
          As an AmbuZZador, you'll get early access to new products, exclusive
          discounts, and opportunities to test items before launch. In return,
          we simply ask that you share honest reviews, photos, and help spread
          the HelloBumble buzz.
        </p>

        <h2 className="text-2xl mb-4 tracking-wide">
          How It Works
        </h2>

        <p className="max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
          Click the button below to apply. A form will open.
          Once submitted, we'll review your application and contact you.
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
