"use client";

import {
  Bell,
  Headset,
  Images
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFolder, FaRegImage } from 'react-icons/fa6';
import { GiFountainPen } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { HiMiniPaintBrush } from 'react-icons/hi2';
import { IoVideocam } from 'react-icons/io5';
import { PiMarkerCircleFill } from 'react-icons/pi';
import Button from "./Button";
import Logo from "./Logo";
import SupportIcon from "./SupportIcons";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
  const pathName = usePathname();

  const navItems = [
    { href: "/", icon: GoHomeFill, label: "Home" },
    { href: "/desktop", icon: FaRegImage, label: "Desktop" },
    { href: "/video", icon: IoVideocam, label: "Video" },
    { href: "/edit", icon: GiFountainPen, label: "Edit" },
    { href: "/check", icon: HiMiniPaintBrush, label: "Check" },
    { href: "/text", icon: PiMarkerCircleFill, label: "Text" },
    { href: "/files", icon: FaFolder, label: "Files" },
  ];

  return (
    <nav className="bg-white dark:bg-black">
      <div className="mx-auto px-6 py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <article className="flex items-center">
            <Logo />
          </article>

          {/* Navigation Icons */}
          <article className="flex items-center gap-3.5 py-2 px-4 rounded-xl bg-primary-grey">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`p-3 rounded-lg ${pathName === item.href ? "bg-white dark:bg-black shadow-sm" : "bg-none"} hover:bg-white dark:hover:bg-black hover:shadow-sm transition-all duration-300`}
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
            <button className="w-8 h-8 rounded-full bg-gradient-to-b from-pink-400 to-blue-400 flex items-center justify-center hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-white"></span>
            </button>
          </article>
        </div>
      </div>
    </nav>
  );
}
