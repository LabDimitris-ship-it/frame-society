"use client";

import {
  Coffee,
  UtensilsCrossed,
  Umbrella,
  Martini,
  Sparkles,
  Scissors,
} from "lucide-react";

const categories = [
  { title: "Coffee", icon: Coffee, color: "bg-orange-100" },
  { title: "Food", icon: UtensilsCrossed, color: "bg-orange-50" },
  { title: "Beach", icon: Umbrella, color: "bg-sky-100" },
  { title: "Nightlife", icon: Martini, color: "bg-purple-100" },
  { title: "Beauty", icon: Sparkles, color: "bg-pink-100" },
  { title: "Hair", icon: Scissors, color: "bg-green-100" },
];

export default function CategorySlider() {
  return (
    <section className="mt-6 px-5">
      <div className="flex gap-5 overflow-x-auto pb-2">

        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex min-w-[72px] flex-col items-center"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${item.color} shadow-md`}
              >
                <Icon size={28} />
              </div>

              <span className="mt-3 text-sm font-medium text-zinc-700">
                {item.title}
              </span>
            </button>
          );
        })}

      </div>
    </section>
  );
}