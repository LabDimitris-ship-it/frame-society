"use client";

import Link from "next/link";

const events = [
  {
    title: "Βραδιά Οίνου",
    place: "ΚΕΠ Κορίνθου",
    date: "Σάββατο • 4 Ιουλίου",
    image: "/images/events/wine.webp",
  },
];

export default function EventsSection() {
  return (
    <section className="bg-[#fafafa] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex items-end justify-between">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Frame Society
            </p>

            <h2 className="mt-3 text-5xl font-bold">
              Upcoming Events
            </h2>
          </div>

          <Link
            href="/events"
            className="font-semibold"
          >
            View All →
          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-[30px] bg-white shadow-lg transition duration-300 hover:-translate-y-2"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <span className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  {event.date}
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  {event.title}
                </h3>

                <p className="mt-3 text-gray-500">
                  {event.place}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}