"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Chapter Name */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3 group text-black no-underline"
        >
          <div className="relative w-11 h-11 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src="/images/primary-logo.webp"
              alt="One for the World Logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl sm:text-3xl tracking-tight leading-none text-black">
              ONE FOR THE WORLD
            </span>
            <span className="text-[11px] font-bold tracking-widest text-[#2675F8] uppercase">
              UW-Madison Chapter
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link
            href="/"
            className={`text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
              isActive("/")
                ? "text-[#2675F8] border-b-2 border-[#2675F8] pb-1"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            Home
          </Link>
          <Link
            href="/team"
            className={`text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
              isActive("/team")
                ? "text-[#2675F8] border-b-2 border-[#2675F8] pb-1"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            Team
          </Link>
          <Link
            href="/events"
            className={`text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
              isActive("/events")
                ? "text-[#2675F8] border-b-2 border-[#2675F8] pb-1"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            Events
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
              isActive("/contact")
                ? "text-[#2675F8] border-b-2 border-[#2675F8] pb-1"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/involve"
            className={`text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
              isActive("/involve")
                ? "text-[#2675F8] border-b-2 border-[#2675F8] pb-1"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            Get Involved
          </Link>
          <a
            href="https://forms.gle/xBHe5JDW9qnTGEoa9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold bg-[#E2FF3E] text-black border border-black/10 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            Sign Up
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isActive("/")
                ? "bg-[#2675F8]/10 text-[#2675F8]"
                : "text-neutral-800 hover:bg-neutral-50"
            }`}
          >
            Home
          </Link>
          <Link
            href="/team"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isActive("/team")
                ? "bg-[#2675F8]/10 text-[#2675F8]"
                : "text-neutral-800 hover:bg-neutral-50"
            }`}
          >
            Team
          </Link>
          <Link
            href="/events"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isActive("/events")
                ? "bg-[#2675F8]/10 text-[#2675F8]"
                : "text-neutral-800 hover:bg-neutral-50"
            }`}
          >
            Events
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isActive("/contact")
                ? "bg-[#2675F8]/10 text-[#2675F8]"
                : "text-neutral-800 hover:bg-neutral-50"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/involve"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isActive("/involve")
                ? "bg-[#2675F8]/10 text-[#2675F8]"
                : "text-neutral-800 hover:bg-neutral-50"
            }`}
          >
            Get Involved
          </Link>
          <div className="pt-2">
            <a
              href="https://forms.gle/xBHe5JDW9qnTGEoa9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block w-full text-center py-3 rounded-full text-base font-bold bg-[#E2FF3E] text-black border border-black/10 shadow-sm"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
