"use client";

import Image from "next/image";
import Link from "next/link";

import { businesses } from "@/data/businesses";
import { useExplore } from "./ExploreContext";

export default function BusinessPreview() {
  const { activeBusiness } = useExplore();

  if (!activeBusiness) return null;

  const business = businesses.find(
    (b) => b.slug === activeBusiness
  );

  if (!business) return null;

  return (
    <div className="absolute bottom-[31vh] left-1/2 z-[1200] w-[430px] max-w-[92vw] -translate-x-1/2 overflow-hidden rounded-[32px] bg-white shadow-[0_25px_70px_rgba(0,0,0,.25)] transition-all duration-300">

      <Image
        src={business.hero}
        alt={business.name}
        width={900}
        height={600}
        className="h-56 w-full object-cover"
      />

      <div className="space-y-5 p-6">

        <div className="flex items-center gap-2">
          <span className="text-xl text-yellow-500">
            ★★★★★
          </span>

          <span className="font-semibold text-gray-800">
            {business.rating?.toFixed(1) ?? "5.0"}
          </span>

          {business.reviews !== undefined && (
            <span className="text-sm text-gray-400">
              ({business.reviews} reviews)
            </span>
          )}
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {business.name}
          </h2>

          <p className="mt-1 text-gray-500">
            {business.subtitle}
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-600">

          {business.address && (
            <p>
              📍 {business.address}
            </p>
          )}

          {business.hours && (
            <p>
              🕒 Today: {business.hours.monday}
            </p>
          )}

          {business.phone && (
            <p>
              ☎️ {business.phone}
            </p>
          )}

        </div>

        <div className="grid grid-cols-2 gap-3">

          {business.phone && (
            <a
              href={`tel:${business.phone}`}
              className="rounded-2xl bg-gray-100 py-4 text-center font-semibold transition hover:bg-gray-200"
            >
              ☎️
              <br />
              Call
            </a>
          )}

          {business.instagram && (
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gray-100 py-4 text-center font-semibold transition hover:bg-gray-200"
            >
              📷
              <br />
              Instagram
            </a>
          )}

          {business.map && (
            <a
              href={business.map}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gray-100 py-4 text-center font-semibold transition hover:bg-gray-200"
            >
              📍
              <br />
              Directions
            </a>
          )}

          {business.booking && (
            <a
              href={business.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-black py-4 text-center font-semibold text-white transition hover:bg-gray-800"
            >
              ✂️
              <br />
              Book
            </a>
          )}

        </div>

        <Link
          href={
            business.category === "hair"
              ? `/hair/${business.slug}`
              : `/beauty/${business.slug}`
          }
          className="block rounded-2xl bg-black py-4 text-center text-lg font-semibold text-white transition hover:scale-[1.02]"
        >
          View Profile →
        </Link>

      </div>
    </div>
  );
}