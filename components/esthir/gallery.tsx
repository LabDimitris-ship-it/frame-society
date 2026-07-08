"use client";

import { useState } from "react";
import Image from "next/image";
import { Business } from "@/data/businesses";

type Props = {
  business: Business;
};

export default function Gallery({ business }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const images = business.gallery ?? [];

  if (images.length === 0) return null;

  return (
    <>
      <section className="bg-[#F8F5EF] py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">
            <p className="tracking-[6px] uppercase text-[#b89b67]">
              Gallery
            </p>

            <h2 className="mt-4 text-5xl font-light text-zinc-900">
              {business.name}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => setSelected(index)}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="relative h-80">
                  <Image
                    src={image}
                    alt={business.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {selected !== null && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95">

          <button
            onClick={() => setSelected(null)}
            className="absolute right-8 top-8 text-5xl text-white"
          >
            ×
          </button>

          <div className="relative h-[85vh] w-[90vw] max-w-6xl">

            <Image
              src={images[selected]}
              alt={business.name}
              fill
              className="object-contain"
            />

          </div>

        </div>
      )}
    </>
  );
}