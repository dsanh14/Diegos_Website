import { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Diego Sanchez | Software Engineer',
  description: 'Software engineer specializing in web development with React, Next.js, and TypeScript. Building modern, performant, and accessible web applications.',
  keywords: ['Software Engineer', 'Web Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Diego Sanchez' }],
  openGraph: {
    title: 'Diego Sanchez | Software Engineer',
    description: 'Software engineer specializing in web development with React, Next.js, and TypeScript.',
    url: 'https://diegosanchez.dev',
    siteName: 'Diego Sanchez Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Sanchez | Software Engineer',
    description: 'Software engineer specializing in web development with React, Next.js, and TypeScript.',
    creator: '@diegosanchez',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-stone-950 text-stone-950 dark:text-stone-50">
        {children}
      </body>
    </html>
  )
} 