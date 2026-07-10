import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Coffee",
    subtitle: "Specialty Coffee",
    image: "/images/categories/coffee.png",
    href: "/coffee",
  },
  {
    title: "Food",
    subtitle: "Restaurants",
    image: "/images/categories/food.png",
    href: "/food",
  },
  {
    title: "Hair",
    subtitle: "Barbers",
    image: "/images/categories/hair.png",
    href: "/hair",
  },
  {
    title: "Beauty",
    subtitle: "Aesthetics",
    image: "/images/categories/beauty.png",
    href: "/beauty",
  },
  {
    title: "Nightlife",
    subtitle: "Bars & Cocktails",
    image: "/images/categories/nightlife.png",
    href: "/nightlife",
  },
  {
    title: "Beach",
    subtitle: "Beach Clubs",
    image: "/images/categories/beach.png",
    href: "/beach",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B38B59]">
            Explore by Category
          </p>

          <h2 className="mt-4 text-6xl font-light">
            Find Your
            <br />
            Next Experience
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group"
            >
              <div className="relative h-[420px] overflow-hidden rounded-[28px]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <h3 className="text-4xl font-light text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-white/80">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}