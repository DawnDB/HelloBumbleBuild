"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      router.push("/");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-20 font-description">
      <div className="w-full max-w-md bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10 text-center">
        <h1 className="text-3xl mb-6 tracking-wide">
          Log in
        </h1>

        <p className="mb-8 leading-relaxed opacity-90">
          Welcome back. Log in to manage your account, view your orders,
          and continue your HelloBumble journey.
        </p>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
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
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        {message && (
          <p className="mt-6 text-sm leading-relaxed opacity-90">
            {message}
          </p>
        )}

        <p className="mt-8 text-sm">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="underline text-palePurpleClickable font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
