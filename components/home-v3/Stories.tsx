import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "The Art of Modern Grooming",
    tag: "Barber Guide",
    business: "Spade Grooming • Loutraki",
    image: "/images/stories/spade.jpg",
    href: "/hair/spade-grooming",
    large: true,
  },
  {
    title: "Beauty, Elevated",
    tag: "Beauty",
    business: "Esthir • Loutraki",
    image: "/images/stories/esthir.jpg",
    href: "/beauty/esthir",
  },
  {
    title: "Cocktails After Sunset",
    tag: "Nightlife",
    business: " • Loutraki",
    image: "/images/stories/coralle.jpg",
    href: "/nightlife/coralle",
  }, 
];

export default function Stories() {
  return (
    <section className="bg-[#0d0d0d] py-32">
      <div className="mx-auto max-w-[1500px] px-8">

        <div className="mb-20 flex items-end justify-between">

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#B38B59]">
              Frame Society Journal
            </p>

            <h2 className="mt-6 text-7xl font-light leading-[0.95] text-white">
              Discover
              <br />
              The Stories
              <br />
              Behind Every Place
            </h2>
          </div>

          <Link
            href="/journal"
            className="text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white"
          >
            View All →
          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">

          {stories.map((story) => (

            <Link
              key={story.title}
              href={story.href}
              className="group relative overflow-hidden rounded-[34px]"
            >

              <div
                className={`relative ${
                  story.large ? "h-[720px]" : "h-[620px]"
                }`}
              >

                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-10 left-10">

                  <span className="rounded-full border border-[#B38B59] px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#B38B59]">
                    {story.tag}
                  </span>

                  <p className="mt-8 text-xs uppercase tracking-[0.35em] text-white/60">
                    {story.business}
                  </p>

                  <h3 className="mt-3 max-w-md text-5xl font-light leading-tight text-white">
                    {story.title}
                  </h3>

                  <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/80 group-hover:text-[#B38B59]">
                    Read Story →
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