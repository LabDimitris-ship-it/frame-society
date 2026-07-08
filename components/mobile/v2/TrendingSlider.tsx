"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Star } from "lucide-react";

const places = [
  {
    name: "Spade Grooming",
    image: "/images/spade/hero.png",
    category: "Barber Shop",
    rating: 5,
    city: "Loutraki",
    href: "/hair/spade-grooming",
  },
  {
    name: "ΕΣΘΗΡ",
    image: "/images/esthir/hero.png",
    category: "Beauty",
    rating: 5,
    city: "Loutraki",
    href: "/beauty/esthir",
  },
];

export default function TrendingSlider() {
  return (
    <section className="mt-10">

      <div className="mb-6 flex items-center justify-between px-5">

        <div>
          <h2 className="text-2xl font-bold text-zinc-900">
            Trending Now
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Discover the most popular places
          </p>
        </div>

        <button className="text-sm font-semibold text-zinc-500">
          View all
        </button>

      </div>

      <div className="flex gap-5 overflow-x-auto px-5 pb-2">

        {places.map((place) => (
          <Link
            key={place.name}
            href={place.href}
            className="group min-w-[285px] overflow-hidden rounded-[30px] bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
          >

            <div className="relative h-48 overflow-hidden">

              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur">
                <Heart
                  size={18}
                  className="text-zinc-700"
                />
              </button>

            </div>

            <div className="p-5">

              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium">
                {place.category}
              </span>

              <h3 className="mt-4 text-xl font-bold text-zinc-900">
                {place.name}
              </h3>

              <div className="mt-3 flex items-center justify-between">

                <div className="flex items-center gap-1">

                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="font-semibold">
                    {place.rating}
                  </span>

                </div>

                <div className="flex items-center gap-1 text-sm text-zinc-500">

                  <MapPin size={15} />

                  {place.city}

                </div>

              </div>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}