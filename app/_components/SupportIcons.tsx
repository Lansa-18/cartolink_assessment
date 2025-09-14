import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SupportIconProps {
    text: string;
    icon: LucideIcon;
    href: string;
}

export default function SupportIcon({text, icon: Icon, href}: SupportIconProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-gray-600 dark:text-white dark:hover:bg-white dark:hover:text-black bg-primary-grey py-2 px-2 rounded-lg hover:text-gray-900 transition-colors duration-200"
    >
      <Icon size={16} />
      <span className="text-sm font-medium">{text}</span>
    </Link>
  );
}
