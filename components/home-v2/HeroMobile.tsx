"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  Coffee,
  UtensilsCrossed,
  Scissors,
  Sparkles,
  Martini,
  Waves,
} from "lucide-react";

const categories = [
  { icon: Coffee, label: "Coffee" },
  { icon: UtensilsCrossed, label: "Food" },
  { icon: Scissors, label: "Hair" },
  { icon: Sparkles, label: "Beauty" },
  { icon: Martini, label: "Nightlife" },
  { icon: Waves, label: "Beach" },
];

export default function HeroMobile() {
  return (
    <section className="relative min-h-screen overflow-hidden md:hidden">
      {/* Background */}
      <Image
        src="/images/hero.png"
        alt="Frame Society"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex min-h-screen flex-col px-6 pt-14">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.35em] text-white/70">
              FRAME SOCIETY
            </p>

            <div className="mt-2 flex items-center gap-2 text-white/80">
              <MapPin size={16} />
              <span className="text-sm">Loutraki</span>
            </div>
          </div>

          <Link
            href="/explore"
            className="rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-xl"
          >
            Explore
          </Link>
        </div>

        {/* Title */}
        <div className="mt-14">
          <h1 className="text-5xl font-bold leading-tight text-white">
            Discover
            <br />
            Beautiful
            <br />
            Places
          </h1>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Coffee, restaurants, beach bars,
            beauty and unforgettable experiences.
          </p>
        </div>

        {/* Search */}
        <Link
          href="/explore"
          className="mt-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-5 shadow-2xl"
        >
          <Search size={20} className="text-zinc-500" />

          <span className="text-zinc-500">
            Search places...
          </span>
        </Link>

        {/* Categories */}
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.label}
                className="flex min-w-[74px] flex-col items-center gap-2 rounded-2xl bg-white/10 px-4 py-4 backdrop-blur-xl"
              >
                <Icon
                  size={22}
                  className="text-white"
                />

                <span className="text-xs text-white">
                  {category.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-auto pb-32">
          <Link
            href="/explore"
            className="block rounded-2xl bg-white py-5 text-center text-lg font-semibold text-black"
          >
            Explore Loutraki
          </Link>
        </div>

      </div>
    </section>
  );
}