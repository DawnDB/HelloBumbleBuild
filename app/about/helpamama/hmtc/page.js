export function HMTCTerms() {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center font-description">
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10 text-center">
        <h1 className="text-5xl mb-6 font-hellobumble text-neutral-blackText">
          HelloBumble Terms and Conditions
        </h1>

        <p className="leading-relaxed text-left">
          Help-a-Mama nappies are ROAK nappies and are not allowed to be sold.
          Once they become Help-a-Mama nappies, they should live on freely to
          another mama and cloth bum in need. Please honour this by either
          donating your Help-a-Mama nappies back or passing them on to a friend
          in need. Please do not dishonour the sentiment by making another mama
          pay for what you were blessed with.
          <br /><br />
          Help-a-Mama nappies may be in a different condition than Pre-Loved
          nappies. They might have light staining, but we ensure they are always
          fully functional before going to their next home.
          <br /><br />
          The process is similar to Pre-Loved, except no store credit is given
          for donated nappies. We will refund half of the shipping cost (if the
          nappies are still in good enough condition for their next home) upon
          inspection and receipt of the shipping cost statement.
        </p>

        <a
          href="/helpamama"
          className="btn-primary mt-8 inline-block"
        >
          Back to Help-a-Mama
        </a>
      </div>
    </div>
  );
}