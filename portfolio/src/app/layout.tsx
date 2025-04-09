import { Metadata } from 'next'
import '../styles/globals.css'
import Background from '@/components/Background'

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
      <body className="min-h-screen font-sans selection:bg-violet-500/20 selection:text-violet-900 dark:selection:bg-violet-500/20 dark:selection:text-violet-200">
        <Background />
        {children}
      </body>
    </html>
  )
} 