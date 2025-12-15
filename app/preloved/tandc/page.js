import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen px-6 py-12 flex justify-center">
      {/* Main Content Box */}
      <div className="w-full max-w-4xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10 font-description text-neutral-blackText">

        {/* Page Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-hellobumble mb-4">
            HelloBumble Pre-Loved Terms &amp; Conditions
          </h1>

          <p className="text-lg md:text-xl italic mb-4">
            The gentle guidelines that help every nappy find a second loving home.
          </p>

          <Link
            href="/preloved"
            className="underline text-neutral-palePurpleClickable"
          >
            ← Back to Pre-Loved
          </Link>
        </header>

        {/* Terms Content */}
        <section className="space-y-8">

          <p>
            Welcome to HelloBumble Pre-Loved. Our program is designed to give
            well-loved nappies and cloth essentials a second life while keeping
            babies comfortable, parents supported, and waste to a minimum.
          </p>

          <h2 className="text-2xl font-semibold">
            1. Condition of Returned Items
          </h2>
          <p>
            All items must be in <strong>very good condition</strong> to qualify
            for Pre-Loved credit. This means:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>No stains, tears, or damage</li>
            <li>Clean, freshly laundered, and well cared for</li>
            <li>Elastics, snaps, and waterproofing must remain functional</li>
            <li>All included accessories must be in matching condition</li>
          </ul>

          <h2 className="text-2xl font-semibold">2. Shipping</h2>
          <p>
            Customers are responsible for <strong>return shipping costs</strong>.
            We recommend using a trackable courier to ensure items reach us
            safely.
          </p>

          <h2 className="text-2xl font-semibold">3. Evaluation Process</h2>
          <p>
            Once received, each item is carefully inspected and graded by hand.
            This process can take up to <strong>5 business days</strong>.
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li><strong>Grade A:</strong> Excellent, almost-new condition</li>
            <li><strong>Grade B:</strong> Gently worn but fully functional</li>
          </ul>

          <h2 className="text-2xl font-semibold">4. Store Credit</h2>
          <p>
            Approved items earn store credit based on size and type:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>NB / Small nappies – <strong>R20</strong> credit</li>
            <li>Medium / Large / XL nappies – <strong>R30</strong> credit</li>
            <li>Boosters – <strong>R5–R10</strong> credit</li>
          </ul>
          <p>
            Store credit can be saved and used toward future HelloBumble
            Pre-Loved purchases.
          </p>

          <h2 className="text-2xl font-semibold">5. Communication</h2>
          <p>
            We value transparency and will keep you informed throughout the
            process. If you have questions, you may contact us at{" "}
            <a
              href="mailto:dawn@hellobumble.co.za"
              className="underline text-neutral-palePurpleClickable"
            >
              dawn@hellobumble.co.za
            </a>.
          </p>

          <h2 className="text-2xl font-semibold">6. Additional Notes</h2>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              Pre-Loved items are resold at a reduced price to support
              affordability and sustainability.
            </li>
            <li>
              Items that do not meet quality standards may be returned at the
              sender’s cost or excluded from credit.
            </li>
            <li>
              HelloBumble reserves the right to update these terms to ensure
              fairness, safety, and quality.
            </li>
          </ul>

          <p className="pt-4">
            Thank you for being part of the HelloBumble Pre-Loved circle — where
            softness, care, and community continue beyond the first use.
          </p>

        </section>
      </div>
    </div>
  );
}