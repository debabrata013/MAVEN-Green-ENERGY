"use client"

import Navigation from "@/components/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function OurPresence() {

  const locations = [
    { city: "Mumbai", region: "Western India", customers: "15,000+", projects: "3,200+" },
    { city: "Delhi", region: "Northern India", customers: "12,000+", projects: "2,800+" },
    { city: "Bangalore", region: "Southern India", customers: "18,000+", projects: "4,100+" },
    { city: "Hyderabad", region: "Central India", customers: "10,000+", projects: "2,300+" },
    { city: "Chennai", region: "Eastern India", customers: "8,000+", projects: "1,900+" },
    { city: "Pune", region: "Western India", customers: "9,000+", projects: "2,100+" },
  ]

  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#2d7a4a] to-[#1a4a2a] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 scroll-fade-in">Our Global Presence</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl scroll-fade-in">
            Serving customers across India with world-class solar solutions and support
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f0f9f6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d7a4a] mb-4 text-center scroll-fade-in">MAVEN Locations</h2>
          <p className="text-xl text-center text-gray-700 mb-12 scroll-fade-in">
            We offer solar services in 20+ Indian cities, and are expanding every day!
          </p>

          {/* Interactive India Map */}
          <div className="scroll-fade-in bg-gradient-to-br from-[#e8f5f0] to-[#d0ebe0] rounded-lg p-8 h-96 flex items-center justify-center relative overflow-hidden">
            <svg viewBox="0 0 800 900" className="w-full h-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
              {/* India Map Background */}
              <path
                d="M 400 100 L 500 150 L 550 200 L 560 300 L 550 400 L 520 500 L 480 550 L 420 580 L 350 560 L 300 500 L 280 400 L 290 300 L 320 200 L 350 150 Z"
                fill="#c8e6c9"
                stroke="#2d7a4a"
                strokeWidth="2"
              />

              {/* Major Cities with Markers */}
              {[
                { name: "Delhi", x: 380, y: 180, label: "Delhi" },
                { name: "Mumbai", x: 300, y: 380, label: "Mumbai" },
                { name: "Bangalore", x: 420, y: 520, label: "Bangalore" },
                { name: "Hyderabad", x: 450, y: 450, label: "Hyderabad" },
                { name: "Chennai", x: 480, y: 550, label: "Chennai" },
                { name: "Pune", x: 350, y: 420, label: "Pune" },
              ].map((city, idx) => (
                <g key={idx}>
                  {/* City Marker Circle */}
                  <circle cx={city.x} cy={city.y} r="12" fill="#0099cc" opacity="0.8" />
                  <circle cx={city.x} cy={city.y} r="8" fill="#00d4ff" />

                  {/* City Label */}
                  <text
                    x={city.x}
                    y={city.y - 25}
                    textAnchor="middle"
                    className="text-xs font-bold fill-[#2d7a4a]"
                    fontSize="12"
                  >
                    {city.label}
                  </text>
                </g>
              ))}

              {/* Legend */}
              <text x="50" y="750" className="text-sm font-semibold fill-[#2d7a4a]" fontSize="14">
                ● Active Service Centers
              </text>
              <circle cx="35" cy="745" r="6" fill="#0099cc" />
            </svg>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d7a4a] mb-12 text-center scroll-fade-in">Our Service Centers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="scroll-fade-in bg-[#f0f9f6] p-8 rounded-lg border-2 border-[#d0ebe0] hover:border-[#0099cc] transition-all hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#2d7a4a] mb-2">{location.city}</h3>
                <p className="text-gray-600 mb-4">{location.region}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#0099cc]">Customers:</span> {location.customers}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#0099cc]">Projects:</span> {location.projects}
                  </p>
                </div>
                <button className="w-full bg-[#0099cc] text-white py-2 rounded-lg hover:bg-[#2d7a4a] transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#2d7a4a] to-[#0099cc] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center scroll-fade-in">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "72,000+", label: "Happy Customers" },
              { number: "16,400+", label: "Projects Completed" },
              { number: "500+ MW", label: "Total Capacity" },
              { number: "2.5M+", label: "Tons CO₂ Saved" },
            ].map((stat, index) => (
              <div key={index} className="scroll-fade-in text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p className="text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d7a4a] mb-12 text-center scroll-fade-in">
            What We Offer in Every Location
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-fade-in-left">
              <h3 className="text-2xl font-bold text-[#2d7a4a] mb-6">Installation & Setup</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Professional installation by certified technicians</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Site assessment and custom design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Permits and documentation handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Grid connection assistance</span>
                </li>
              </ul>
            </div>
            <div className="scroll-fade-in-right">
              <h3 className="text-2xl font-bold text-[#2d7a4a] mb-6">Maintenance & Support</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">24/7 customer support hotline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Regular maintenance and cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Emergency repair services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-[#f0f9f6]">
        <div className="max-w-4xl mx-auto text-center scroll-fade-in">
          <h2 className="text-4xl font-bold text-[#2d7a4a] mb-6">Find Your Nearest Service Center</h2>
          <p className="text-lg text-gray-700 mb-8">Connect with our local experts for personalized solar solutions</p>
          <Link
            href="/contact"
            className="bg-[#2d7a4a] text-white px-8 py-3 rounded-lg hover:bg-[#0099cc] transition-colors font-semibold inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}
