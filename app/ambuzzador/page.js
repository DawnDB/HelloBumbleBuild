"use client";
import { useState } from "react";
import BecomeAmbuzzadorModal from "./become/modal";


export default function AmbuzzadorPage() {
const [open, setOpen] = useState(false);


return (
<div className="min-h-screen px-6 py-20 bg-[url('/pastel-marble.jpg')] bg-cover bg-center text-black font-description flex flex-col items-center">
<div className="w-full max-w-3xl bg-white/20 backdrop-blur-xl rounded-2xl shadow-soft p-10 text-center">
<h1 className="text-5xl mb-6 font-hellobumble">HelloBumble AmbuZZador Program</h1>


<h2 className="text-2xl mb-4 tracking-wide font-description">Become Part of the Buzz</h2>


<p className="max-w-2xl mx-auto mb-6 opacity-90 leading-relaxed">
The HelloBumble AmbuZZador Program is our way of growing a real,
loving, family-centered community. We are looking for
<strong> moms, moms-to-be, cloth moms, moms switching from disposables,
midwives, doulas, and day‑care caregivers </strong>
who believe in natural, affordable, truly functional cloth essentials.
</p>


<p className="max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
As an AmbuZZador, you'll get early access to new products, exclusive
discounts, and opportunities to test items before launch. In return, we
simply ask that you share honest reviews, photos, and help spread the
HelloBumble buzz.
</p>


<h2 className="text-2xl mb-4 tracking-wide font-description">How It Works</h2>


<p className="max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
Click the button below to apply. A modal will open with the form. Once
submitted, we'll review your application and contact you.
</p>


<button
onClick={() => setOpen(true)}
className="px-8 py-3 bg-pastelBlue border-2 border-pastelBlue text-black rounded-2xl font-description shadow-soft hover:bg-opacity-80 transition"
>
Become an AmbuZZador
</button>
</div>


<BecomeAmbuzzadorModal isOpen={open} onClose={() => setOpen(false)} />
</div>
);
}