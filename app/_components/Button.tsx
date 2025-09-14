import { LucideIcon } from "lucide-react";

interface ButtonProps {
    icon: LucideIcon;

}

export default function Button({icon: Icon}: ButtonProps) {
  return (
    <button className="relative p-2.5 rounded-full cursor-pointer bg-primary-grey hover:bg-gray-100 dark:hover:text-black transition-all duration-300">
        {<Icon className="fill-black dark:fill-white " size={16}/>}
    </button>
  );
}
