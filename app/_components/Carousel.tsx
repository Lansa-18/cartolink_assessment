"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselDetails } from "@/lib/carouselDetails";
import CarouselCard from "./CarouselCard";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(896);

  // Update scroll amount based on screen size
  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.innerWidth < 640) {
        setScrollAmount(336); // 320px card + 16px gap
      } else if (window.innerWidth < 900) {
        setScrollAmount(576); // 560px card + 16px gap
      } else if (window.innerWidth < 1024) {
        setScrollAmount(736); // 720px card + 16px gap
      } else {
        setScrollAmount(896); // 880px card + 16px gap
      }
    };

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= carouselDetails.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselDetails.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full px-2 sm:px-0">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * scrollAmount}px)`,
          }}
        >
          {carouselDetails.map((card) => (
            <div key={card.id} className="flex-shrink-0">
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
      <div className="relative mt-6 flex h-8 items-center justify-center gap-3.5">
        {/* Dot Indicators */}
        <div className="flex gap-2 sm:gap-3.5">
          {carouselDetails.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-200 ${
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
            className="group z-30 rounded-full bg-[#dadada] p-1.5 backdrop-blur-sm transition-colors duration-200 hover:bg-black dark:bg-white"
          >
            <ChevronLeft
              size={12}
              className="font-bold text-black group-hover:text-white dark:group-hover:text-black"
            />
          </button>

          <button
            onClick={nextSlide}
            className="group z-30 rounded-full bg-[#dadada] p-1.5 backdrop-blur-sm transition-colors duration-200 hover:bg-black hover:text-white dark:bg-white"
          >
            <ChevronRight
              size={12}
              className="font-bold text-black group-hover:text-white dark:group-hover:text-black"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
