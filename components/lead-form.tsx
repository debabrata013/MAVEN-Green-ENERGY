"use client"

import type React from "react"
import { useState } from "react"
import { Calculator, Zap, TrendingDown } from "lucide-react"

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    pincode: "",
    city: "",
    email: "",
    billRange: "",
    roofArea: "",
    agreeTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Solar consultation form submitted:", formData)
  }

  const billRanges = ["< ₹2000", "₹2000 - ₹4000", "₹4000 - ₹8000", "₹8000 - ₹15000", "More than ₹15000"]
  const roofAreas = ["< 200 sq ft", "200-500 sq ft", "500-1000 sq ft", "1000-2000 sq ft", "> 2000 sq ft"]

  return (
    <section className="bg-gradient-to-br from-[#0d5f3f] via-[#2d7a4a] to-[#0d5f3f] py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-white space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get Your <span className="text-[#00ff88]">FREE</span> Solar Assessment Today!
            </h2>
            <p className="text-xl text-green-100 leading-relaxed">
              Discover how much you can save with solar energy. Our experts will design a custom solution for your home.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#00ff88] p-3 rounded-full">
                <Calculator className="text-[#0d5f3f]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Free Cost Analysis</h3>
                <p className="text-green-200">Detailed savings calculation & ROI projection</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#00ff88] p-3 rounded-full">
                <Zap className="text-[#0d5f3f]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Custom Solar Design</h3>
                <p className="text-green-200">Tailored system design for maximum efficiency</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#00ff88] p-3 rounded-full">
                <TrendingDown className="text-[#0d5f3f]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Zero Pressure Consultation</h3>
                <p className="text-green-200">Expert advice with no sales pressure</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-[#0d5f3f] mb-2">Start Your Solar Journey</h3>
            <p className="text-gray-600">Fill out the form below for your personalized solar quote</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name *"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />

            <input
              type="tel"
              placeholder="WhatsApp Number *"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Pin Code *"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              />
              <input
                type="text"
                placeholder="City *"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>

            <input
              type="email"
              placeholder="Email Address *"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-900">Monthly Electricity Bill *</label>
              <div className="grid grid-cols-2 gap-2">
                {billRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setFormData({ ...formData, billRange: range })}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      formData.billRange === range
                        ? "bg-[#0d5f3f] text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-900">Available Roof Area</label>
              <div className="grid grid-cols-2 gap-2">
                {roofAreas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setFormData({ ...formData, roofArea: area })}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      formData.roofArea === area
                        ? "bg-[#0d5f3f] text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                required
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 w-4 h-4 rounded border-gray-300 focus:ring-[#00ff88]"
              />
              <span>
                I agree to MAVEN Green Energy&apos;s <span className="font-semibold">terms of service</span> &{" "}
                <span className="font-semibold">privacy policy</span>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#0d5f3f] hover:bg-[#00ff88] hover:text-[#0d5f3f] text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get My Free Solar Quote Now!
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
