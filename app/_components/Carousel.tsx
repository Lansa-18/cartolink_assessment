"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselDetails } from "@/lib/carouselDetails";
import CarouselCard from "./CarouselCard";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate scroll amount (one card width + gap)
  const scrollAmount = 896; // 440px card width + 16px gap

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= carouselDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselDetails.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * scrollAmount}px)`,
          }}
        >
          {carouselDetails.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0" // Fixed width for cards
            >
              <CarouselCard
                imgSrc={card.imgSrc}
                modelText={card.modelText}
                centerText={card.centerText}
                bottomHeaderText={card.bottomHeaderText}
                bottomParagraph={card.bottomParagraph}
                btnText={card.btnText}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation and Dots */}
      <div className="flex items-center justify-center mt-6 gap-3.5 relative h-8">
        {/* Dot Indicators */}
        <div className="flex gap-3.5">
          {carouselDetails.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 cursor-pointer ${
                index === currentIndex
                  ? "bg-black dark:bg-white"
                  : "bg-[#dadada] dark:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute right-0 flex gap-2">
          <button
            onClick={prevSlide}
            className="z-30 p-1.5 bg-[#dadada] backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            <ChevronLeft
              size={12}
              className="text-black dark:text-white font-bold"
            />
          </button>

          <button
            onClick={nextSlide}
            className="z-30 p-1.5 bg-[#dadada] backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            <ChevronRight
              size={12}
              className="text-black dark:text-white font-bold"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
