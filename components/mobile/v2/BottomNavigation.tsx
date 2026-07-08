"use client";

import Link from "next/link";
import {
  House,
  Map,
  CalendarDays,
  Handshake,
} from "lucide-react";

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-3 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-[30px] border border-white/60 bg-white/90 shadow-[0_15px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl">

      <div className="flex items-center justify-around py-3">

        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-black"
        >
          <House size={24} />
          <span className="text-xs font-medium">Home</span>
        </Link>

        <Link
          href="/explore"
          className="flex flex-col items-center gap-1 text-zinc-500"
        >
          <Map size={24} />
          <span className="text-xs font-medium">Explore</span>
        </Link>

        <Link
          href="/events"
          className="flex flex-col items-center gap-1 text-zinc-500"
        >
          <CalendarDays size={24} />
          <span className="text-xs font-medium">Events</span>
        </Link>

        <Link
          href="/partner"
          className="flex flex-col items-center gap-1 text-zinc-500"
        >
          <Handshake size={24} />
          <span className="text-xs font-medium">Partner</span>
        </Link>

      </div>
    </nav>
  );
}