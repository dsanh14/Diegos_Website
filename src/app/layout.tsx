import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Diego Sanchez | Software Engineer',
  description: 'Full-stack software engineer specializing in web development with React, Next.js, and TypeScript.',
  keywords: ['Software Engineer', 'Web Developer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Diego Sanchez' }],
  openGraph: {
    title: 'Diego Sanchez | Software Engineer',
    description: 'Full-stack software engineer specializing in web development',
    url: 'https://diegosanchez.dev',
    siteName: 'Diego Sanchez Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Sanchez | Software Engineer',
    description: 'Full-stack software engineer specializing in web development',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-stone-900 antialiased dark:bg-stone-900 dark:text-stone-50">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
} 