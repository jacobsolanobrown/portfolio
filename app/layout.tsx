import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // each page sets its own title, shown as "<page> · jacob solano"
  title: {
    default: "jacob solano",
    template: "%s · jacob solano",
  },
  description:
    "jacob solano: cs @ brown, full-stack engineer, ux research + usability.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* skip link: hidden until a keyboard user tabs to it, then jumps past the hero and sidebar */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[10px] focus:border focus:border-stone-400 focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
        >
          skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
