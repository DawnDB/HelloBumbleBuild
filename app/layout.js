import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import localFont from "next/font/local";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";


// Brand font → HelloBumble (Great Vibes)
const helloBumbleFont = localFont({
src: "/fonts/GreatVibes-Regular.ttf",
variable: "--font-hellobumble",
});


// Headings / Buttons → Ingrid Darling
const productFont = localFont({
src: "/fonts/IngridDarling-Regular.ttf",
variable: "--font-product",
});


// Description font → ABeeZee
const descriptionFont = localFont({
src: "/fonts/ABeeZee-Regular.ttf",
variable: "--font-description",
});


export const metadata = {
title: "HelloBumble",
description: "Buzz into a better life",
icons: { icon: "/favicon.ico" },
};


export default function RootLayout({ children }) {
return (
<html
lang="en"
className={`${helloBumbleFont.variable} ${productFont.variable} ${descriptionFont.variable}`}
>
<body className="min-h-screen bg-[url('/pastel-marble.jpg')] bg-cover bg-center text-black font-description">
<Header />
<main className="pt-32 pb-48">{children}</main>
<Footer />
</body>
</html>
);
}


/* ----------------------------------
HEADER
----------------------------------- */
function Header() {
const [mobileOpen, setMobileOpen] = useState(false);


return (
<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-soft flex items-center justify-between px-6 py-4">
{/* Left Menu */}
<div className="hidden md:flex"><Menu /></div>


{/* Center clickable HelloBumble */}
<Link
href="/about/hellobumble"
className="absolute left-1/2 -translate-x-1/2 text-4xl font-hellobumble hover:text-palePurpleClickable"
>
HelloBumble
</Link>


{/* Mobile */}
<div className="md:hidden">
<button onClick={() => setMobileOpen(true)}><FaBars className="text-2xl" /></button>
</div>


{/* Cart/Profile */}
<div className="flex items-center gap-4">
<Link href="/cart">Cart</Link>
<Link href="/profile">Profile</Link>
</div>


{/* Mobile Drawer */}
{mobileOpen && (
<div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
<div className="w-64 bg-white/90 backdrop-blur-md h-full p-6 flex flex-col relative">
<button className="self-end mb-6" onClick={() => setMobileOpen(false)}>
<FaTimes className="text-2xl" />
</button>
<MobileMenu />
</div>
</div>
)}
</header>
);
}


/* ----------------------------------
MOBILE MENU
----------------------------------- */
function MobileMenu() {
return (
<nav className="flex flex-col gap-4">
<Link href="/">Home</Link>


<p className="font-product font-semibold mt-4">About</p>
<Link href="/about/hellobumble" className="ml-4">HelloBumble</Link>
<Link href="/about/pandm" className="ml-4">Products & Materials</Link>
<Link href="/ambuzzador" className="ml-4">AmbuZZador</Link>
<Link href="/preloved" className="ml-4">Pre-Loved</Link>
<Link href="/about/helpamama" className="ml-4">Help-a-Mama</Link>


{/* Contact scrolls to footer */}
<a href="#footer-contact">Contact</a>


<p className="font-product font-semibold mt-4">Shop</p>
<Link href="/shop/diapering" className="ml-4">Diapering</Link>
<Link href="/shop/essentials" className="ml-4">Essentials</Link>
<Link href="/shop/mom" className="ml-4">Mom</Link>


<Link href="/preloved">Pre-Loved</Link>
<Link href="/profile">Profile</Link>
</nav>
);
}


