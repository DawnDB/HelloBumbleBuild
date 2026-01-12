import "./globals.css";
import ClientShell from "./ClientShell";
import localFont from "next/font/local";
import { AuthProvider } from "@/app/context/AuthContext";
import { CartProvider } from "@/app/context/CartContext";

const helloBumbleFont = localFont({
  src: "./fonts/GreatVibes-Regular.ttf",
  variable: "--font-hellobumble",
});

const productFont = localFont({
  src: "./fonts/IngridDarling-Regular.ttf",
  variable: "--font-product",
});

const descriptionFont = localFont({
  src: "./fonts/ABeeZee-Regular.ttf",
  variable: "--font-description",
});

export const metadata = {
  title: "HelloBumble",
  description: "Buzz into a better life",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${helloBumbleFont.variable} ${productFont.variable} ${descriptionFont.variable}`}
    >
      <body className="min-h-screen bg-[url('/pastel-marble.jpg')] bg-cover bg-center text-neutral-blackText font-description">
        <AuthProvider>
          <CartProvider>
            <ClientShell>{children}</ClientShell>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
