"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link
          href="/"
          className={`text-xl font-semibold tracking-[0.35em] transition ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          FRAME SOCIETY
        </Link>

        {/* Desktop */}

        <nav
          className={`hidden gap-12 text-sm uppercase tracking-[0.25em] lg:flex ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Link href="/explore">Explore</Link>

          <Link href="/hair">Hair</Link>

          <Link href="/beauty">Beauty</Link>

          <Link href="/partner">Partner</Link>
        </nav>

        {/* Right */}

        <div
          className={`flex items-center gap-6 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Search size={20} />

          <Menu size={24} />
        </div>
      </div>
    </header>
  );
}