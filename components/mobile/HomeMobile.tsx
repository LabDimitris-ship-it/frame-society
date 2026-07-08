"use client";
import TrendingMobile from "./TrendingMobile";
import Link from "next/link";
import SearchMobile from "./SearchMobile";
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

export default function HomeMobile() {
  return (
    <div className="min-h-screen bg-[#fafafa] pb-28">

      <div className="px-5 pt-14">

        <p className="text-xs tracking-[0.35em] text-zinc-500">
          FRAME SOCIETY
        </p>

        <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
          <MapPin size={16} />
          Loutraki
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight">
          Discover
          <br />
          Beautiful Places
        </h1>

      </div>

      <div className="mt-8 px-5">

        <Link
          href="/explore"
          className="flex items-center gap-3 rounded-2xl bg-white px-5 py-5 shadow-lg"
        >
          <Search size={20} />

          <span className="text-zinc-500">
            Search places...
          </span>

        </Link>

      </div>

      <div className="mt-6 flex gap-3 overflow-x-auto px-5">

        {categories.map((category) => {

          const Icon = category.icon;

          return (
            <Link
              key={category.label}
              href={`/explore?category=${category.label.toLowerCase()}`}
              className="flex min-w-[82px] flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow"
            >
              <Icon size={22} />

              <span className="text-xs">
                {category.label}
              </span>
            </Link>
          );

        })}

      </div>

      <div className="mt-10 px-5">

        <h2 className="text-2xl font-bold">
          Trending
        </h2>
      <TrendingMobile />
      <SearchMobile/>
      </div>

    </div>
  );
}