"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-6 z-[9999] w-[95%] max-w-7xl -translate-x-1/2 rounded-full transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-2xl backdrop-blur-xl"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">

        <Link
          href="/"
          className={`text-xl font-semibold tracking-[6px] transition ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          FRAME SOCIETY
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">

          <button
            className={`rounded-full px-5 py-2 transition ${
              scrolled
                ? "bg-gray-100 text-black"
                : "bg-white/20 text-white"
            }`}
          >
            🔍 Search
          </button>

          <button
            className={`rounded-full px-5 py-2 transition ${
              scrolled
                ? "bg-gray-100 text-black"
                : "bg-white/20 text-white"
            }`}
          >
            📍 Loutraki
          </button>

          <button
            className={`rounded-full px-5 py-2 transition ${
              scrolled
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Explore
          </button>

        </nav>

      </div>
    </header>
  );
}