/* ----------------------------------
FOOTER SECTION (with newsletter + contact modals)
----------------------------------- */
function Footer() {
const [showNewsletter, setShowNewsletter] = useState(false);
const [showContactModal, setShowContactModal] = useState(false);


return (
<footer
id="footer-contact"
className="bg-white/60 backdrop-blur-md rounded-t-3xl shadow-soft px-8 py-16 mt-24 relative"
>
{/* Newsletter Section */}
<div className="text-center max-w-xl mx-auto mb-16">
<h2 className="text-2xl font-product">Sign up for our new arrivals, promotions and discounts letter.</h2>
<p className="text-sm mt-2">Emails will be few and far in between to ensure we do not spam you.</p>
<button
className="mt-4 px-6 py-3 rounded-xl bg-pastelPink shadow-soft"
onClick={() => setShowNewsletter(true)}
>
Sign Up
</button>
</div>


{/* Contact Section */}
<h3 className="text-xl font-product mb-4">Contact us</h3>
<p className="flex items-center gap-2"><FaPhone /> Dawn - 0817676829</p>
<p className="flex items-center gap-2"><FaEnvelope /> dawn@hellobumble.co.za</p>


{/* Logo & Social */}
<div className="text-center mt-10">
<Image src="/hellobumble-logo.jpg" alt="HelloBumble logo" width={120} height={120} className="mx-auto rounded-full" />


<p className="font-hellobumble text-3xl mt-4">Join the BuZZ</p>


<div className="flex justify-center gap-6 mt-4">
<a href="https://wa.me/27817676829" target="_blank">WA</a>
<a href="https://www.facebook.com/share/1KHh7JdWk3/" target="_blank">FB</a>
<a href="https://www.instagram.com/_hellobumble_?igsh=NmN5bGt6ODI5Y2wz" target="_blank">IG</a>
<a href="https://www.tiktok.com/@_hellobumble_?_r=1&_t=ZM-91qpeuJJyfL" target="_blank">TT</a>
</div>
</div>


{/* Lower Links */}
<div className="mt-16">
<h4 className="font-product text-lg">About us</h4>
<div className="flex flex-col gap-1 mt-2">
<Link href="/about/hellobumble">HelloBumble</Link>
<Link href="/about/pandm">Products and Materials</Link>
<Link href="/ambuzzador">AmbuZZador</Link>
<Link href="/preloved">Pre-Loved</Link>
<Link href="/about/helpamama">Help-a-Mama</Link>
<button onClick={() => setShowContactModal(true)}>Contact us</button>
</div>
</div>


<p className="mt-16 text-center text-sm">All rights reserved</p>


<p className="text-center font-hellobumble text-2xl mt-4">HelloBumble est. 2025</p>


<button
className="mx-auto block mt-6 text-sm underline"
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
Back to top
</button>
</footer>
);
}


// Modal logic and Nodemailer integration added


// ---------------------------------------------
// NEWSLETTER (BUZZ LETTER) MODAL
// ---------------------------------------------
import { useState } from "react";


function BuzzLetterModal({ isOpen, onClose }) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [success, setSuccess] = useState(false);
const [loading, setLoading] = useState(false);


const submit = async () => {
setLoading(true);
try {
const res = await fetch("/api/newsletter", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ name, email }),
});
if (res.ok) {
setSuccess(true);
setTimeout(() => {
setSuccess(false);
setName("");
setEmail("");
onClose();
}, 1500);
}
} finally {
setLoading(false);
}
};


if (!isOpen) return null;


return (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
<div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
<h2 className="text-xl mb-4 text-center font-description">Join the BuZZ Letter</h2>


{success ? (
<p className="text-center text-green-600 font-description">Subscribed!</p>
) : (
<>
<input
className="w-full mb-3 p-3 border rounded-xl font-description"
placeholder="Your Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<input
className="w-full mb-3 p-3 border rounded-xl font-description"
placeholder="Your Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>


<button
onClick={submit}
disabled={loading}
className="w-full py-3 rounded-xl bg-pink-300 shadow font-description"
>
{loading ? "Sending..." : "Subscribe"}
</button>
</>
)}


<button onClick={onClose} className="mt-4 w-full text-center text-sm underline font-description">
Close
</button>
</div>
</div>
);
}


// ---------------------------------------------
// CONTACT MODAL
// ---------------------------------------------
function ContactModal({ isOpen, onClose }) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");
const [success, setSuccess] = useState(false);
const [loading, setLoading] = useState(false);


