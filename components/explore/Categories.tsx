"use client";

import Link from "next/link";
import {
  Coffee,
  UtensilsCrossed,
  Scissors,
  Sparkles,
  Martini,
  Waves,
} from "lucide-react";

const categories = [
  {
    title: "Coffee",
    subtitle: "Specialty Coffee & Brunch",
    href: "/coffee",
    count: 0,
    icon: Coffee,
    color: "from-amber-50 to-white",
  },
  {
    title: "Food",
    subtitle: "Restaurants & Fine Dining",
    href: "/food",
    count: 0,
    icon: UtensilsCrossed,
    color: "from-orange-50 to-white",
  },
  {
    title: "Hair",
    subtitle: "Barbers & Hair Salons",
    href: "/hair/spade-grooming",
    count: 1,
    icon: Scissors,
    color: "from-slate-50 to-white",
  },
  {
    title: "Beauty",
    subtitle: "Spa • Nails • Aesthetics",
    href: "/beauty/esthir",
    count: 1,
    icon: Sparkles,
    color: "from-pink-50 to-white",
  },
  {
    title: "Nightlife",
    subtitle: "Bars & Cocktails",
    href: "/nightlife",
    count: 0,
    icon: Martini,
    color: "from-violet-50 to-white",
  },
  {
    title: "Beach",
    subtitle: "Beach Bars & Resorts",
    href: "/beach",
    count: 0,
    icon: Waves,
    color: "from-sky-50 to-white",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-[#fafafa] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-black px-5 py-2 text-sm uppercase tracking-[0.3em] text-white">
            Categories
          </span>

          <h2 className="mt-8 text-6xl font-bold">
            Explore by Category
          </h2>

          <p className="mt-6 text-xl text-zinc-500">
            Find the experience you're looking for.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className={`group rounded-[34px] border border-zinc-200 bg-gradient-to-br ${category.color} p-10 transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-2xl`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md transition group-hover:scale-110">
                  <category.icon
                    size={30}
                    strokeWidth={2}
                    className="text-black"
                  />
                </div>

                <span className="text-sm font-medium text-zinc-400 transition group-hover:text-black">
                  {category.count} Places →
                </span>
              </div>

              <h3 className="mt-8 text-4xl font-bold tracking-tight">
                {category.title}
              </h3>

              <p className="mt-3 text-lg text-zinc-500">
                {category.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}