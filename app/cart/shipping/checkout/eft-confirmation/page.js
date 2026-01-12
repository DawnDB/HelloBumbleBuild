import { Suspense } from "react";
import EFTConfirmationClient from "./EFTConfirmationClient";

export default function EFTConfirmationPage() {
  return (
    <Suspense fallback={<Loading />}>
      <EFTConfirmationClient />
    </Suspense>
  );
}

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="opacity-70">Loading payment details…</p>
    </div>
  );
}
