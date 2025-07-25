import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  // weight: ["200", "300", "400", "500", "600", "700", "800"], // You can add more weights as needed, e.g., ["400", "700"]
});

export const metadata: Metadata = {
  title: "Mastry",
  description: "Master your Marketing Skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
