"use client";

import Link from "next/link";
import {GoHomeFill} from 'react-icons/go'
import {FaRegImage, FaFolder} from 'react-icons/fa6'
import {IoVideocam, IoLogoFigma} from 'react-icons/io5'
import {PiMarkerCircleFill} from 'react-icons/pi'
import {HiMiniPaintBrush} from 'react-icons/hi2'
import {GiFountainPen} from 'react-icons/gi'
import {
  Home,
  Monitor,
  Video,
  Edit3,
  Check,
  Type,
  Folder,
  Bell,
  Images,
  Headset,
} from "lucide-react";
import { usePathname } from "next/navigation";
import SupportIcon from "./SupportIcons";
import Button from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";

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
    <nav className="">
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
            <button className="w-8 h-8 rounded-full bg-gradient-to-b from-pink-400 to-blue-400 flex items-center justify-center hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-white"></span>
            </button>
          </article>
        </div>
      </div>
    </nav>
  );
}
