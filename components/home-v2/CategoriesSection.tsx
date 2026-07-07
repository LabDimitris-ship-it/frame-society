"use client";

const categories = [
  {
    emoji: "☕",
    title: "Coffee",
    subtitle: "Specialty Coffee & Brunch",
  },
  {
    emoji: "🍽️",
    title: "Food",
    subtitle: "Restaurants & Fine Dining",
  },
  {
    emoji: "💇",
    title: "Hair",
    subtitle: "Barbers & Hair Salons",
  },
  {
    emoji: "💄",
    title: "Beauty",
    subtitle: "Spa • Nails • Aesthetics",
  },
  {
    emoji: "🍸",
    title: "Nightlife",
    subtitle: "Bars & Cocktails",
  },
  {
    emoji: "🏖️",
    title: "Beach",
    subtitle: "Beach Bars & Resorts",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="rounded-full bg-black px-4 py-2 text-sm text-white">
            CATEGORIES
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Explore by Category
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Find the experience you're looking for.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-[32px] border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-5xl">
                {category.emoji}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {category.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {category.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}