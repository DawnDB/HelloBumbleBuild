"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Checkout state
  const [shippingMethod, setShippingMethod] = useState(null);
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingAddressId, setShippingAddressId] = useState(null);

  // Load cart
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("hellobumbleCart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Save cart
  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem("hellobumbleCart", JSON.stringify(cart));

    if (cart.length === 0) {
      setShippingMethod(null);
      setShippingCost(0);
      setShippingAddressId(null);
    }
  }, [cart]);

  const updateQuantity = (cartKey, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (cartKey) => {
    setCart((prev) => prev.filter((item) => item.cartKey !== cartKey));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        updateQuantity,
        removeFromCart,

        shippingMethod,
        shippingCost,
        shippingAddressId,
        setShippingMethod,
        setShippingCost,
        setShippingAddressId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
