import Navigation from "@/components/navigation"
import Link from "next/link"

export default function ResidentialPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-[#001a4d] mb-6 text-balance">Residential Solar Solutions</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Transform your home with clean, renewable energy. Our residential solar systems are designed to reduce
              your electricity bills and increase your home&apos;s value.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-[#00d4ff] text-[#001a4d] px-8 py-3 rounded-lg font-semibold hover:bg-[#001a4d] hover:text-[#00d4ff] transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Cost Savings",
                description: "Reduce your electricity bills by up to 80% with our efficient solar panels.",
                icon: "💰",
              },
              {
                title: "Eco-Friendly",
                description: "Generate clean energy and reduce your carbon footprint significantly.",
                icon: "🌱",
              },
              {
                title: "Increased Home Value",
                description: "Solar installations increase your property value by an average of 4%.",
                icon: "🏠",
              },
              {
                title: "25-Year Warranty",
                description: "Our panels come with industry-leading 25-year performance warranty.",
                icon: "✓",
              },
              {
                title: "Expert Installation",
                description: "Professional installation by certified solar technicians.",
                icon: "🔧",
              },
              {
                title: "24/7 Monitoring",
                description: "Real-time monitoring of your system&apos;s performance and efficiency.",
                icon: "📊",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#00d4ff] transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#001a4d] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#001a4d] to-[#003d99] text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of homeowners saving money with MAVEN. Get a free consultation today.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-[#00d4ff] text-[#001a4d] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
