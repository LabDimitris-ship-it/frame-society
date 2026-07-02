import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/images/hero.png"
        alt="Frame Society"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navigation */}
      <header className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-12 py-8">

        <h1 className="text-2xl tracking-[8px] text-white">
          FRAME SOCIETY
        </h1>

        <nav className="hidden gap-10 text-white lg:flex">

          <a href="#">Coffee</a>
          <a href="#">Food</a>
          <a href="#">Beach</a>
          <a href="#">Nightlife</a>
          <a href="#">Beauty</a>
          <a href="#">Events</a>

        </nav>

      </header>

      {/* Hero */}
      <section className="relative z-10 flex h-screen flex-col items-center justify-center text-center">

        <h2 className="text-7xl font-light tracking-[18px] text-white">
          Discover Beautiful Places
        </h2>

        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Coffee • Restaurants • Beach Bars • Beauty • Hair • Shisha • Nightlife
        </p>

        <button className="mt-10 rounded-full border border-white px-10 py-4 text-white transition hover:bg-white hover:text-black">
          Explore Places
        </button>

      </section>
     {/* Categories */}

<section className="relative z-10 bg-black py-24 px-10">

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

  {/* Coffee */}
  <div className="group overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer">
    <img
      src="/images/coffee.png"
      alt="Coffee"
      className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
    />
    <div className="p-8">
      <h3 className="text-3xl text-white">Coffee</h3>
      <p className="mt-2 text-gray-400">Specialty Coffee • Brunch • Bakery</p>
    </div>
  </div>

  {/* Food */}
  <div className="group overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer">
    <img
      src="/images/food.png"
      alt="Food"
      className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
    />
    <div className="p-8">
      <h3 className="text-3xl text-white">Food</h3>
      <p className="mt-2 text-gray-400">Restaurants • Fine Dining • Street Food</p>
    </div>
  </div>

  {/* Beach */}
  <div className="group overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer">
    <img
      src="/images/beach.png"
      alt="Beach"
      className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
    />
    <div className="p-8">
      <h3 className="text-3xl text-white">Beach</h3>
      <p className="mt-2 text-gray-400">Beach Bars • Resorts • Summer Life</p>
    </div>
  </div>

  {/* Nightlife */}
  <div className="group overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer">
    <img
      src="/images/nightlife.png"
      alt="Nightlife"
      className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
    />
    <div className="p-8">
      <h3 className="text-3xl text-white">Nightlife</h3>
      <p className="mt-2 text-gray-400">Bars • Clubs • Live Music</p>
    </div>
  </div>

  {/* Beauty */}

<Link href="/beauty/esthir">
  <div className="group overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer transition duration-500 hover:-translate-y-2">

    <img
      src="/images/beauty.png"
      alt="Beauty"
      className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="p-8">
      <h3 className="text-3xl text-white">Beauty</h3>
      <p className="mt-2 text-gray-400">
        Spa • Nails • Aesthetics
      </p>
    </div>

  </div>
</Link>

  {/* Hair */}
  <div className="group overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer">
    <img
      src="/images/hair.png"
      alt="Hair"
      className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
    />
    <div className="p-8">
      <h3 className="text-3xl text-white"> Hair</h3>
      <p className="mt-2 text-gray-400">Hair Salons • Barber Shops</p>
    </div>
  </div>

  {/* Shisha */}
  <div className="group overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer lg:col-span-3">
    <img
      src="/images/shisha.png"
      alt="Shisha Lounges"
      className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
    />
    <div className="p-8">
      <h3 className="text-4xl text-white">Shisha Lounges</h3>
      <p className="mt-2 text-gray-400">
        Premium Hookah • Cocktails • Lounge Experience
      </p>
    </div>
  </div>

</div>
</section>
    </main>
  );
}