const submit = async () => {
setLoading(true);
try {
const res = await fetch("/api/contact", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ name, email, phone, message }),
});
if (res.ok) {
setSuccess(true);
setTimeout(() => {
setSuccess(false);
setName("");
setEmail("");
setPhone("");
setMessage("");
onClose();
}, 1500);
}
} finally {
setLoading(false);
}
};


if (!isOpen) return null;


return (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
<div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
<h2 className="text-xl mb-4 text-center font-description">Contact Us</h2>


{success ? (
<p className="text-center text-green-600 font-description">Message sent!</p>
) : (
<>
<input className="w-full mb-3 p-3 border rounded-xl font-description" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
<input className="w-full mb-3 p-3 border rounded-xl font-description" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
<input className="w-full mb-3 p-3 border rounded-xl font-description" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
<textarea className="w-full mb-3 p-3 border rounded-xl font-description" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />


<button onClick={submit} disabled={loading} className="w-full py-3 rounded-xl bg-purple-300 shadow font-description">
{loading ? "Sending..." : "Send Message"}
</button>
</>
)}


<button onClick={onClose} className="mt-4 w-full text-center text-sm underline font-description">
Close
</button>
</div>
</div>
);
}






// ----------------------
// NEWSLETTER (BUZZ) MODAL
// ----------------------
import { useState } from "react";


function BuzzModal({ isOpen, onClose }) {
const [form, setForm] = useState({ name: "", email: "" });
const [success, setSuccess] = useState(false);


const handleSubmit = async () => {
const res = await fetch("/api/buzzletter", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
});


if (res.ok) {
setSuccess(true);
setTimeout(() => {
setSuccess(false);
onClose();
}, 1800);
}
};


if (!isOpen) return null;


return (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
<div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl w-80 text-center shadow-xl">
{!success ? (
<>
<h2 className="font-hellobumble text-3xl mb-2">BuZZ Letter</h2>
<p className="text-sm mb-4">Exclusive access to new arrivals, promotions & discounts.</p>


<input
className="w-full mb-3 p-2 rounded-xl border"
placeholder="Your Name"
value={form.name}
onChange={(e) => setForm({ ...form, name: e.target.value })}
/>


<input
className="w-full mb-3 p-2 rounded-xl border"
placeholder="Your Email"
value={form.email}
onChange={(e) => setForm({ ...form, email: e.target.value })}
/>


<button onClick={handleSubmit} className="bg-palePurpleClickable text-white w-full py-2 rounded-xl">Sign Up</button>
</>
) : (
<p className="text-green-600 font-product text-lg">You're in the BuZZ! 🐝</p>
)}
</div>
</div>
);
}


// ----------------------
// CONTACT MODAL
// ----------------------
function ContactModal({ isOpen, onClose }) {
const [form, setForm] = useState({ name: "", email: "", number: "", message: "" });
const [success, setSuccess] = useState(false);


const sendContact = async () => {
const res = await fetch("/api/contactmessage", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
});


if (res.ok) {
setSuccess(true);
setTimeout(() => {
setSuccess(false);
onClose();
}, 1800);
}
};


if (!isOpen) return null;


return (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
<div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl w-80 text-center shadow-xl">
{!success ? (
<>
<h2 className="font-product text-xl mb-2">We look forward to your message</h2>


<input className="w-full mb-3 p-2 rounded-xl border" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
<input className="w-full mb-3 p-2 rounded-xl border" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
<input className="w-full mb-3 p-2 rounded-xl border" placeholder="Phone Number" value={form.number} onChange={(e)=>setForm({...form,number:e.target.value})}/>
<textarea className="w-full mb-3 p-2 rounded-xl border" placeholder="Your Message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}></textarea>


<button onClick={sendContact} className="bg-palePurpleClickable text-white w-full py-2 rounded-xl">Send</button>
</>
) : (
<p className="text-green-600 font-product text-lg">Message Sent! 💛🐝</p>
)}
</div>
</div>
);
}