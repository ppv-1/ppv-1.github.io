import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface Projects {
  title: string;
  date: string;
  image: string;
}

const projects: Projects[] = [
  {
    title: "Summer Blitz",
    date: "July 15-16, 2025",
    image:
    "https://images.prismic.io/encord/11b9026c-edc4-4d23-b6f3-09bd0ede3e28_image+%2835%29+2.jpg?auto=compress%2Cformat&fit=max"
  },
  {
    title: "Grandmaster Open",
    date: "August 5-7, 2025",
    image:
      "https://png.pngtree.com/thumb_back/fw800/background/20230913/pngtree-chess-pieces-on-a-checkered-chess-board-image_13252137.jpg",
  },
  {
    title: "Junior Championship",
    date: "September 1-3, 2025",
    image:
      "https://img.freepik.com/premium-photo/chess-background-with-golden-chess-pieces-vector-illustration-your-design_934652-2399.jpg",
  },
];

const Roulette: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSwipeRef = useRef<NodeJS.Timer | null>(null);

  // Auto-swipe every 4 seconds
  useEffect(() => {
    autoSwipeRef.current = setInterval(() => {
      nextTournament();
    }, 4000);

    return () => {
      if (autoSwipeRef.current) clearInterval(autoSwipeRef.current);
    };
  }, []);

  const nextTournament = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevTournament = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="w-full h-96 relative overflow-hidden bg-gray-800">
      <h2 className="absolute top-5 left-0 right-0 text-3xl font-bold text-white text-center z-10">
        Featured Projects
      </h2>

      {/* Tournament Slider */}
      <div className="flex items-center justify-center h-full">
        {/* Left Arrow */}
        <button
          onClick={prevTournament}
          className="absolute left-4 z-20 p-3 bg-black bg-opacity-40 rounded-full"
        >
          <ArrowLeftIcon className="h-8 w-8 text-white" />
        </button>

        {/* Sliding Carousel */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTournament}
          className="absolute right-4 z-20 p-3 bg-black bg-opacity-40 rounded-full"
        >
          <ArrowRightIcon className="h-8 w-8 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Roulette;
