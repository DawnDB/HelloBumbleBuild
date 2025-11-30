"use client";

import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div 
      className="min-h-screen px-6 py-12 bg-[url('/pastel-marble.jpg')] bg-cover bg-center flex justify-center"
    >
      {/* Main Content Box */}
      <div className="w-full max-w-4xl bg-whiteOverlay rounded-2xl shadow-soft p-10 font-description text-gray-900">

        {/* Page Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-hellobumble mb-4 text-black">
            HelloBumble Pre-Loved Terms & Conditions
          </h1>
          <p className="text-lg md:text-xl italic mb-4">
            The gentle guidelines that help every nappy find a second loving home.
          </p>
          <div>
            <Link 
              href="/preloved" 
              className="underline text-palePurpleClickable"
            >
              ← Back to Pre-Loved
            </Link>
          </div>
        </header>

        {/* Terms Section */}
        <section className="space-y-8">
          <p>
            Welcome to HelloBumble Pre-Loved! Our system is designed to give your well-loved nappies and products a second chance while keeping babies comfortable, parents happy, and our planet cared for.
          </p>

          <h2 className="text-2xl font-semibold">1. Condition of Returned Items</h2>
          <p>All nappies and products must be in <strong>very good condition</strong> to be eligible for Pre-Loved credit. This means:</p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>No stains, tears, or damage</li>
            <li>Clean, freshly laundered, and well-cared-for</li>
            <li>All accompanying accessories must also be in excellent condition</li>
          </ul>

          <h2 className="text-2xl font-semibold">2. Shipping</h2>
          <p>
            Customers are responsible for <strong>return shipping costs</strong>. We recommend using a secure, trackable method to ensure your nappies reach us safely.
          </p>

          <h2 className="text-2xl font-semibold">3. Evaluation Process</h2>
          <p>
            Once your items arrive, each nappy and product will be carefully inspected and graded by our team. The evaluation process takes up to <strong>5 business days</strong>. We will keep you informed at every step so you know exactly where your items are in the process.
          </p>
          <p>Grading categories:</p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li><strong>Grade A:</strong> Excellent, almost-new condition</li>
            <li><strong>Grade B:</strong> Gently used but perfectly functional</li>
          </ul>

          <h2 className="text-2xl font-semibold">4. Store Credit</h2>
          <p>After evaluation, you will receive <strong>store credit</strong> according to the grade and type of product returned:</p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>NB/Small nappies – Rx credit</li>
            <li>Medium/Large/XL nappies – Rx credit</li>
            <li>Boosters – Rx credit</li>
          </ul>
          <p>Store credit can be used for your next Pre-Loved purchase at HelloBumble.</p>

          <h2 className="text-2xl font-semibold">5. Communication</h2>
          <p>
            We value transparency and will keep you updated throughout the process—from receiving your items, through grading, to credit allocation. You can always contact us at <a href="mailto:dawn@hellobumble.co.za" className="underline text-palePurpleClickable">dawn@hellobumble.co.za</a> for questions or updates.
          </p>

          <h2 className="text-2xl font-semibold">6. Additional Notes</h2>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Pre-Loved items are resold at a lower price to make cloth nappies accessible to more families.</li>
            <li>Items not meeting the quality standards may be returned to you at your expense or excluded from credit.</li>
            <li>HelloBumble reserves the right to update these Terms & Conditions to improve our Pre-Loved program and ensure quality and safety.</li>
          </ul>

          <p className="mt-6">
            Thank you for being part of our Pre-Loved community. Every nappy that comes back contributes to a gentle, sustainable circle of love, care, and connection.
          </p>
        </section>
      </div>
    </div>
  );
}
