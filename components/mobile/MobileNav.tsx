"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Map,
  CalendarDays,
  Handshake,
} from "lucide-react";

const items = [
  {
    href: "/home-v2",
    label: "Home",
    icon: House,
  },
  {
    href: "/explore",
    label: "Explore",
    icon: Map,
  },
  {
    href: "/events",
    label: "Events",
    icon: CalendarDays,
  },
  {
    href: "/partner",
    label: "Partner",
    icon: Handshake,
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-[9999] flex justify-center md:hidden">

      <nav className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/30 bg-white/80 p-2 shadow-2xl backdrop-blur-2xl">

        {items.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex min-w-[72px] flex-col items-center rounded-full px-5 py-3 transition-all duration-300 ${
  active
    ? "scale-105 bg-black text-white shadow-2xl"
    : "text-zinc-500 hover:scale-105 hover:bg-zinc-100"
}`}
            >
             <Icon
  size={22}
  className={`transition-transform duration-300 ${
    active ? "scale-110" : ""
  }`}
/>

              <span
  className={`mt-1 text-[11px] font-medium transition-all duration-300 ${
    active ? "opacity-100" : "opacity-70"
  }`}
>
  {item.label}
</span>
            </Link>
          );
        })}

      </nav>

    </div>
  );
}