"use client";

import Link from "next/link";
import Image from "next/image";
import { businesses } from "@/data/businesses";

export default function FeaturedSection() {
  return (
    <section className="bg-[#fafafa] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="rounded-full bg-black px-4 py-2 text-sm text-white">
            FEATURED
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Featured Places
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Hand-picked places by Frame Society.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {businesses.map((business) => (
            <Link
              key={business.slug}
              href={
                business.category === "hair"
                  ? `/hair/${business.slug}`
                  : `/beauty/${business.slug}`
              }
              className="group overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={business.hero}
                  alt={business.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-yellow-500">
                    ★★★★★
                  </span>

                  <span className="text-sm text-gray-500">
                    5.0
                  </span>
                </div>

                <h3 className="text-3xl font-bold">
                  {business.name}
                </h3>

                <p className="mt-3 text-gray-500">
                  {business.subtitle}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    📍 {business.city}
                  </span>

                  <span className="font-semibold">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}