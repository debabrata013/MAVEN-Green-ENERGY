"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d5f3f] to-[#0a4a32] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#00ff88]">MAVEN</h3>
            <p className="text-gray-300 mb-4">Leading solar energy solutions for a sustainable future across India.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#00ff88] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#00ff88] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#00ff88] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-[#00ff88] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00ff88]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solar-solutions" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link href="/our-presence" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Our Presence
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00ff88]">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/residential" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/industrial" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Industrial
                </Link>
              </li>
              <li>
                <Link href="/battery-storage" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Battery Storage
                </Link>
              </li>
              <li>
                <Link href="/monitoring" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00ff88]">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Phone size={20} className="text-[#00ff88] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 1800-SOLAR-1</p>
                  <p className="text-gray-400 text-sm">Available 24/7</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={20} className="text-[#00ff88] mt-1 flex-shrink-0" />
                <p className="text-gray-300">info@maven.com</p>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={20} className="text-[#00ff88] mt-1 flex-shrink-0" />
                <p className="text-gray-300">Serving 20+ Indian Cities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00ff88]/30 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div>
              <h5 className="font-semibold text-[#00ff88] mb-2">Legal</h5>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-[#00ff88] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00ff88] transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#00ff88] mb-2">Support</h5>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-[#00ff88] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#00ff88] transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#00ff88] mb-2">Resources</h5>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-[#00ff88] transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00ff88] transition-colors">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#0a3d2a] border-t border-[#00ff88]/20">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 MAVEN. All rights reserved.</p>
          <p>Powering India with Clean Energy</p>
        </div>
      </div>
    </footer>
  )
}
