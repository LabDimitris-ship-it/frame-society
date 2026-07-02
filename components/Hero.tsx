export default function Hero() {
  return (
    <section className="relative h-screen bg-black flex items-center justify-center">

      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-40" />

      <div className="relative z-10 text-center px-6">

        <p className="uppercase tracking-[0.6em] text-zinc-400">
          Premium Lifestyle Guide
        </p>

        <h1 className="text-7xl md:text-9xl font-light mt-6 tracking-[0.25em]">
          FRAME
          <br />
          SOCIETY
        </h1>

        <p className="mt-10 max-w-xl mx-auto text-zinc-300">
          Discover exceptional places, unforgettable experiences and
          premium brands.
        </p>

      </div>

    </section>
  );
}