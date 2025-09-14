import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {IoLogoFigma} from 'react-icons/io5'


export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-6.5 group">
      {/* Logo Icon */}
        <IoLogoFigma size={25} className="" />

      {/* Logo Text */}
      <article className="flex items-center gap-2">
        <button className="w-6 h-6 rounded-full bg-gradient-to-b from-pink-400 to-blue-400 flex items-center justify-center hover:shadow-md transition-shadow duration-200">
          <span className="text-sm font-medium text-white"></span>
        </button>

        <div className="flex gap-1.5 items-center">
          <h3 className="text-sm text-[#adaead] font-bold">benevolentnimblebot</h3>
          <ChevronDown size={16} />
        </div>
      </article>
    </Link>
  );
}
