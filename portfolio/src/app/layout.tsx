import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import Layout from '@/components/Layout'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://diegosanchez.dev'),
  title: {
    default: 'Diego Sanchez | Software Engineer',
    template: '%s | Diego Sanchez'
  },
  description: 'Personal portfolio of Diego Sanchez, a software engineer specializing in web development with React, Next.js, and TypeScript.',
  keywords: ['Software Engineer', 'Web Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Diego Sanchez' }],
  creator: 'Diego Sanchez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://diegosanchez.dev',
    title: 'Diego Sanchez | Software Engineer',
    description: 'Personal portfolio of Diego Sanchez, a software engineer specializing in web development.',
    siteName: 'Diego Sanchez Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diego Sanchez Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Sanchez | Software Engineer',
    description: 'Personal portfolio of Diego Sanchez, a software engineer specializing in web development.',
    creator: '@diegosanchez',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@vercel/geist@1.0.0/font.css"
        />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
} 