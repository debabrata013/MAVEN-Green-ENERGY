"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How much can I save with solar panels?",
    answer: "You can save 70-90% on your electricity bills with solar panels. The exact savings depend on your current bill amount, roof space, and local electricity rates. Most customers see a complete return on investment within 3-5 years."
  },
  {
    question: "What is the cost of solar panel installation?",
    answer: "Solar installation costs range from ₹40,000 to ₹1,00,000 per kW depending on system size and components. We offer flexible financing options including zero down payment plans and EMI options starting from ₹2,999/month."
  },
  {
    question: "How long do solar panels last?",
    answer: "Our premium solar panels come with a 25-year performance warranty and typically last 25-30 years. The inverter has a 5-10 year warranty, and we provide comprehensive maintenance for the first 5 years."
  },
  {
    question: "Will solar panels work during monsoon and cloudy days?",
    answer: "Yes! Solar panels generate electricity even on cloudy days, though at reduced efficiency (10-25% of peak output). During monsoon, panels still produce power, and our battery storage systems ensure 24/7 electricity availability."
  },
  {
    question: "What happens during power cuts?",
    answer: "With our hybrid solar systems and battery storage, you'll have uninterrupted power supply during outages. The system automatically switches to battery power, ensuring your essential appliances keep running."
  },
  {
    question: "Is my roof suitable for solar installation?",
    answer: "Most roofs are suitable for solar! We need minimum 100 sq ft of shadow-free roof space. Our engineers conduct a free site survey to assess roof condition, orientation, and shading to design the optimal system for your home."
  },
  {
    question: "What maintenance do solar panels require?",
    answer: "Solar panels require minimal maintenance - just occasional cleaning and annual inspections. We provide 5 years of free professional maintenance including cleaning, performance monitoring, and component checks."
  },
  {
    question: "Can I sell excess electricity back to the grid?",
    answer: "Yes! Through net metering, you can sell surplus electricity to your state electricity board. This further reduces your bills and can even generate income during high production months."
  },
  {
    question: "What are the government subsidies available?",
    answer: "The government offers up to 40% subsidy on solar installations (₹14,588 per kW for systems up to 3kW, ₹7,294 per kW for 3-10kW systems). We handle all subsidy paperwork and documentation for you."
  },
  {
    question: "How long does installation take?",
    answer: "Installation typically takes 1-3 days depending on system size. The complete process from booking to commissioning takes 15-30 days, including approvals, permits, and grid connection procedures."
  },
  {
    question: "What if I need to relocate?",
    answer: "Solar panels can be dismantled and reinstalled at your new location. We provide relocation services, though some components may need replacement. The panels retain their warranty at the new location."
  },
  {
    question: "Are solar panels safe during storms and cyclones?",
    answer: "Our WindPro Mount™ technology is engineered to withstand wind speeds up to 170 kmph and extreme weather conditions. All installations are done following strict safety standards with weather-resistant materials."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="text-[#0d5f3f]" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d5f3f]">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about solar energy and our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-green-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#0d5f3f] pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-[#0d5f3f] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <div className="h-px bg-gradient-to-r from-[#00ff88] to-[#0d5f3f] mb-4"></div>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#0d5f3f] to-[#2d7a4a] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-green-100 mb-6">
              Our solar experts are here to help you make the right decision for your home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#00ff88] hover:bg-white text-[#0d5f3f] px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-[#0d5f3f] text-white px-8 py-3 rounded-lg font-bold transition-all duration-300">
                Call: +91-9876543210
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
