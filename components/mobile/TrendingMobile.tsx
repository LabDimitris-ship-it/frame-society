"use client";

import Image from "next/image";
import Link from "next/link";
import { businesses } from "@/data/businesses";

export default function TrendingMobile() {
  return (
    <div className="mt-5 flex gap-4 overflow-x-auto px-5 pb-2">

      {businesses.slice(0, 5).map((business) => (

        <Link
          key={business.slug}
          href={
            business.category === "hair"
              ? `/hair/${business.slug}`
              : `/beauty/${business.slug}`
          }
          className="min-w-[270px] overflow-hidden rounded-3xl bg-white shadow-xl"
        >

          <Image
            src={business.hero}
            alt={business.name}
            width={600}
            height={400}
            className="h-44 w-full object-cover"
          />

          <div className="p-5">

            <div className="flex items-center justify-between">

              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase">
                {business.category}
              </span>

              <span className="text-yellow-500">
                ★★★★★
              </span>

            </div>

            <h3 className="mt-4 text-2xl font-bold">
              {business.name}
            </h3>

            <p className="mt-2 text-zinc-500">
              {business.city}
            </p>

          </div>

        </Link>

      ))}

    </div>
  );
}