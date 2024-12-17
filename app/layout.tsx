import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google"
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "PropertyHub",
};

const nunito = Nunito({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className}} h-screen bg-secondary-light antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
