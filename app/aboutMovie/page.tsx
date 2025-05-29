"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutMovie() {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-8">
      <section className="max-w-5xl bg-gray-900 bg-opacity-80 rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10 relative z-10">
        {/* Movie Poster */}
        <div className="flex-shrink-0 w-full md:w-1/3 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images.jpg" // Ensure this path is correct and inside public/
            alt="Movie Poster"
            width={300}
            height={450}
            className="object-cover rounded-xl"
            priority
          />
        </div>

        {/* Movie Details */}
        <div className="flex flex-col justify-between w-full md:w-2/3">
          <h1 className="text-4xl font-extrabold mb-4">The Epic Journey</h1>
          <p className="mb-6 text-lg leading-relaxed">
            Dive into the captivating story of heroes, battles, and legends in this
            breathtaking movie. Experience the thrill and emotion as the plot unfolds
            with stunning visuals and memorable performances.
          </p>

          <div className="space-y-2 text-gray-300">
            <p><span className="font-semibold text-white">Director:</span> John Doe</p>
            <p><span className="font-semibold text-white">Release Date:</span> May 15, 2025</p>
            <p><span className="font-semibold text-white">Genre:</span> Adventure, Drama, Fantasy</p>
            <p><span className="font-semibold text-white">Duration:</span> 2h 30min</p>
          </div>

          <button
            onClick={() => setShowTrailer(true)}
            className="mt-8 self-start bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Watch Trailer
          </button>
        </div>
      </section>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-xl overflow-hidden shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 transition"
              aria-label="Close trailer"
            >
              &times;
            </button>

            {/* YouTube iframe */}
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full z-0"
                src="https://www.youtube.com/embed/KPLWWIOCOOQ?si=VZ7XF6SDoFHv3oO9"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
