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
    <div className="container mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold mb-4">Create an account</h1>

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded border p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black text-white py-2"
        >
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>

      {message && <p className="mt-4 text-sm">{message}</p>}

      <p className="mt-6 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>
    </div>
  );
}