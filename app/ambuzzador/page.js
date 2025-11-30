"use client";

import Link from "next/link";

export default function AmbuzzadorPage() {
  return (
    <div className="min-h-screen bg-[url('/pastel-marble.jpg')] bg-cover bg-center px-6 py-16 flex flex-col items-center">

      {/* Main Content Box */}
      <div className="w-full max-w-3xl bg-whiteOverlay rounded-2xl shadow-soft p-10 flex flex-col items-center text-center font-description text-black">

        {/* Page Title */}
        <h1 className="text-5xl mb-6 font-hellobumble">
          HelloBumble AmbuZZador Program
        </h1>

        {/* Section Heading */}
        <h2 className="text-2xl mb-4 tracking-wider font-description">
          Become Part of the Buzz
        </h2>

        {/* Description */}
        <p className="max-w-2xl mb-6 leading-relaxed opacity-90">
          The HelloBumble AmbuZZador Program is our way of growing a real, loving,
          family-centered community. We are looking for <strong>moms, moms-to-be,
          cloth moms, moms switching from disposables, midwives, doulas, and even
          day‑care caregivers</strong> who believe in natural, affordable, truly
          functional cloth essentials.
        </p>

        <p className="max-w-2xl mb-6 leading-relaxed opacity-90">
          As an AmbuZZador, you’ll get early access to new products, exclusive
          discounts, and opportunities to test items before they launch. In return,
          we simply ask that you share honest reviews, photos, and help spread the
          HelloBumble buzz to other families.
        </p>

        {/* Section Heading */}
        <h2 className="text-2xl mb-4 tracking-wider font-description">
          How It Works
        </h2>

        <p className="max-w-2xl mb-10 leading-relaxed opacity-90">
          Click the button below to become an AmbuZZador and fill out your application directly online. Once submitted, we’ll review your application and get in touch with the next steps.
        </p>

        {/* Become an AmbuZZador Button */}
        <Link
          href="/ambuzzador/become"
          className="px-8 py-3 bg-pastelBlue text-black rounded-2xl font-description border-2 border-pastelBlue hover:bg-opacity-80 transition"
        >
          Become an AmbuZZador
        </Link>

      </div>
    </div>
  );
}
