"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Star } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  city: string;
  rating: number;
};

export default function BusinessCardMobile({
  title,
  subtitle,
  image,
  href,
  city,
  rating,
}: Props) {
  return (
    <Link
      href={href}
      className="min-w-[280px] overflow-hidden rounded-[28px] bg-white shadow-xl"
    >
      <div className="relative h-52">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur">
          <Heart size={18} />
        </button>

      </div>

      <div className="p-5">

        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium">
          {subtitle}
        </span>

        <h3 className="mt-3 text-xl font-bold">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-1">

          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-semibold">
            {rating}
          </span>

        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">

          <MapPin size={15} />

          {city}

        </div>

      </div>
    </Link>
  );
}