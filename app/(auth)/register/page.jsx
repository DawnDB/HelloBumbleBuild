"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "Success! Please check your email to confirm your account."
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-20 font-description">
      <div className="w-full max-w-md bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10 text-center">
        <h1 className="text-3xl mb-6 tracking-wide">
          Create an account
        </h1>

        <p className="mb-8 leading-relaxed opacity-90">
          Creating an account allows you to check out faster, track your
          orders, and manage your HelloBumble experience with ease.
        </p>

        <form onSubmit={handleRegister} className="space-y-4 text-left">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-palePurpleClickable"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-palePurpleClickable"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-palePurpleClickable text-white py-3 font-medium transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {message && (
          <p className="mt-6 text-sm leading-relaxed opacity-90">
            {message}
          </p>
        )}

        <p className="mt-8 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline text-palePurpleClickable font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
