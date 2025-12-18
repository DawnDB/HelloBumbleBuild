"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UnifiedModal from "@/app/components/modals/UnifiedModal";
import { modalConfigs } from "@/app/components/modals/modalConfigs";
import { supabase } from "@/app/lib/supabaseClient";

/**
 * Modal Context
 */
const ModalContext = createContext(null);

export function useModal() {
  return useContext(ModalContext);
}

export default function ClientShell({ children }) {
  const [activeModal, setActiveModal] = useState(null);

  // 🔐 Supabase session state
  const [session, setSession] = useState(null);

  // 🔐 Session persistence (GLOBAL)
  useEffect(() => {
    // Load session on refresh
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for login / logout
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const openModal = (key) => {
    if (!modalConfigs[key]) {
      console.warn(`Modal key "${key}" does not exist.`);
      return;
    }
    setActiveModal(key);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <Header />

      <main className="pt-32 pb-48">
        {children}
      </main>

      <Footer
        onOpenNewsletter={() => openModal("newsletter")}
        onOpenContact={() => openModal("contact")}
      />

      <UnifiedModal
        isOpen={!!activeModal}
        modalKey={activeModal}
        config={activeModal ? modalConfigs[activeModal] : null}
        onClose={closeModal}
      />
    </ModalContext.Provider>
  );
}