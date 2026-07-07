"use client";

import { useExplore } from "./ExploreContext";

export default function SearchBar() {
  const { search, setSearch } = useExplore();

  return (
    <div className="absolute top-36 left-4 right-4 z-[1000]">
      <div className="flex items-center rounded-2xl bg-white px-4 py-3 shadow-xl">
        <span className="mr-3 text-xl">🔍</span>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search places..."
          className="w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}