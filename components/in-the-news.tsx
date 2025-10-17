"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const newsCards = [
  {
    id: 1,
    image: "https://placehold.co/400x220/E0F7FA/000000?text=News+Image",
    source: "DEC 12, 2024 - FORBES",
    headline: "SolarSquare Revolutionizes Rooftop Solar with WindPro Technology",
  },
  {
    id: 2,
    image: "https://placehold.co/400x220/E0F7FA/000000?text=News+Image",
    source: "DEC 10, 2024 - ECONOMIC TIMES",
    headline: "India's Leading Solar Company Expands to 20+ Cities",
  },
  {
    id: 3,
    image: "https://placehold.co/400x220/E0F7FA/000000?text=News+Image",
    source: "DEC 08, 2024 - BUSINESS TODAY",
    headline: "Cyclone-Proof Solar Systems: The Future of Renewable Energy",
  },
]

export default function InTheNews() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("news-carousel")
    if (container) {
      const scrollAmount = 400
      const newPosition =
        direction === "left" ? Math.max(0, scrollPosition - scrollAmount) : scrollPosition + scrollAmount
      container.scrollLeft = newPosition
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">In the News</h2>

        <div className="relative">
          {/* Carousel Container */}
          <div
            id="news-carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {newsCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-96 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <img src={card.image || "/placeholder.svg"} alt={card.headline} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm font-semibold text-gray-500 mb-2">{card.source}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{card.headline}</h3>
                  <a href="#" className="text-cyan-500 hover:text-cyan-600 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {newsCards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${index === 0 ? "bg-cyan-500 w-6" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
