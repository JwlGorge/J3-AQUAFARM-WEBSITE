import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Fish, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "J3 RAS Aquafarm - Sustainable Aquaculture",
  description: "Premium fish farming with eco-friendly RAS technology, aquaponics, and hydroponics systems.",
    generator: 'v0.dev'
}


import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Cpqbkgp_WTh1uKuDqJrp1VHsu0hdMfrwG8Nl0s4BHa8" />
        {/* Other Head elements */}
      </head>
      <body>{children}</body>
    </html>
  )
}


function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-full">
              <Fish className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">J3 RAS Aquafarm</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Features
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/" className="text-lg font-medium text-gray-800 hover:text-blue-600">
                    Home
                  </Link>
                  <Link href="/features" className="text-lg font-medium text-gray-800 hover:text-blue-600">
                    Features
                  </Link>
                  <Link href="/contact" className="text-lg font-medium text-gray-800 hover:text-blue-600">
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Fish className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">J3 RAS Aquafarm</span>
            </div>
            <p className="text-gray-400">
              Sustainable aquaculture with cutting-edge RAS technology and integrated growing systems.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/features" className="block text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>+91 9048856639</p>
              <p>j3aquafarm@gmail.com</p>
              <p>
                KIZHAKKE MAVADI, PERAVOOR
                <br />
                KANNUR ,KERALA
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} J3 RAS Aquafarm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
