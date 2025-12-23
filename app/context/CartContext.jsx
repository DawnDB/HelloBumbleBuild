"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Checkout state
  const [shippingMethod, setShippingMethod] = useState(null);
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingAddressId, setShippingAddressId] = useState(null);

  // Load cart
  useEffect(() => {
    const stored = localStorage.getItem("hellobumbleCart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Save cart
  useEffect(() => {
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
  return useContext(CartContext);
}