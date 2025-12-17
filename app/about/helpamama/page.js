"use client";

import { useModal } from "@/app/components/modals/ModalContext";

export default function HelpAMamaPage() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center font-description">
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10 text-center">
        <h1 className="text-5xl mb-6 font-hellobumble text-neutral-blackText">
          HelloBumble Help-a-Mama
        </h1>

        <p className="leading-relaxed">
          We are firm believers that God will provide and sometimes uses others
          to do so. If you are in need,{" "}
          <button
            onClick={() => openModal("needhelp")}
            className="text-palePurpleClickable underline font-medium"
          >
            reach out
          </button>
          .
          <br /><br />
          If you are able to give, please fill out{" "}
          <button
            onClick={() => openModal("donate")}
            className="text-palePurpleClickable underline font-medium"
          >
            this form
          </button>{" "}
          to donate your nappies to Help-a-Mama.
        </p>
      </div>
    </div>
  );
}