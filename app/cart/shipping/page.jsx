"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";

export default function ShippingPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const {
    cart,
    setShippingMethod,
    setShippingCost,
    setShippingAddressId,
  } = useCart();

  const [method, setMethod] = useState("free");
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    address_line1: "",
    address_line2: "",
    city: "",
    province: "",
    postal_code: "",
    country: "South Africa",
  });

  /* ================================
     🔐 PAGE GUARDS
  ================================= */
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
      return;
    }

    if (!loading && cart.length === 0) {
      router.replace("/cart");
      return;
    }
  }, [user, loading, cart, router]);

  if (loading || !user) return null;

  /* ================================
     📝 FORM HANDLING
  ================================= */
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ================================
     📦 SUBMIT SHIPPING
  ================================= */
  const handleSubmit = async () => {
    if (
      !form.full_name ||
      !form.phone ||
      !form.address_line1 ||
      !form.city ||
      !form.province ||
      !form.postal_code
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      // NOTE: For now we reuse the latest address.
      // Later this should support multiple saved addresses.
      const { data: existing } = await supabase
        .from("shipping_addresses")
        .select("id")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      let address;

      if (existing) {
        const { data, error } = await supabase
          .from("shipping_addresses")
          .update(form)
          .eq("id", existing.id)
          .select()
          .single();

        if (error) throw error;
        address = data;
      } else {
        const { data, error } = await supabase
          .from("shipping_addresses")
          .insert({
            user_id: user.id,
            ...form,
          })
          .select()
          .single();

        if (error) throw error;
        address = data;
      }

      setShippingAddressId(address.id);

      if (method === "courier") {
        setShippingMethod("courier");
        setShippingCost(150);
      } else {
        setShippingMethod("free");
        setShippingCost(0);
      }

      localStorage.setItem(
        "hellobumbleShipping",
        JSON.stringify({
          addressId: address.id,
          method,
          cost: method === "courier" ? 150 : 0,
        })
      );

      router.push("/cart/shipping/checkout");
    } catch (err) {
      console.error(err);
      alert("Something went wrong saving your shipping details.");
      setSubmitting(false); // ✅ FIX
    }
  };

  return (
    <div className="min-h-screen px-6 py-20 flex justify-center">
      <div className="w-full max-w-3xl bg-neutral-whiteOverlay rounded-2xl shadow-soft p-10 space-y-8">

        <h1 className="text-3xl font-hellobumble text-center">
          Shipping Details
        </h1>

        <div className="space-y-3">
          <p className="font-description font-semibold">Delivery option</p>

          <label className="flex items-center gap-3 bg-white/60 p-4 rounded-xl cursor-pointer">
            <input
              type="radio"
              checked={method === "free"}
              onChange={() => setMethod("free")}
            />
            <span>Free — Arrange own courier pickup</span>
          </label>

          <label className="flex items-center gap-3 bg-white/60 p-4 rounded-xl cursor-pointer">
            <input
              type="radio"
              checked={method === "courier"}
              onChange={() => setMethod("courier")}
            />
            <span>R150 — Courier Guy delivery</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="full_name" placeholder="Full name *" value={form.full_name} onChange={handleChange} className="input" />
          <input name="phone" placeholder="Phone number *" value={form.phone} onChange={handleChange} className="input" />
          <input name="address_line1" placeholder="Address line 1 *" value={form.address_line1} onChange={handleChange} className="input md:col-span-2" />
          <input name="address_line2" placeholder="Address line 2" value={form.address_line2} onChange={handleChange} className="input md:col-span-2" />
          <input name="city" placeholder="City *" value={form.city} onChange={handleChange} className="input" />
          <input name="province" placeholder="Province *" value={form.province} onChange={handleChange} className="input" />
          <input name="postal_code" placeholder="Postal code *" value={form.postal_code} onChange={handleChange} className="input" />
          <input name="country" value={form.country} onChange={handleChange} className="input" />
        </div>

        <button onClick={handleSubmit} disabled={submitting} className="btn-cart w-full">
          {submitting ? "Saving…" : "Continue to Checkout →"}
        </button>
      </div>
    </div>
  );
}
