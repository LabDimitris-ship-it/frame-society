"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroDesktop() {
  return (
<section className="relative overflow-hidden">      {/* Background */}
      <Image
        src="/images/hero.png"
        alt="Frame Society"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Navbar */}
      <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <h1 className="text-xl font-semibold tracking-[6px] text-white md:text-2xl">
          FRAME SOCIETY
        </h1>

        <Link
          href="/explore"
          className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white hover:text-black"
        >
          Explore
        </Link>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center">
        <span className="mb-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
          Discover • Explore • Experience
        </span>

        <h2 className="text-5xl font-light leading-tight tracking-[4px] text-white md:text-7xl">
          Discover the
          <br />
          Best Places
          <br />
          Around You
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Coffee, Restaurants, Beach Bars, Beauty, Hair, Nightlife and unique
          local experiences — all in one place.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() =>
              document
                .getElementById("explore")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
          >
            Explore Loutraki
          </button>

          <Link
            href="/partner"
            className="rounded-full border border-white px-8 py-4 text-center text-lg text-white transition hover:bg-white hover:text-black"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">
        ↓
      </div>
    </section>
  );
}