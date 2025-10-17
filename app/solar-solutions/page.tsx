"use client"

import Navigation from "@/components/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function SolarSolutions() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#2d7a4a] to-[#1a4a2a] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 scroll-fade-in">Advanced Solar Solutions</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl scroll-fade-in">
            Comprehensive renewable energy systems designed for maximum efficiency and sustainability
          </p>
        </div>
      </section>

      {/* Solar Panels Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-in-left">
              <h2 className="text-4xl font-bold text-[#2d7a4a] mb-6">High-Efficiency Solar Panels</h2>
              <p className="text-gray-700 text-lg mb-4">
                Our premium solar panels feature cutting-edge photovoltaic technology with efficiency ratings up to 22%.
                Each panel is engineered to maximize energy capture even in low-light conditions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">25-year performance warranty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Weather-resistant design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Minimal degradation over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Eco-friendly materials</span>
                </li>
              </ul>
              <button className="bg-[#2d7a4a] text-white px-8 py-3 rounded-lg hover:bg-[#0099cc] transition-colors font-semibold">
                Learn More
              </button>
            </div>
            <div className="scroll-fade-in-right">
              <div className="bg-gradient-to-br from-[#e8f5f0] to-[#d0ebe0] rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">☀️</div>
                  <p className="text-[#2d7a4a] font-semibold">Premium Solar Panels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Storage Section */}
      <section className="py-20 px-4 bg-[#f0f9f6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-in">
              <div className="bg-gradient-to-br from-[#2d7a4a] to-[#0099cc] rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔋</div>
                  <p className="text-white font-semibold">Advanced Battery Storage</p>
                </div>
              </div>
            </div>
            <div className="scroll-fade-in">
              <h2 className="text-4xl font-bold text-[#2d7a4a] mb-6">Battery Storage Systems</h2>
              <p className="text-gray-700 text-lg mb-4">
                Store excess solar energy with our state-of-the-art lithium-ion battery systems. Enjoy energy
                independence and backup power during outages.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">10-15 kWh storage capacity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Smart energy management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">Backup power capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0099cc] font-bold">✓</span>
                  <span className="text-gray-700">10-year warranty</span>
                </li>
              </ul>
              <button className="bg-[#0099cc] text-white px-8 py-3 rounded-lg hover:bg-[#2d7a4a] transition-colors font-semibold">
                Explore Storage
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Systems Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d7a4a] mb-12 text-center scroll-fade-in">Real-Time Monitoring</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Performance Tracking",
                description: "Monitor your system's performance in real-time with our advanced dashboard",
                icon: "📊",
              },
              {
                title: "Energy Analytics",
                description: "Detailed insights into your energy production and consumption patterns",
                icon: "📈",
              },
              {
                title: "Mobile App Control",
                description: "Manage your solar system from anywhere with our intuitive mobile application",
                icon: "📱",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="scroll-fade-in bg-[#f0f9f6] p-8 rounded-lg border border-[#d0ebe0] hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#2d7a4a] mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-[#f0f9f6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d7a4a] mb-12 text-center scroll-fade-in">Solution Comparison</h2>
          <div className="overflow-x-auto scroll-fade-in">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2d7a4a] text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Basic</th>
                  <th className="p-4 text-center">Premium</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Solar Panels", basic: "4-6 kW", premium: "8-10 kW", enterprise: "15+ kW" },
                  { feature: "Battery Storage", basic: "5 kWh", premium: "10 kWh", enterprise: "20+ kWh" },
                  { feature: "Monitoring", basic: "Basic", premium: "Advanced", enterprise: "Premium" },
                  { feature: "Warranty", basic: "10 years", premium: "15 years", enterprise: "20 years" },
                  { feature: "Support", basic: "Email", premium: "24/7 Phone", enterprise: "Dedicated" },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#e8f5f0]"}>
                    <td className="p-4 font-semibold text-[#2d7a4a]">{row.feature}</td>
                    <td className="p-4 text-center text-gray-700">{row.basic}</td>
                    <td className="p-4 text-center text-gray-700">{row.premium}</td>
                    <td className="p-4 text-center text-gray-700">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#2d7a4a] to-[#0099cc] text-white">
        <div className="max-w-4xl mx-auto text-center scroll-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 text-green-100">
            Get a free consultation and custom quote for your solar solution
          </p>
          <Link
            href="/signup"
            className="bg-white text-[#2d7a4a] px-8 py-3 rounded-lg hover:bg-green-100 transition-colors font-semibold inline-block"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
