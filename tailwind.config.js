/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        hellobumble: "var(--font-hellobumble)",   // Your brand font
        hand: "var(--font-hand)",                 // Just Another Hand
        description: ["var(--font-description)", "sans-serif"], // placeholder
      },
      colors: {
        bee: {
          yellow: "#F7D65A",
          black: "#000000",
        },
        pastel: {
          pink: "#F8D7E3",
          blue: "#D9EAF7",
          cream: "#FFF8E8",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
