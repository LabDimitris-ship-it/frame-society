"use client";

import Link from "next/link";
import {
  Phone,
  MapPin,
  Calendar,
  Camera,
} from "lucide-react";
import { Business } from "@/data/businesses";

type Props = {
  business: Business;
};

export default function ActionButtons({ business }: Props) {
  return (
    <section className="bg-white px-5 py-6">
      <div className="grid grid-cols-2 gap-4">

        {business.phone && (
          <Link
            href={`tel:${business.phone}`}
            className="flex flex-col items-center justify-center rounded-3xl bg-zinc-100 py-6 transition hover:bg-zinc-200"
          >
            <Phone className="mb-2 h-7 w-7" />
            <span className="font-semibold">Call</span>
          </Link>
        )}

        {business.map && (
          <Link
            href={business.map}
            target="_blank"
            className="flex flex-col items-center justify-center rounded-3xl bg-zinc-100 py-6 transition hover:bg-zinc-200"
          >
            <MapPin className="mb-2 h-7 w-7" />
            <span className="font-semibold">Directions</span>
          </Link>
        )}

        {business.instagram && (
          <Link
            href={business.instagram}
            target="_blank"
            className="flex flex-col items-center justify-center rounded-3xl bg-zinc-100 py-6 transition hover:bg-zinc-200"
          >
          <Camera className="mb-2 h-7 w-7" />
            <span className="font-semibold">Instagram</span>
          </Link>
        )}

        {business.booking && (
          <Link
            href={business.booking}
            target="_blank"
            className="flex flex-col items-center justify-center rounded-3xl bg-black py-6 text-white transition hover:opacity-90"
          >
            <Calendar className="mb-2 h-7 w-7" />
            <span className="font-semibold">Book</span>
          </Link>
        )}

      </div>
    </section>
  );
}