import Image from "next/image";

interface CarouselCardProps {
  imgSrc: string;
  modelText: string;
  centerText: string;
  bottomHeaderText: string;
  bottomParagraph: string;
  btnText: string;
}

export default function CarouselCard({
  imgSrc,
  modelText,
  centerText,
  bottomHeaderText,
  bottomParagraph,
  btnText,
}: CarouselCardProps) {
  return (
    <div className="relative w-[55rem] h-[30rem] rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Images */}

      <Image src={imgSrc} alt="carousel-img" fill className="object-cover" />

      <div className="absolute top-4 left-4 z-20">
        <span className="text-xs text-white font-bold tracking-wider uppercase">
          {modelText}
        </span>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8">
        {/* Main Title */}
        <div className="text-center mb-4">
          <h1 className="text-7xl font-bold text-white mb-2 tracking-tight">
            {centerText}
          </h1>
        </div>

        {/* Description Section */}
        <div className="max-w-md absolute bottom-8">
          <h2 className="text-2xl font-bold text-white mb-3">
            {bottomHeaderText}
          </h2>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            {bottomParagraph}
          </p>
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-8 right-8">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
