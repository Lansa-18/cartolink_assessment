"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Monitor,
  Video,
  Edit3,
  Check,
  Type,
  Folder,
  Bell,
  Sun,
  Images,
  Headset,
} from "lucide-react";
import { usePathname } from "next/navigation";
import SupportIcon from "./SupportIcons";
import Button from "./Button";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
  const pathName = usePathname();

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/desktop", icon: Monitor, label: "Desktop" },
    { href: "/video", icon: Video, label: "Video" },
    { href: "/edit", icon: Edit3, label: "Edit" },
    { href: "/check", icon: Check, label: "Check" },
    { href: "/text", icon: Type, label: "Text" },
    { href: "/files", icon: Folder, label: "Files" },
  ];

  return (
    <nav className="">
      <div className="mx-auto px-6 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <article className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/next.svg"
                alt="Logo"
                width={28}
                height={28}
                className="dark:invert fill-black"
              />
              <span className="font-semibold text-lg text-gray-900 dark:text-white">
                CartoLinks
              </span>
            </Link>
          </article>

          {/* Navigation Icons */}
          <article className="flex items-center gap-3.5 py-2 px-4 rounded-xl bg-secondary-grey">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`p-3 rounded-lg ${pathName === item.href ? "bg-white shadow-sm" : "bg-none"} hover:bg-white hover:shadow-sm transition-all duration-300`}
                  title={item.label}
                >
                  <IconComponent size={20} className="" />
                </Link>
              );
            })}
          </article>

          {/* Profile/User Section */}
          <article className="flex items-center gap-4">
            {/* Gallery */}
            <SupportIcon text="Gallery" href="/gallery" icon={Images} />

            {/* Support */}
            <SupportIcon text="Support" href="/support" icon={Headset} />

            {/* Notification Bell */}
            <Button icon={Bell} />

            {/* Star/Favorites */}
            <ThemeToggle />

            {/* User Avatar */}
            <button className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-white">U</span>
            </button>
          </article>
        </div>
      </div>
    </nav>
  );
}
