"use client";

import { useState } from "react";
import NeedHelpModal from "@/app/components/modals/NeedHelpModal";
import DonateModal from "@/app/components/modals/DonateModal";

export default function HelpAMamaPage() {
  const [showNeedModal, setShowNeedModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  return (
    <div className="min-h-screen bg-[url('/pastel-marble.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-black">
      <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow">
        <h1 className="text-4xl mb-6 font-hellobumble">HelloBumble Help-a-Mama</h1>

        <p className="font-description leading-relaxed">
          We are firm believers that God will provide and sometimes uses others
          to do so. If you are in need,{" "}
          <span
            className="text-palePurpleClickable underline cursor-pointer"
            onClick={() => setShowNeedModal(true)}
          >
            reach out
          </span>
          .<br /><br />
          If you are able to give, please fill out{" "}
          <span
            className="text-palePurpleClickable underline cursor-pointer"
            onClick={() => setShowDonateModal(true)}
          >
            this form
          </span>{" "}
          to donate your nappies to Help-a-Mama.
        </p>
      </div>

      {/* Modals */}
      <NeedHelpModal show={showNeedModal} onClose={() => setShowNeedModal(false)} />
      <DonateModal show={showDonateModal} onClose={() => setShowDonateModal(false)} />
    </div>
  );
}