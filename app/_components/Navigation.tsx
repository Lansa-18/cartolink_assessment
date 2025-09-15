"use client";

import { Bell, Headset, Images } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFolder, FaRegImage } from "react-icons/fa6";
import { GiFountainPen } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { IoVideocam } from "react-icons/io5";
import { PiMarkerCircleFill } from "react-icons/pi";
import Button from "./Button";
import Logo from "./Logo";
import SupportIcon from "./SupportIcons";
import { ThemeToggle } from "./ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";

export default function Navigation() {
  const pathName = usePathname();

  const navItems = [
    { href: "/", icon: GoHomeFill, label: "Home" },
    { href: "#", icon: FaRegImage, label: "Desktop" },
    { href: "#", icon: IoVideocam, label: "Video" },
    { href: "#", icon: GiFountainPen, label: "Edit" },
    { href: "#", icon: HiMiniPaintBrush, label: "Check" },
    { href: "#", icon: PiMarkerCircleFill, label: "Text" },
    { href: "#", icon: FaFolder, label: "Files" },
  ];

  return (
    <nav className="bg-white px-3 py-3 sm:px-6 dark:bg-black">
      <div className="mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <article className="flex items-center">
            <Logo />
          </article>

          {/* Navigation Icons - Hidden on mobile, shown on tablet+ */}
          <article className="bg-primary-grey hidden items-center gap-3.5 rounded-xl px-4 py-2 lg:flex">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg p-3 ${pathName === item.href ? "bg-white shadow-sm dark:bg-black" : "bg-none"} transition-all duration-300 hover:bg-white hover:shadow-sm dark:hover:bg-black`}
                  title={item.label}
                >
                  <IconComponent size={20} className="" />
                </Link>
              );
            })}
          </article>

          <article className="flex items-center gap-2 sm:gap-4">
            <HamburgerMenu />

            {/* Desktop Items - Hidden on mobile */}
            <div className="hidden items-center gap-2 sm:gap-4 xl:flex">
              {/* Gallery */}
              <SupportIcon text="Gallery" href="/gallery" icon={Images} />

              {/* Support */}
              <SupportIcon text="Support" href="/support" icon={Headset} />

              {/* Notification Bell */}
              <Button icon={Bell} />

              {/* Dark / Light Mode */}
              <ThemeToggle />
            </div>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-pink-400 to-blue-400 transition-shadow duration-200 hover:shadow-md">
              <span className="text-sm font-medium text-white"></span>
            </button>
          </article>
        </div>
      </div>
    </nav>
  );
}
