import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/sonner'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Lrnable - Master High-Income Skills in Cameroon',
  description: 'Structured mentorship in Forex Trading and Digital Marketing. Learn from verified mentors in Cameroon.',
  generator: 'v0.app',
  keywords: ['mentorship', 'forex', 'digital marketing', 'cameroon', 'online learning'],
  openGraph: {
    title: 'Lrnable - Master High-Income Skills',
    description: 'Structured mentorship for Cameroonians',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0066cc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
