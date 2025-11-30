"use client";

import { useState } from "react";

export default function HelpAMamaPage() {
  const [showNeedModal, setShowNeedModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  const [needFormData, setNeedFormData] = useState({
    name: "",
    contact: "",
    babyAge: "",
    babyWeight: "",
    situation: "",
  });
  const [donateFormData, setDonateFormData] = useState({
    name: "",
    contact: "",
    nappies: "",
    condition: "",
    usedDuration: "",
    type: "",
  });

  const [needSubmitted, setNeedSubmitted] = useState(false);
  const [donateSubmitted, setDonateSubmitted] = useState(false);

  // Handlers
  const handleNeedChange = (e) => {
    setNeedFormData({ ...needFormData, [e.target.name]: e.target.value });
  };
  const handleDonateChange = (e) => {
    setDonateFormData({ ...donateFormData, [e.target.name]: e.target.value });
  };

  const handleNeedSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/helpamama", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...needFormData, type: "Need" }),
      });
      setNeedSubmitted(true);
      setNeedFormData({
        name: "",
        contact: "",
        babyAge: "",
        babyWeight: "",
        situation: "",
      });
    } catch (err) {
      console.error(err);
      alert("Oops! Something went wrong.");
    }
  };

  const handleDonateSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/helpamama", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...donateFormData, type: "Donate" }),
      });
      setDonateSubmitted(true);
      setDonateFormData({
        name: "",
        contact: "",
        nappies: "",
        condition: "",
        usedDuration: "",
        type: "",
      });
    } catch (err) {
      console.error(err);
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen px-6 py-16 text-blackText">
      <div className="max-w-3xl mx-auto bg-whiteOverlay backdrop-blur-sm rounded-2xl p-6 shadow">
        <h1 className="text-4xl mb-6 font-hellobumble">
          HelloBumble Help-a-Mama
        </h1>
        <p className="font-description leading-relaxed">
          We are firm believers that God will provide and that He sometimes uses
          other people to do so, and that He brings people to eachother for a
          reason, so if you happened upon this message and you are in need,
          please{" "}
          <span
            className="text-palePurpleClickable underline cursor-pointer"
            onClick={() => setShowNeedModal(true)}
          >
            reach out
          </span>
          , we have help-a-mama specifically for this.
          <br />
          <br />
          If you are a mama not in need and able to give, please fill out{" "}
          <span
            className="text-palePurpleClickable underline cursor-pointer"
            onClick={() => setShowDonateModal(true)}
          >
            this form
          </span>
          , if you would like to contribute by donating your 'old' nappies to
          help-a-mama.
        </p>
      </div>

      {/* Need Modal */}
      {showNeedModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow space-y-4">
            <h2 className="text-2xl mb-2 font-hellobumble">Help-a-Mama</h2>
            {!needSubmitted ? (
              <form
                className="font-description flex flex-col space-y-4"
                onSubmit={handleNeedSubmit}
              >
                <input
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="Name"
                  name="name"
                  value={needFormData.name}
                  onChange={handleNeedChange}
                  required
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="Number or Email"
                  name="contact"
                  value={needFormData.contact}
                  onChange={handleNeedChange}
                  required
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="Baby Age"
                  name="babyAge"
                  value={needFormData.babyAge}
                  onChange={handleNeedChange}
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="Baby Weight"
                  name="babyWeight"
                  value={needFormData.babyWeight}
                  onChange={handleNeedChange}
                />
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="Tell us a bit about your situation"
                  name="situation"
                  value={needFormData.situation}
                  onChange={handleNeedChange}
                  rows={3}
                />
                <button
                  type="submit"
                  className="btn-cart w-full mt-2 hover:opacity-90 transition"
                >
                  Send Help-a-Mama Request
                </button>
                <button
                  type="button"
                  className="btn-size w-full mt-2 hover:opacity-90 transition"
                  onClick={() => setShowNeedModal(false)}
                >
                  Close
                </button>
              </form>
            ) : (
              <p className="font-description text-center text-palePurpleClickable">
                💜 Your Help-a-Mama request has been sent! We’ll reach out soon.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Donate Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow space-y-4">
            <h2 className="text-2xl mb-2 font-hellobumble">
              Donate to Help-a-Mama
            </h2>
            {!donateSubmitted ? (
              <form
                className="font-description flex flex-col space-y-4"
                onSubmit={handleDonateSubmit}
              >
                <input
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="Name"
                  name="name"
                  value={donateFormData.name}
                  onChange={handleDonateChange}
                  required
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="Number or Email"
                  name="contact"
                  value={donateFormData.contact}
                  onChange={handleDonateChange}
                  required
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="What nappies would you like to donate?"
                  name="nappies"
                  value={donateFormData.nappies}
                  onChange={handleDonateChange}
                  required
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="Estimated condition"
                  name="condition"
                  value={donateFormData.condition}
                  onChange={handleDonateChange}
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="How long did you use them?"
                  name="usedDuration"
                  value={donateFormData.usedDuration}
                  onChange={handleDonateChange}
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded-2xl text-blackText font-description"
                  placeholder="Were they new, pre-loved or HaM?"
                  name="type"
                  value={donateFormData.type}
                  onChange={handleDonateChange}
                />
                <button
                  type="submit"
                  className="btn-cart w-full mt-2 hover:opacity-90 transition"
                >
                  Submit Donation
                </button>
                <button
                  type="button"
                  className="btn-size w-full mt-2 hover:opacity-90 transition"
                  onClick={() => setShowDonateModal(false)}
                >
                  Close
                </button>
              </form>
            ) : (
              <p className="font-description text-center text-palePurpleClickable">
                💜 Thank you! Your donation has been submitted.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Contact Info & Social Icons (reuse from contact page) */}
      <div className="max-w-3xl mx-auto mt-12 bg-whiteOverlay backdrop-blur-sm rounded-2xl p-6 shadow space-y-4 text-center">
        <p className="font-description text-lg">
          Phone: <a href="tel:0817676829" className="underline">0817676829</a>
        </p>
        <p className="font-description text-lg">
          Email: <a href="mailto:dawn@hellobumble.co.za" className="underline">dawn@hellobumble.co.za</a>
        </p>
        <div className="flex justify-center gap-6 mt-4">
          {/* Social Icons: Whatsapp, FB, IG, TikTok */}
          {/* reuuse your SVG icons here */}
        </div>
      </div>
    </div>
  );
