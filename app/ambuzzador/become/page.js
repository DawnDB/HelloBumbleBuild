"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BecomeAmbassador() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    babyInfo: "",
    socialHandles: "",
    clothMom: "",
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
      const res = await fetch("/api/become-ambassador", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Thank you! Your application has been submitted.");
        setFormData({
          name: "",
          email: "",
          babyInfo: "",
          socialHandles: "",
          clothMom: "",
          goals: "",
          experience: "",
        });

        // Redirect to /ambuzzador after 2 seconds
        setTimeout(() => {
          router.push("/ambuzzador");
        }, 2000);
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error submitting the form.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/pastel-marble.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl shadow-soft w-full max-w-lg space-y-6 bg-whiteOverlay text-black font-description"
      >
        <h1 className="text-3xl font-hellobumble text-center mb-4">
          HelloBumble AmbuZZador / Product Tester
        </h1>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Baby Info */}
          <div>
            <label className="block mb-1 font-medium">
              Baby's weight and daily diaper usage
            </label>
            <input
              type="text"
              name="babyInfo"
              value={formData.babyInfo}
              onChange={handleChange}
              placeholder="E.g., 6kg, 5 diapers/day"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Social Handles + Intro */}
          <div>
            <label className="block mb-1 font-medium">
              Social Handles & a bit about yourself
            </label>
            <textarea
              name="socialHandles"
              value={formData.socialHandles}
              onChange={handleChange}
              placeholder="Your social media handles and a short intro"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={3}
            />
          </div>

          {/* Why Join */}
          <div>
            <label className="block mb-1 font-medium">
              Why do you want to become an AmbuZZador?
            </label>
            <textarea
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              placeholder="What are your goals for joining?"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={3}
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-1 font-medium">
              Experience with cloth diapering and other essentials
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Any relevant experience you'd like to share?"
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={3}
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-8 py-3 bg-pastelBlue text-black rounded-2xl font-description border-2 border-pastelBlue hover:bg-opacity-80 transition w-full"
        >
          Submit
        </button>

        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    </div>
  );
}
