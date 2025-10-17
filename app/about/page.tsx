import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[#001a4d] mb-6 text-balance">About SolarSquare</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            For 10 years, SolarSquare has been leading the solar revolution, helping thousands of homes and businesses
            transition to clean, renewable energy.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#001a4d] mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To make solar energy accessible, affordable, and reliable for everyone. We believe that clean energy
                should be the standard, not the exception.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our commitment to excellence, innovation, and customer satisfaction drives everything we do.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#001a4d] to-[#003d99] text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">By The Numbers</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-[#00d4ff] text-4xl font-bold">50,000+</p>
                  <p className="text-gray-200">Happy Customers</p>
                </div>
                <div>
                  <p className="text-[#00d4ff] text-4xl font-bold">500MW+</p>
                  <p className="text-gray-200">Solar Capacity Installed</p>
                </div>
                <div>
                  <p className="text-[#00d4ff] text-4xl font-bold">10 Years</p>
                  <p className="text-gray-200">Industry Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-[#001a4d] mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Integrity", desc: "Honest, transparent dealings with every customer" },
                { title: "Innovation", desc: "Cutting-edge technology and solutions" },
                { title: "Sustainability", desc: "Committed to environmental responsibility" },
              ].map((value, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold text-[#001a4d] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
