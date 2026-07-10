"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Coffee",
    subtitle: "Specialty Coffee & Brunch",
    href: "/coffee",
    image: "/images/categories/coffee.jpg",
  },
  {
    title: "Food",
    subtitle: "Restaurants & Fine Dining",
    href: "/food",
    image: "/images/categories/food.jpg",
  },
  {
    title: "Hair",
    subtitle: "Premium Barber Shops",
    href: "/hair",
    image: "/images/categories/hair.jpg",
  },
  {
    title: "Beauty",
    subtitle: "Aesthetics & Wellness",
    href: "/beauty",
    image: "/images/categories/beauty.jpg",
  },
  {
    title: "Nightlife",
    subtitle: "Bars & Cocktails",
    href: "/nightlife",
    image: "/images/categories/nightlife.jpg",
  },
  {
    title: "Beach",
    subtitle: "Beach Clubs & Resorts",
    href: "/beach",
    image: "/images/categories/beach.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="tracking-[6px] uppercase text-[#B38B59]">
            DISCOVER
          </span>

          <h2 className="mt-4 text-5xl font-light md:text-6xl">
            Explore by Category
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500">
            Discover carefully selected places across Greece,
            from specialty coffee and fine dining to beauty,
            nightlife and beach experiences.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (

            <Link
              key={category.title}
              href={category.href}
              className="group overflow-hidden rounded-[32px] border border-zinc-200 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width:768px)100vw,33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              </div>

              <div className="p-8">

                <div className="flex items-center justify-between">

                  <h3 className="text-3xl font-semibold">
                    {category.title}
                  </h3>

                  <span className="text-3xl transition group-hover:translate-x-2">
                    →
                  </span>

                </div>

                <p className="mt-3 text-zinc-500">
                  {category.subtitle}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}