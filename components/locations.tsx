import { MapPin, Users, Building, Zap } from "lucide-react"
import Image from "next/image"

const locations = [
  {
    state: "Gujarat",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    installations: "2,500+"
  },
  {
    state: "Maharashtra", 
    cities: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    installations: "3,200+"
  },
  {
    state: "Karnataka",
    cities: ["Bangalore", "Mysore", "Belgaum", "Hubli"],
    installations: "1,800+"
  },
  {
    state: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore", "Madurai", "Salem"],
    installations: "2,100+"
  },
]

export default function Locations() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d5f3f] mb-4">
            MAVEN Locations Across India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving 25+ cities with 10,000+ successful solar installations nationwide
          </p>
        </div>

        {/* India Map Section */}
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/india-map.jpg"
              alt="India Map - MAVEN Coverage"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d5f3f]/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#00ff88]">
                <div className="flex items-center gap-3 mb-2">
                  <Building className="text-[#0d5f3f]" size={24} />
                  <h3 className="font-bold text-[#0d5f3f]">25+ Cities</h3>
                </div>
                <p className="text-gray-600 text-sm">Nationwide coverage</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#0d5f3f]">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-[#0d5f3f]" size={24} />
                  <h3 className="font-bold text-[#0d5f3f]">10,000+</h3>
                </div>
                <p className="text-gray-600 text-sm">Happy customers</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#00ff88] col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="text-[#0d5f3f]" size={24} />
                  <h3 className="font-bold text-[#0d5f3f]">50+ MW Installed</h3>
                </div>
                <p className="text-gray-600 text-sm">Clean energy capacity across India</p>
              </div>
            </div>
          </div>
        </div>

        {/* City Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-[#00ff88] to-[#0d5f3f] p-3 rounded-full">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0d5f3f]">{location.state}</h3>
                  <p className="text-sm text-gray-500">{location.installations} installations</p>
                </div>
              </div>
              <ul className="space-y-2">
                {location.cities.map((city, cityIndex) => (
                  <li key={cityIndex} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00ff88] rounded-full"></span>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
