"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    src: "/gallery-Bifacial-Solar-Modules-Explained-_1_.jpeg",
    alt: "Bifacial Solar Modules Explained",
    title: "Advanced Bifacial Technology"
  },
  {
    src: "/gallery-Bifacial-Solar-Modules-Explained.jpeg",
    alt: "Bifacial Solar Modules",
    title: "High-Efficiency Solar Solutions"
  },
  {
    src: "/gallery-Eco-friendly-Quotes-for-Bifacial-Solar-Modules.jpeg",
    alt: "Eco-friendly Solar",
    title: "Sustainable Energy Future"
  },
  {
    src: "/gallery-Legga-Village-Solar-Electrification.jpeg",
    alt: "Village Solar Electrification",
    title: "Rural Electrification Project"
  },
  {
    src: "/gallery-This-is-what-energy-independence-looks-like_-Rows….jpeg",
    alt: "Energy Independence",
    title: "Energy Independence Solutions"
  },
  {
    src: "/gallery-Power-Quality-Analysis-Bifacial-Solar-Modules.jpeg",
    alt: "Power Quality Analysis",
    title: "Advanced Power Analysis"
  },
  {
    src: "/gallery-Nimbus-Solar-Solution.jpeg",
    alt: "Nimbus Solar Solution",
    title: "Nimbus Solar Technology"
  },
  {
    src: "/gallery-India-Cleaner-Future.jpeg",
    alt: "India Cleaner Future",
    title: "Clean Energy for India"
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-b from-[#f0f9f7] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0d5f3f] mb-4">Our Solar Projects Gallery</h2>
          <p className="text-lg text-gray-600">Showcasing our commitment to sustainable energy solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-sm">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
