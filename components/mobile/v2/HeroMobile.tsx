"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MapPin } from "lucide-react";

export default function HeroMobile() {
  return (
    <section className="relative h-[68vh] overflow-hidden rounded-b-[40px]">

      <Image
        src="/images/hero.png"
        alt="Frame Society"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col px-6 pt-12">

        <div className="flex items-center justify-between">

          <h1 className="text-xl tracking-[6px] text-white font-semibold">
            FRAME SOCIETY
          </h1>

          <button className="rounded-full bg-white/10 p-4 backdrop-blur">
            <Menu className="text-white" />
          </button>

        </div>

        <div className="mt-auto pb-24">

          <h2 className="text-5xl font-light text-white leading-tight">
            Discover
            <br />
            Loutraki
          </h2>

          <p className="mt-5 text-lg text-white/80">
            The best places, experiences and local vibes.
          </p>

          <Link
            href="/explore"
            className="mt-8 flex h-16 items-center justify-center gap-3 rounded-full bg-white text-xl font-semibold text-black"
          >
            <MapPin size={22} />
            Explore Nearby
          </Link>

        </div>

      </div>

    </section>
  );
}