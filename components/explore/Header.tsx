export default function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 z-[1000] p-6">
      <div className="rounded-[36px] bg-black/70 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.35)]">

        <div className="flex items-start justify-between">

          <div className="max-w-md">

            <p className="text-[11px] uppercase tracking-[0.45em] text-white/50">
              FRAME SOCIETY
            </p>

            <h1 className="mt-3 text-5xl font-bold leading-none text-white">
              Explore
            </h1>

            <p className="mt-3 text-base text-white/70">
              📍 Loutraki
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Discover the best coffee shops, restaurants,
              beauty salons, barbers and local experiences.
            </p>

          </div>

          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white hover:text-black">
            ☰
          </button>

        </div>

      </div>
    </div>
  );
}