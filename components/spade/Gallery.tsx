"use client";

import Image from "next/image";

const images = [
  "/images/spade/gallery/1.png",
  "/images/spade/gallery/2.png",
  "/images/spade/gallery/3.png",
];

export default function Gallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <p className="tracking-[6px] uppercase text-[#b89b67]">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-light">
            Recent Work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {images.map((image) => (
            <div
              key={image}
              className="relative h-[500px] overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt="Spade Grooming"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}