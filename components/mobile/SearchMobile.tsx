"use client";

import Link from "next/link";
import { Search, MapPin } from "lucide-react";

export default function SearchMobile() {
  return (
    <div className="px-5">
      <Link
        href="/explore"
        className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-xl transition active:scale-[0.98]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100">
          <Search size={22} />
        </div>

        <div className="flex-1">
          <p className="font-semibold text-zinc-900">
            Search places
          </p>

          <p className="text-sm text-zinc-500">
            Coffee • Food • Beauty • Hair
          </p>
        </div>
      </Link>

      <Link
        href="/explore"
        className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-black py-4 text-white transition active:scale-[0.98]"
      >
        <MapPin size={18} />
        Near Me
      </Link>
    </div>
  );
}