"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/spade/gallery/1.png",
  "/images/spade/gallery/2.png",
  "/images/spade/gallery/3.png",
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
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

          {/* Header */}

          <div className="mb-20 text-center">

            <p className="text-sm tracking-[10px] uppercase text-[#B38B59]">
              PORTFOLIO
            </p>

            <h2 className="mt-4 text-5xl font-light text-zinc-900 md:text-7xl">
              Signature Cuts
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500">
              Precision fades, modern styling and clean finishes.
              Every haircut reflects the attention to detail that defines
              Spade Grooming.
            </p>

          </div>

          {/* Hero */}

          <button
            onClick={() => setSelected(0)}
            className="group relative mb-8 block w-full overflow-hidden rounded-[36px]"
          >
            <div className="relative h-[520px] md:h-[820px]">

              <Image
                src={images[0]}
                alt="Spade Grooming"
                fill
                sizes="100vw"
                className="
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                  group-hover:brightness-110
                "
              />

              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

            </div>
          </button>

          {/* Grid */}

          <div className="grid gap-6 lg:grid-cols-2">

            {images.slice(1).map((img, index) => (

              <button
                key={img}
                onClick={() => setSelected(index + 1)}
                className="group overflow-hidden rounded-[36px]"
              >

                <div className="relative h-[760px]">

                  <Image
                    src={img}
                    alt="Spade Grooming"
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-105
                      group-hover:brightness-110
                    "
                  />

                  <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

                </div>

              </button>

            ))}

          </div>

        </div>
      </section>

      {/* Lightbox */}

      {selected !== null && (

        <div className="fixed inset-0 z-[9999] bg-black/95">

          <button
            onClick={() => setSelected(null)}
            className="absolute right-8 top-8 z-50 text-6xl font-light text-white hover:text-[#B38B59]"
          >
            ×
          </button>

          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-6xl text-white hover:text-[#B38B59]"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-6xl text-white hover:text-[#B38B59]"
          >
            ›
          </button>

          <div className="relative mx-auto h-screen w-[94vw] max-w-7xl">

            <Image
              src={images[selected]}
              alt=""
              fill
              sizes="100vw"
              className="object-contain"
            />

          </div>

        </div>

      )}
    </>
  );
}