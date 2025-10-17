import Navigation from "@/components/navigation"

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[#001a4d] mb-6 text-balance">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Have questions? Our solar experts are here to help. Reach out to us today.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#001a4d] mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[#001a4d] mb-2">Phone</h3>
                  <p className="text-gray-600">1-800-SOLAR-SQ (1-800-765-2777)</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#001a4d] mb-2">Email</h3>
                  <p className="text-gray-600">info@solarsquare.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#001a4d] mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Solar Street
                    <br />
                    Green City, GC 12345
                    <br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#001a4d] mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#001a4d] to-[#003d99] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Quick Contact Form</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:border-[#00d4ff]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:border-[#00d4ff]"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:border-[#00d4ff]"
                />
                <button className="w-full bg-[#00d4ff] text-[#001a4d] py-2 rounded font-bold hover:bg-white transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
