"use client";

import Link from "next/link";

export default function PreLovedPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-[url('/pastel-marble.jpg')] bg-cover bg-center flex justify-center">

      {/* Main Content Box */}
      <div className="w-full max-w-4xl bg-whiteOverlay rounded-2xl shadow-soft p-10">

        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-hellobumble text-black mb-4">
            HelloBumble Pre-Loved
          </h1>
          <p className="text-lg md:text-xl font-description italic">
            Where quality lives on, and every nappy gets the chance to tell a second story.
          </p>
        </header>

        {/* Intro Section */}
        <section className="text-center font-description text-black space-y-4 mb-12">
          <p>
            At <span className="font-hellobumble">HelloBumble</span>, we believe cloth nappies carry little stories — the first giggles, the midnight cuddles, the sleepy morning stretches.
          </p>
          <p>
            So when your baby outgrows a nappy, it doesn’t need to be the end of its journey. It can become part of a gentle circle that helps another baby, another family, and our beautiful planet.
          </p>
          <p>
            Our Pre-Loved system was created with heart. It’s our way of honouring the life each nappy has lived, while giving parents an affordable, eco-conscious option that still feels soft, safe, and full of love.
          </p>
        </section>

        {/* How It Works */}
        <section className="space-y-10 font-description text-black">

          {/* Step 1 */}
          <div className="space-y-3">
            <h3 className="text-xl font-description font-semibold">1. Send Your Nappies Home</h3>
            <p>
              When your little one moves up a size, you can send their nappies back to us.
              We accept nappies that are still in very good condition — clean, cared for, and ready for a new chapter.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <h3 className="text-xl font-description font-semibold">2. We Gently Grade & Refresh Them</h3>
            <p>Every nappy is checked by hand and sorted into:</p>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Grade A</strong> – Excellent, almost-new condition</li>
              <li><strong>Grade B</strong> – Gently worn but still perfectly usable</li>
            </ul>
            <p>We prepare each one with care, making sure it’s fresh, safe, and ready to be loved again.</p>
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <h3 className="text-xl font-description font-semibold">3. You Receive Store Credit</h3>
            <p>
              As a thank-you for giving your nappies a second life, you’ll receive:
            </p>
            <ul className="list-disc list-inside ml-6">
              <li>R20 credit for NB/Small</li>
              <li>R30 credit for Medium/Large/XL</li>
              <li>R5–R10 credit for boosters</li>
            </ul>
            <p>
              (You simply cover the return shipping.) You can save your credit for the next size up, or use it whenever you’re ready.{" "}
              <Link href="/preloved/tandc" className="underline text-pastelBlue">
                T&Cs apply
              </Link>
              .
            </p>
          </div>

          {/* Step 4 */}
          <div className="space-y-3">
            <h3 className="text-xl font-description font-semibold">4. Another Baby Gets a Beautiful Start</h3>
            <p>
              Your pre-loved nappies join our dedicated Pre-Loved section at a lower price, making cloth more accessible for families who truly need it.
              Your nappies become part of something bigger — connection, kindness, and community.
            </p>
          </div>

          {/* Step 5 */}
          <div className="space-y-3">
            <h3 className="text-xl font-description font-semibold">5. The Circle Continues</h3>
            <p>
              Every nappy that comes back reduces waste, supports mindful parenting, and brings softness to another home.
              It’s a gentle cycle of giving back… one tiny bum at a time.
            </p>
          </div>

        </section>

        {/* Pre-Loved Store Button */}
        <section className="mt-12 text-center">
          <Link
            href="/preloved/store"
            className="btn-primary"
          >
            Visit Pre-Loved Store
          </Link>
        </section>

      </div>
    </div>
  );
}
