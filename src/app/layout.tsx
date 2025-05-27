import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Profile from "@/components/custom/profile-card/profile-card";
import Navbar from "@/components/custom/navbar/navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jimmy Wu's Portfolio",
  description: "A portfolio website for Jimmy Wu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1C1C1C] min-h-screen`}
      >
        <div className="flex flex-col mb-25 xl:mb-0 xl:flex-row justify-center xl:justify-start xl:h-screen">
          <Profile />
          <div className="relative w-full xl:ml-20 2xl:mx-20">
            {children}
            <div className="fixed xl:absolute bottom-10 w-full flex justify-center">
              <Navbar />
            </div>
          </div>
        </div>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
