import Navigation from "@/components/navigation"

export default function BlogPage() {
  const articles = [
    {
      title: "How Solar Panels Can Save You Money",
      date: "October 15, 2024",
      excerpt: "Learn how solar panels can reduce your electricity bills by up to 80% and provide long-term savings.",
      category: "Solar Tips",
    },
    {
      title: "The Future of Renewable Energy",
      date: "October 10, 2024",
      excerpt: "Explore the latest trends and innovations in renewable energy technology.",
      category: "News",
    },
    {
      title: "Solar Installation Process Explained",
      date: "October 5, 2024",
      excerpt: "A step-by-step guide to understanding how solar panels are installed on your home.",
      category: "Solar Tips",
    },
    {
      title: "Government Incentives for Solar Energy",
      date: "September 28, 2024",
      excerpt: "Discover available tax credits and rebates for solar installations in your area.",
      category: "News",
    },
  ]

  return (
    <main className="bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[#00d4ff] mb-6 text-balance">SolarSquare Blog</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Stay informed with the latest solar energy news, tips, and industry insights.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, idx) => (
              <article
                key={idx}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#00d4ff] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#00d4ff] bg-blue-50 px-3 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#001a4d] mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a href="#" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
