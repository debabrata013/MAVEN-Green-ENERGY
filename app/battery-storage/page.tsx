"use client"

import Navigation from "@/components/navigation"
import Link from "next/link"

export default function BatteryStorage() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#2d7a4a] to-[#1a4a2a] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Battery Storage Solutions</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl">
            Store your solar energy and use it whenever you need it
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#f0f9f6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d7a4a] mb-12 text-center">Why Battery Storage?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "24/7 Power", desc: "Use solar energy day and night" },
              { title: "Energy Independence", desc: "Reduce grid dependency" },
              { title: "Cost Savings", desc: "Lower electricity bills" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border-2 border-[#d0ebe0] hover:border-[#0099cc] transition-all"
              >
                <h3 className="text-2xl font-bold text-[#2d7a4a] mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#2d7a4a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Store Your Solar Energy?</h2>
          <Link
            href="/signup"
            className="bg-[#0099cc] text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#2d7a4a] transition-colors font-semibold inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}
