import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Diego Sanchez | Software Engineer",
  description: "Personal portfolio website of Diego Sanchez, showcasing projects and skills.",
  keywords: ["portfolio", "software engineer", "web development", "react", "next.js"],
  authors: [{ name: "Diego Sanchez" }],
  openGraph: {
    title: "Diego Sanchez | Software Engineer",
    description: "Personal portfolio website of Diego Sanchez, showcasing projects and skills.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Sanchez | Software Engineer",
    description: "Personal portfolio website of Diego Sanchez, showcasing projects and skills.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning className={`${geist.variable} min-h-screen antialiased font-sans`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
