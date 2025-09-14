import { IoLogoFigma } from "react-icons/io5";
import { RxModulzLogo } from "react-icons/rx";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2f2f2f] dark:bg-gray-900 ">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Krea AI Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 bg-black rounded-lg">
              <IoLogoFigma size={25} className="text-white" />
            </div>
            <span className="text-white font-bold text-2xl">Krea AI</span>
          </div>

          {/* Right Side - Curated by Mobbin */}
          <div className="flex items-center gap-5 text-white">
            <span className="text-2xl font-bold tracking-normal">
              curated by
            </span>
            <div className="flex items-center gap-1.5">
              <RxModulzLogo className="text-white text-5xl" />
              <span className="text-white font-bold text-3xl">Mobbin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
