import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-black text-white">
      {/* Background */}
      <div
       className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-[8000]"
        style={{
         backgroundImage: "url('/images/home/hero1.png')",
        }}
      />

      {/* Overlay */}
     {/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
        <span className="mb-6 inline-block rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.35em]">
          Curated Guide
        </span>

        <h1 className="max-w-4xl text-6xl font-light leading-tight md:text-8xl">
          Discover
          <br />
          Greece's Finest
          <br />
          Places.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
          A carefully curated collection of premium cafés, restaurants,
          beach clubs, beauty salons and lifestyle destinations.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/explore"
            className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:scale-105"
          >
            Explore Places
          </Link>

          <Link
            href="/partner"
            className="rounded-full border border-white/30 px-8 py-4 text-sm transition hover:bg-white hover:text-black"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-12 w-7 rounded-full border border-white/40 p-1">
          <div className="mx-auto h-2 w-2 animate-bounce rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}