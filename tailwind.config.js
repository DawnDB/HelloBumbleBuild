/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hellobumble: ['"Great Vibes"', 'cursive'], // HelloBumble
        product: ['"Ingrid Darling"', 'cursive'],    // Product names
        description: ['"ABeeZee"', 'sans-serif'],   // Everything else
      },
      colors: {
        pastel: {
          pink: "#F8D7E3", // brand pastel pink
          blue: "#D9EAF7", // brand pastel blue
        },
        neutral: {
          whiteOverlay: "rgba(255, 255, 255, 0.2)", // 20% opacity overlay
          blackText: "#000000",
          palePurpleClickable: "#C5B3F7",          // clickable links/buttons
        },
        bee: {
          black: "#000000",
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
  plugins: [
    plugin(function({ addComponents, theme }) {
      const buttons = {
        /* Base button style */
        ".btn": {
          "@apply font-hand font-medium rounded-2xl py-2 px-4 transition-colors duration-200": {},
        },
        /* Add-to-cart & shop buttons */
        ".btn-cart": {
          "@apply btn bg-white text-black border-2 border-pastel-blue": {},
        },
        ".btn-cart:active": {
          "@apply bg-pastel-blue text-black": {},
        },
        /* Size buttons */
        ".btn-size": {
          "@apply btn bg-white text-black border-2 border-pastel-pink": {},
        },
        ".btn-size:active": {
          "@apply bg-pastel-pink text-black": {},
        },
        /* Choose-color buttons (dynamic color handled in React inline styles) */
        ".btn-color": {
          "@apply btn text-black": {},
        },
        ".btn-color:active": {
          "@apply opacity-90": {},
        },
        /* Quantity + and - buttons */
        ".btn-quantity-blue": {
          "@apply btn bg-white text-black border-2 border-pastel-blue": {},
        },
        ".btn-quantity-blue:active": {
          "@apply bg-pastel-blue text-black": {},
        },
        ".btn-quantity-pink": {
          "@apply btn bg-white text-black border-2 border-pastel-pink": {},
        },
        ".btn-quantity-pink:active": {
          "@apply bg-pastel-pink text-black": {},
        },
      };
      addComponents(buttons);
    }),
  ],
};
