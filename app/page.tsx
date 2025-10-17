import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import LeadForm from "@/components/lead-form"
import WhyChoose from "@/components/why-choose"
import InTheNews from "@/components/in-the-news"
import Locations from "@/components/locations"
import Gallery from "@/components/gallery"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <LeadForm />
      <WhyChoose />
      <Gallery />
      <InTheNews />
      <Locations />
      <FAQ />
      <section className="py-16 bg-gradient-to-b from-white to-[#f0f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0d5f3f] mb-4">Our Service Coverage</h2>
            <p className="text-lg text-gray-600">Expanding solar solutions across India</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3888.8169381627747!2d77.20986!3d28.6139!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00ff88]">
              <h3 className="text-xl font-semibold text-[#0d5f3f] mb-2">20+ Cities</h3>
              <p className="text-gray-600">Currently serving solar solutions in over 20 major Indian cities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00d4ff]">
              <h3 className="text-xl font-semibold text-[#0d5f3f] mb-2">Rapid Expansion</h3>
              <p className="text-gray-600">Adding new service areas every month to reach more customers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0d5f3f]">
              <h3 className="text-xl font-semibold text-[#0d5f3f] mb-2">Local Support</h3>
              <p className="text-gray-600">Dedicated teams in each region for personalized service</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
