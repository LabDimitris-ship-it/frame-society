"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/esthir/gallery/1.jpg",
  "/images/esthir/gallery/2.jpg",
  "/images/esthir/gallery/3.jpg",
  "/images/esthir/gallery/4.jpg",
  "/images/esthir/gallery/5.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % images.length);
  };

  const prev = () => {
    if (selected === null) return;
    setSelected((selected - 1 + images.length) % images.length);
  };

  return (
    <>
      <section className="bg-[#F8F5EF] py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">
            <p className="tracking-[6px] uppercase text-[#b89b67]">
              Gallery
            </p>

            <h2 className="mt-4 text-5xl font-light text-zinc-900">
              Our Beauty Studio
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {images.map((img, index) => (
              <button
                key={img}
                onClick={() => setSelected(index)}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="relative h-80">

                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

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

          <button
            onClick={prev}
            className="absolute left-8 text-5xl text-white"
          >
            ←
          </button>

          <div className="relative h-[85vh] w-[90vw] max-w-6xl">

            <Image
              src={images[selected]}
              alt=""
              fill
              className="object-contain"
            />

          </div>

          <button
            onClick={next}
            className="absolute right-8 text-5xl text-white"
          >
            →
          </button>

        </div>
      )}
    </>
  );
}