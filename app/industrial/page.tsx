import Navigation from "@/components/navigation"
import Link from "next/link"

export default function IndustrialPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[#001a4d] mb-6 text-balance">Industrial Solar Solutions</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Power your industrial operations with large-scale solar installations. Achieve energy independence and
            reduce your carbon footprint.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-[#00d4ff] text-[#001a4d] px-8 py-3 rounded-lg font-semibold hover:bg-[#001a4d] hover:text-[#00d4ff] transition-colors"
          >
            Request Industrial Assessment
          </Link>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Megawatt Scale",
                description: "Systems ranging from 100kW to 10MW+ capacity",
              },
              {
                title: "High Efficiency",
                description: "Industrial-grade panels with 22%+ efficiency ratings",
              },
              {
                title: "Grid Integration",
                description: "Seamless integration with existing power infrastructure",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg border-2 border-[#00d4ff]">
                <h3 className="text-xl font-bold text-[#001a4d] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
