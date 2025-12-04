"use client";


import { useState } from "react";
import UnifiedModal from "@/app/components/modal/UnifiedModal";


export default function DonateModal({ show, onClose }) {
const [formData, setFormData] = useState({
name: "",
contact: "",
donationType: "",
message: "",
});


const [success, setSuccess] = useState(false);
const [loading, setLoading] = useState(false);


function handleChange(e) {
setFormData({ ...formData, [e.target.name]: e.target.value });
}


async function handleSubmit(e) {
e.preventDefault();
setLoading(true);


try {
const res = await fetch("/api/helpamama/donate", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(formData),
});


if (res.ok) {
setSuccess(true);
setTimeout(() => {
setSuccess(false);
onClose();
}, 1800);
setFormData({ name: "", contact: "", donationType: "", message: "" });
}
} catch (err) {
console.log(err);
} finally {
setLoading(false);
}
}


return (
<UnifiedModal show={show} onClose={onClose} title="Donate to Help-a-Mama">
{success ? (
<p className="text-center text-black font-description text-lg">
Thank you so much! 💛🐝
</p>
) : (
<form onSubmit={handleSubmit} className="space-y-4">
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Your Name"
className="w-full p-3 rounded-xl bg-white/10 text-black placeholder-black/50 font-description"
required
/>


<input
type="text"
name="contact"
value={formData.contact}
onChange={handleChange}
placeholder="Phone / Email"
className="w-full p-3 rounded-xl bg-white/10 text-black placeholder-black/50 font-description"
required
/>


<input
type="text"
name="donationType"
value={formData.donationType}
onChange={handleChange}
placeholder="What would you like to donate?"
className="w-full p-3 rounded-xl bg-white/10 text-black placeholder-black/50 font-description"
required
/>


<textarea
name="message"
value={formData.message}
onChange={handleChange}
placeholder="Additional Notes (optional)"
className="w-full p-3 rounded-xl bg-white/10 text-black placeholder-black/50 font-description"
rows="3"
/>


<button
type="submit"
disabled={loading}
className="w-full p-3 bg-pink-300/80 rounded-xl shadow font-description text-black hover:bg-pink-300 transition-all"
>
{loading ? "Sening..." : "Send Donation Offer"}
</button>
</form>
)}
</UnifiedModal>
);
}
