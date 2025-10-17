import { Sun, Battery, Leaf, Award, TrendingUp, Shield } from "lucide-react"

const features = [
  {
    icon: Sun,
    title: "Premium Solar Technology",
    description: "High-efficiency monocrystalline panels with 25-year performance warranty",
  },
  {
    icon: Battery,
    title: "Smart Energy Storage",
    description: "Advanced lithium-ion battery systems for 24/7 clean energy access",
  },
  {
    icon: Shield,
    title: "Cyclone-Proof Installation",
    description: "WindPro Mount™ technology withstands 170+ kmph winds and extreme weather",
  },
  {
    icon: TrendingUp,
    title: "Maximum ROI Guarantee",
    description: "Save up to 90% on electricity bills with fastest payback period",
  },
  {
    icon: Leaf,
    title: "Carbon Footprint Reduction",
    description: "Reduce CO2 emissions by 4+ tons annually with our solar solutions",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranty",
    description: "25-year panel warranty + 5-year comprehensive maintenance included",
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d5f3f] mb-4">
            Why Choose MAVEN Green Energy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading India&apos;s solar revolution with cutting-edge technology and unmatched service excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-100">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-r from-[#00ff88] to-[#0d5f3f] p-4 rounded-full mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0d5f3f] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <button className="bg-[#0d5f3f] hover:bg-[#00ff88] hover:text-[#0d5f3f] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Discover Our Solutions
          </button>
        </div>
      </div>
    </section>
  )
}
