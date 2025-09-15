import { CarouselCardProps } from "@/lib/types";
import Image from "next/image";

export default function CarouselCard({
  imgSrc,
  modelText,
  centerText,
  bottomHeaderText,
  bottomParagraph,
  btnText,
}: CarouselCardProps) {
  return (
    <div className="relative w-[20rem] h-[12rem] sm:w-[35rem] sm:h-[20rem] custom-900:w-[45rem] custom-900:h-[25rem] lg:w-[55rem] lg:h-[30rem] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
      <Image src={imgSrc} alt="carousel-img" fill className="object-cover" />

      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
        <span className="text-xs text-white font-bold tracking-wider uppercase">
          {modelText}
        </span>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 custom-900:px-8">
        {/* Main Title */}
        <div className="text-center mb-2 sm:mb-4">
          <h1 className="text-3xl sm:text-4xl custom-900:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-2 tracking-tight">
            {centerText}
          </h1>
        </div>

        {/* Description Section */}
        <div className="max-w-xs sm:max-w-sm custom-900:max-w-md absolute bottom-3 sm:bottom-6 custom-900:bottom-8">
          <h2 className="text-sm sm:text-lg custom-900:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 custom-900:mb-3">
            {bottomHeaderText}
          </h2>
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 custom-900:mb-6 line-clamp-2 sm:line-clamp-3 custom-900:line-clamp-none">
            {bottomParagraph}
          </p>
        </div>

        <div className="absolute bottom-3 sm:bottom-6 custom-900:bottom-8 right-3 sm:right-6 custom-900:right-8">
          <button className="bg-white text-gray-900 px-3 sm:px-4 custom-900:px-6 py-1.5 sm:py-2 custom-900:py-3 cursor-pointer rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
