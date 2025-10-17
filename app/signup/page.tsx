import Navigation from "@/components/navigation"

export default function SignupPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[#001a4d] mb-6 text-balance text-center">Get Your Free Solar Quote</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Join thousands of homeowners saving money with solar energy. Get started today!
          </p>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#00d4ff]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#00d4ff]"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#00d4ff]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#00d4ff]"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#00d4ff]"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#00d4ff]"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#00d4ff]"
                />
              </div>
              <select className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#00d4ff] text-gray-600">
                <option>Select Your Interest</option>
                <option>Residential Solar</option>
                <option>Commercial Solar</option>
                <option>Industrial Solar</option>
              </select>
              <textarea
                placeholder="Tell us about your energy needs"
                rows={4}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#00d4ff]"
              />
              <button className="w-full bg-[#001a4d] text-white py-3 rounded-lg font-bold hover:bg-[#00d4ff] hover:text-[#001a4d] transition-colors text-lg">
                Get Free Quote
              </button>
            </form>
          </div>

          <p className="text-center text-gray-600 mt-8">
            We'll contact you within 24 hours with your personalized solar quote.
          </p>
        </div>
      </div>
    </main>
  )
}
