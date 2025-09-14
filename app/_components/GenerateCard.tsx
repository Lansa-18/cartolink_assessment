import { GenerateItem } from "@/lib/types";
import { ChevronDown } from "lucide-react";

interface GenerateCardProps {
  generateItems: GenerateItem[];
}

export default function GenerateCard({generateItems}: GenerateCardProps) {
  return (
    <section className="py-16 px-6 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-black dark:text-white">
          Generate
        </h2>
        <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1.5 justify-center">
          <ChevronDown size={14} />
          Show all
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7.5">
        {generateItems.map((item) => (
          <div
            key={item.id}
            className="bg-transparent"
          >
            <div className="flex items-center justify-between">
              {/* Left side - Icon and Content */}
              <div className="flex items-start gap-3 flex-1">
                <div
                  className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  {item.icon}
                </div>

                {/* Title and Description */}
                <div className="">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-black dark:text-white">
                      {item.title}
                    </h3>
                    {item.isNew && (
                      <span className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-semibold leading-[1.20]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right side - Open Button */}
              <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-black dark:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm ml-4 flex-shrink-0">
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>  )
}
