"use client";

import { useState } from "react";
import Image from "next/image";
import { businesses } from "@/data/businesses";
import { useExplore } from "./ExploreContext";

export default function BottomSheet() {
  const [expanded, setExpanded] = useState(false);

  const {
    setSelected,
    setActiveBusiness,
    activeBusiness,
    search,
    category,
  } = useExplore();

  const filteredBusinesses = businesses.filter((business) => {
    const value = search.toLowerCase();

    const matchesSearch =
      business.name.toLowerCase().includes(value) ||
      business.category.toLowerCase().includes(value) ||
      business.city.toLowerCase().includes(value);

    const matchesCategory =
      category === "all" ||
      business.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 z-[1000] rounded-t-3xl bg-white shadow-2xl transition-all duration-500 ${
        activeBusiness
          ? "h-[12vh]"
          : expanded
          ? "h-[80vh]"
          : "h-[28vh]"
      }`}
    >
      {/* Handle */}
      <div
        onClick={() => {
          if (!activeBusiness) {
            setExpanded(!expanded);
          }
        }}
        className="flex cursor-pointer justify-center py-4"
      >
        <div className="h-1.5 w-16 rounded-full bg-gray-300" />
      </div>

      <div className="h-full overflow-y-auto px-5 pb-10">
        <div className="mb-8 flex items-center justify-between">

  <div>

    <span className="rounded-full bg-black px-4 py-1 text-xs uppercase tracking-[0.25em] text-white">
      Trending
    </span>

    <h2 className="mt-4 text-3xl font-bold">
      Discover Loutraki
    </h2>

    <p className="mt-2 text-gray-500">
      Curated places selected by Frame Society
    </p>

  </div>

  <button className="rounded-full bg-zinc-100 px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white">
    View all →
  </button>

</div>

        <div className="space-y-3">
          {filteredBusinesses.map((business) => (
            <div
              key={business.slug}
              onClick={() => {
                setSelected(business.slug);
                setActiveBusiness(business.slug);
              }}
className="
group
mb-5
flex
cursor-pointer
items-center
gap-6
rounded-[30px]
border
border-zinc-100
bg-white
p-6
shadow-md
transition-all
duration-300
hover:-translate-y-2
hover:border-black
hover:shadow-2xl
"            >
              <Image
  src={business.logo || business.hero}
  alt={business.name}
  width={100}
  height={100}
  className={
    business.logo
      ? "h-24 w-24 rounded-full border border-zinc-200 bg-white p-3 object-contain transition group-hover:scale-105"
      : "h-24 w-24 rounded-2xl object-cover transition group-hover:scale-105"
  }
/>

              <div className="flex flex-1 flex-col gap-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {business.name}
                </h3>

                <span className="inline-flex w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                  <span className="rounded-full bg-black px-3 py-1 text-xs uppercase tracking-wider text-white">
  {business.category}
</span>
                </span>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg text-yellow-500">
                    <div className="flex items-center gap-2">

  <span className="text-yellow-500">
    ★★★★★
  </span>

  <span className="text-sm font-medium">
    5.0
  </span>

  <span className="text-sm text-zinc-400">
    • {business.city}
  </span>

</div>
                  </span>

                  <span className="text-xs text-gray-400">
                    {business.city}
                  </span>
                </div>
              </div>

              <div
  className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-zinc-100
text-xl
transition
group-hover:translate-x-1
group-hover:bg-black
group-hover:text-white
"
>
  →
</div>
            </div>
          ))}

          {filteredBusinesses.length === 0 && (
            <div className="rounded-2xl bg-gray-100 p-8 text-center text-gray-500">
              No places found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}