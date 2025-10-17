import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  metadataBase: new URL('https://maven-green-energy.vercel.app'),
  title: "Maven Green Energy - Sustainable Solar Solutions",
  description: "Leading provider of residential, commercial, and industrial solar energy solutions. Harness the power of the sun with Maven Green Energy for a sustainable future.",
  generator: "Maven Green Energy",
  keywords: ["solar energy", "renewable energy", "solar panels", "green energy", "sustainable energy", "solar solutions"],
  authors: [{ name: "Maven Green Energy" }],
  openGraph: {
    title: "Maven Green Energy - Sustainable Solar Solutions",
    description: "Transform your energy future with our innovative solar solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
