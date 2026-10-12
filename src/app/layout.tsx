import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FF5B3D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Travellers — Discover Places, Meet People, Share Memories",
  description:
    "Discover new destinations, meet fellow travellers, join travel events, and share your travel memories with the Travellers community.",
  keywords: [
    "travel community",
    "travel buddies",
    "solo travel",
    "backpacking",
    "travel events",
    "Sajek Hill",
    "travel stories",
  ],
  authors: [{ name: "Travellers Community" }],
  openGraph: {
    title: "Travellers — Discover Places, Meet People, Share Memories",
    description:
      "Don't listen to what they say, Go see. Join the largest community of travellers worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "Travellers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travellers — Discover Places, Meet People, Share Memories",
    description: "Don't listen to what they say, Go see.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#251613] antialiased selection:bg-[#FF5B3D]/20 selection:text-[#FF5B3D]">
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
