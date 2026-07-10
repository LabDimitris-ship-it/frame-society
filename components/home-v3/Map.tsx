"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const ExploreMap = dynamic(
  () => import("@/components/explore/ExploreMap"),
  {
    ssr: false,
  }
);

export default function Map() {
  return (
    <section className="bg-[#faf8f5] py-12">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 overflow-hidden rounded-[36px] bg-white shadow-sm">

        {/* Left */}
        <div className="flex flex-col justify-center px-20 py-16">

          <p className="text-sm uppercase tracking-[0.35em] text-[#B38B59]">
            Explore The Map
          </p>

          <h2 className="mt-6 text-6xl font-light leading-tight">
            Find Top Places
            <br />
            Around You
          </h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-neutral-600">
            Explore restaurants, cafés, beach clubs, beauty salons
            and premium destinations across Greece.
          </p>

          <Link
            href="/explore"
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-black px-8 py-4 text-sm uppercase tracking-[0.18em] transition-all duration-300 hover:bg-black hover:text-white"
          >
            Open Map →
          </Link>

        </div>

        {/* Right */}
        <div className="relative h-[760px] overflow-hidden">
          <ExploreMap />
        </div>

      </div>
    </section>
  );
}