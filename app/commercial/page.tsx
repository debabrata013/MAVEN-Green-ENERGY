import Navigation from "@/components/navigation"
import Link from "next/link"

export default function CommercialPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[#001a4d] mb-6 text-balance">Commercial Solar Solutions</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Maximize your business profitability with enterprise-grade solar systems. Reduce operational costs and
            enhance your corporate sustainability profile.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-[#00d4ff] text-[#001a4d] px-8 py-3 rounded-lg font-semibold hover:bg-[#001a4d] hover:text-[#00d4ff] transition-colors"
          >
            Get Commercial Quote
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h2 className="text-2xl font-bold text-[#001a4d] mb-4">Why Choose Commercial Solar?</h2>
              <ul className="space-y-4">
                {[
                  "Significant reduction in operating costs",
                  "Tax incentives and rebates available",
                  "Scalable solutions for any business size",
                  "Minimal downtime during installation",
                  "Dedicated business support team",
                  "Customized financing options",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#00d4ff] font-bold text-lg">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#001a4d] to-[#003d99] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Average Commercial Savings</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#00d4ff] text-3xl font-bold">40-60%</p>
                  <p className="text-gray-200">Reduction in energy costs</p>
                </div>
                <div>
                  <p className="text-[#00d4ff] text-3xl font-bold">5-7 years</p>
                  <p className="text-gray-200">Average ROI period</p>
                </div>
                <div>
                  <p className="text-[#00d4ff] text-3xl font-bold">25+ years</p>
                  <p className="text-gray-200">System lifespan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
