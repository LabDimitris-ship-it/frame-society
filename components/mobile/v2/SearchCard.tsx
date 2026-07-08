"use client";

import Link from "next/link";
import { Search, LocateFixed } from "lucide-react";

export default function SearchCard() {
  return (
    <section className="-mt-10 relative z-30 px-5">
      <div className="rounded-[32px] bg-white p-5 shadow-2xl">

        <div className="flex gap-3">

          <Link
            href="/explore"
            className="flex flex-1 items-center gap-3 rounded-2xl border border-zinc-200 px-4 py-4"
          >
            <Search size={20} className="text-zinc-500" />

            <span className="text-zinc-500">
              Search places...
            </span>
          </Link>

          <button className="flex items-center gap-2 rounded-2xl border border-zinc-200 px-5">
            <LocateFixed size={20} />

            <span className="font-medium">
              Near me
            </span>
          </button>

        </div>

      </div>
    </section>
  );
}