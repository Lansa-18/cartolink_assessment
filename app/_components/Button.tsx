import { LucideIcon } from "lucide-react";

interface ButtonProps {
    icon: LucideIcon;

}

export default function Button({icon: Icon}: ButtonProps) {
  return (
    <button className="relative p-2.5 rounded-full border bg-secondary-grey hover:bg-gray-100 transition-colors duration-200">
        {<Icon size={16}/>}
    </button>
  );
}
