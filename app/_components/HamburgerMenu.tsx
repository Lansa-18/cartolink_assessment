"use client";

import { Bell, Headset, Images, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFolder, FaRegImage } from "react-icons/fa6";
import { GiFountainPen } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { IoVideocam } from "react-icons/io5";
import { PiMarkerCircleFill } from "react-icons/pi";
import { ThemeToggle } from "./ThemeToggle";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative xl:hidden">
      <button
        onClick={toggleMenu}
        className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={20} className="text-black dark:text-white" />
        ) : (
          <Menu size={20} className="text-black dark:text-white" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="bg-opacity-25 fixed inset-0 z-40 bg-black"
            onClick={closeMenu}
          />

          {/* Menu Content */}
          <div className="absolute top-12 right-0 z-50 w-64 rounded-xl border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
            {/* Navigation Items */}
            <div className="px-2 py-2">
              <h3 className="px-2 py-1 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                Navigation
              </h3>
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 ${
                      pathName === item.href
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                        : "text-black hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                    }`}
                  >
                    <IconComponent size={18} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="my-2 border-t border-gray-200 dark:border-gray-700" />

            {/* Utility Items */}
            <div className="px-2 py-2">
              <h3 className="px-2 py-1 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                Tools
              </h3>

              {/* Gallery */}
              <Link
                href="/gallery"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Images size={18} className="text-black dark:text-white" />
                <span className="font-medium text-black dark:text-white">
                  Gallery
                </span>
              </Link>

              {/* Support */}
              <Link
                href="/support"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Headset size={18} className="text-black dark:text-white" />
                <span className="font-medium text-black dark:text-white">
                  Support
                </span>
              </Link>

              {/* Notification Bell */}
              <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                <Bell size={18} className="text-black dark:text-white" />
                <span className="font-medium text-black dark:text-white">
                  Notifications
                </span>
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center justify-between rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                <span className="font-medium text-black dark:text-white">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
