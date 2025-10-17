"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const isActive = (path: string) => pathname === path

  const navItems = {
    "Our Offerings": [
      { label: "Residential Solar", href: "/residential" },
      { label: "Commercial Solar", href: "/commercial" },
      { label: "Industrial Solar", href: "/industrial" },
    ],
    "Solar Solutions": [
      { label: "Solar Solutions", href: "/solar-solutions" },
      { label: "Battery Storage", href: "/battery-storage" },
      { label: "Monitoring Systems", href: "/monitoring" },
    ],
    "Our Presence": [
      { label: "Our Presence", href: "/our-presence" },
      { label: "Service Areas", href: "/our-presence" },
      { label: "Contact Us", href: "/contact" },
    ],
    Blog: [
      { label: "Blog", href: "/blog" },
      { label: "Solar Tips", href: "/blog" },
      { label: "News", href: "/blog" },
    ],
  }

  const moreItems = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/about" },
    { label: "FAQ", href: "/contact" },
  ]

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/70 backdrop-blur-md border border-gray-200/50 z-50 shadow-xl rounded-2xl">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/logo.png"
              alt="SolarSquare Logo"
              width={320}
              height={100}
              className="h-20 w-auto"
            />
          </Link>

          {/* Menu Links */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(navItems).map(([title, items]) => (
              <div key={title} className="relative">
                <button
                  onClick={() => toggleDropdown(title)}
                  className={`flex items-center gap-1 font-medium transition-all duration-300 ease-out px-3 py-2 rounded-lg ${
                    isActive(items[0].href)
                      ? "text-[#0d5f3f] bg-green-50 shadow-md"
                      : "text-gray-700 hover:text-[#0d5f3f] hover:bg-green-50 hover:shadow-md hover:scale-105"
                  }`}
                >
                  {title}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${openDropdown === title ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {openDropdown === title && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 font-normal transition-all duration-200 ${
                          isActive(item.href)
                            ? "bg-[#0099cc] text-white"
                            : "text-[#2d7a4a] hover:bg-green-100 hover:text-[#0099cc]"
                        }`}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("More")}
                className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#0d5f3f] hover:bg-green-50 hover:shadow-md hover:scale-105 transition-all duration-300 ease-out px-3 py-2 rounded-lg"
              >
                More
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${openDropdown === "More" ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === "More" && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {moreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 font-normal transition-all duration-200 ${
                        isActive(item.href)
                          ? "bg-[#0099cc] text-white"
                          : "text-[#2d7a4a] hover:bg-green-100 hover:text-[#0099cc]"
                      }`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/signup"
            className="bg-[#0d5f3f] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#00ff88] hover:text-[#0d5f3f] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out flex items-center gap-2 text-sm"
          >
            Sign up for free electricity
            <span>→</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
