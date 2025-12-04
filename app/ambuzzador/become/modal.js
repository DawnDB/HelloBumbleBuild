// BecomeAmbuzzadorModal.jsx
"use client";
import { useState } from "react";


export default function BecomeAmbuzzadorModal({ isOpen, onClose }) {
const [formData, setFormData] = useState({
name: "",
email: "",
babyInfo: "",
socialHandles: "",
goals: "",
experience: "",
});


const [status, setStatus] = useState("");


const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
e.preventDefault();
setStatus("Submitting...");


try {
const res = await fetch("/api/become-ambuzzador", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(formData),
});


if (res.ok) {
setStatus("💛 Your AmbuZZador request has been sent! 💛");
setTimeout(() => {
onClose();
}, 1500);
} else {
setStatus("Something went wrong. Please try again.");
}
} catch (err) {
setStatus("Error submitting request.");
}
};


if (!isOpen) return null;


return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
<div className="w-full max-w-lg bg-white/20 backdrop-blur-xl rounded-2xl shadow-soft p-8 font-description text-black animate-scaleIn">
<h1 className="text-4xl font-hellobumble text-center mb-6">Become an AmbuZZador</h1>


<form onSubmit={handleSubmit} className="space-y-4">
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Your Name"
className="w-full p-3 rounded-xl bg-white/10 shadow-soft"
required
/>


<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Your Email"
className="w-full p-3 rounded-xl bg-white/10 shadow-soft"
required
/>


<input
type="text"
name="babyInfo"
value={formData.babyInfo}
onChange={handleChange}
placeholder="Baby's weight + diapers/day"
className="w-full p-3 rounded-xl bg-white/10 shadow-soft"
required
/>


<textarea
name="socialHandles"
value={formData.socialHandles}
onChange={handleChange}
placeholder="Social media handles + short intro"
rows="3"
className="w-full p-3 rounded-xl bg-white/10 shadow-soft"
required
/>


<textarea
name="goals"
value={formData.goals}
onChange={handleChange}
placeholder="Why do you want to become an AmbuZZador?"
rows="3"
className="w-full p-3 rounded-xl bg-white/10 shadow-soft"
required
/>


<textarea
name="experience"
value={formData.experience}
onChange={handleChange}
placeholder="Experience with cloth essentials (optional)"
rows="3"
className="w-full p-3 rounded-xl bg-white/10 shadow-soft"
/>


<button
type="submit"
className="w-full py-3 bg-pastelBlue border-2 border-pastelBlue rounded-2xl shadow-soft hover:bg-opacity-80 transition"
>
Submit Application
</button>


{status && (
<p className="text-center mt-2 text-black font-description">
{status}
</p>
)}
</form>


<button
onClick={onClose}
className="mt-6 w-full text-center underline text-black"
>
Close
</button>
</div>
</div>
);
}
