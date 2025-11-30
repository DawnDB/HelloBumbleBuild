// helpamama/page.js
"use client";
import { useState } from "react";


export default function HelpAMamaPage() {
const [showNeedModal, setShowNeedModal] = useState(false);
const [showDonateModal, setShowDonateModal] = useState(false);


return (
<div className="min-h-screen px-6 py-16 text-blackText">
<div className="max-w-3xl mx-auto bg-whiteOverlay backdrop-blur-sm rounded-2xl p-6 shadow">
<h1 className="text-4xl mb-6 font-hellobumble">HelloBumble Help-a-Mama</h1>
<p className="font-description leading-relaxed">
We are firm believers that God will provide and that He sometimes uses other people to do so, and that He brings people to eachother for a reason, so if you happened upon this message and you are in need, please <span className="text-palePurpleClickable underline cursor-pointer" onClick={() => setShowNeedModal(true)}>reach out</span>, we have help-a-mama specifically for this.
<br /><br />
If you are a mama not in need and able to give, please fill out <span className="text-palePurpleClickable underline cursor-pointer" onClick={() => setShowDonateModal(true)}>this form</span>, if you would like to contribute by donating your 'old' nappies to help-a-mama.
</p>
</div>


{/* Need Modal */}
{showNeedModal && (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
<div className="bg-white rounded-2xl p-6 w-full max-w-md shadow">
<h2 className="text-2xl mb-4 font-hellobumble">Help-a-Mama</h2>
<form className="font-description flex flex-col gap-3">
<input className="p-2 rounded-xl border" placeholder="Name" />
<input className="p-2 rounded-xl border" placeholder="Number or Email" />
<input className="p-2 rounded-xl border" placeholder="Baby Age" />
<input className="p-2 rounded-xl border" placeholder="Baby Weight" />
<textarea className="p-2 rounded-xl border" placeholder="Tell us a bit about your situation" />
<button type="submit" className="btn btn-cart w-full mt-2">Send Help-a-Mama Request</button>
<button type="button" className="btn btn-size w-full mt-2" onClick={() => setShowNeedModal(false)}>Close</button>
</form>
</div>
</div>
)}


{/* Donate Modal */}
{showDonateModal && (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
<div className="bg-white rounded-2xl p-6 w-full max-w-md shadow">
<h2 className="text-2xl mb-4 font-hellobumble">Donate to Help-a-Mama</h2>
<form className="font-description flex flex-col gap-3">
<input className="p-2 rounded-xl border" placeholder="Name" />
<input className="p-2 rounded-xl border" placeholder="Number or Email" />
<input className="p-2 rounded-xl border" placeholder="What nappies would you like to donate?" />
<input className="p-2 rounded-xl border" placeholder="Estimated condition" />
<input className="p-2 rounded-xl border" placeholder="How long did you use them?" />
<input className="p-2 rounded-xl border" placeholder="Were they new, pre-loved or HaM?" />
<button type="submit" className="btn btn-cart w-full mt-2">Submit Donation</button>
<button type="button" className="btn btn-size w-full mt-2" onClick={() => setShowDonateModal(false)}>Close</button>
</form>
</div>
</div>
)}
</div>
);
}
