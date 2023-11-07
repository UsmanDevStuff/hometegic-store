import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CrispProvider } from "@/components/crisp-provider";

import { Analytics } from "@vercel/analytics/react";

import NextTopLoader from "nextjs-toploader";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "ShopTegic",
  description: "ShopTegic - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CrispProvider />
      <body className={font.className}>
        <NextTopLoader />
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
