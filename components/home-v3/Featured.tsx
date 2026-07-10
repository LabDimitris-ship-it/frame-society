import Image from "next/image";
import Link from "next/link";

const places = [
  {
    title: "Spade Grooming",
    category: "Hair",
    city: "Loutraki",
    image: "/images/spade/featured.png",
    href: "/hair/spade-grooming",
  },
  {
    title: "Esthir",
    category: "Beauty",
    city: "Loutraki",
    image: "/images/esthir/featured1.png",
    href: "/beauty/esthir",
  },
];

export default function Featured() {
  return (
    <section className="bg-[#faf8f5] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#B38B59]">
              Featured Places
            </p>

            <h2 className="mt-4 text-7xl font-light leading-[0.95] tracking-tight">
              Handpicked
              <br />
              Just for You
            </h2>
          </div>

          <Link
            href="/explore"
            className="text-sm uppercase tracking-[0.25em] transition hover:text-[#B38B59]"
          >
            VIEW ALL →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {places.map((place) => (
            <Link
              key={place.title}
              href={place.href}
              className="group"
            >
              <div className="relative h-[520px] overflow-hidden rounded-[30px]">
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/80">
                    {place.category}
                  </p>

                  <h3 className="mt-3 text-4xl font-light text-white">
                    {place.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-white/80">
                    <span>{place.city}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}