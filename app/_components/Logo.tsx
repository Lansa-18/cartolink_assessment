import Link from "next/link";
import { Grid3X3, ChevronDown } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-8.5 group">
      {/* Logo Icon */}
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow duration-200">
        <Grid3X3 size={18} className="text-white" />
      </div>

      {/* Logo Text */}
      <article className="flex items-center gap-1.5">
        <button className="w-8 h-8 rounded-full bg-gradient-to-b from-pink-400 to-blue-400 flex items-center justify-center hover:shadow-md transition-shadow duration-200">
          <span className="text-sm font-medium text-white"></span>
        </button>

        <div className="flex gap-1.5 items-center">
          <h3 className="text-sm text-[#adaead] font-bold">benevolentnimblebot</h3>
          <ChevronDown />
        </div>
      </article>
    </Link>
  );
}
