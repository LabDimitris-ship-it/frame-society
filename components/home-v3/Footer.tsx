import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-24">

        <div className="grid gap-16 md:grid-cols-3">

          <div>
            <h2 className="text-4xl font-light tracking-tight">
              FRAME
              <br />
              SOCIETY
            </h2>

            <p className="mt-6 max-w-sm text-white/60 leading-7">
              Discover premium coffee shops, restaurants, beauty salons,
              beach clubs and unique experiences across Greece.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
              Explore
            </h3>

            <div className="space-y-3">
              <Link href="/coffee" className="block hover:text-[#B38B59]">Coffee</Link>
              <Link href="/food" className="block hover:text-[#B38B59]">Food</Link>
              <Link href="/hair" className="block hover:text-[#B38B59]">Hair</Link>
              <Link href="/beauty" className="block hover:text-[#B38B59]">Beauty</Link>
              <Link href="/nightlife" className="block hover:text-[#B38B59]">Nightlife</Link>
              <Link href="/beach" className="block hover:text-[#B38B59]">Beach</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
              Contact
            </h3>

            <div className="space-y-3 text-white/70">
              <p>Frame Society</p>
              <p>Loutraki, Greece</p>
              <p>framesociety@outlook.com</p>
              <p>@frame_society.gr</p>
            </div>
          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex items-center justify-between text-sm text-white/40">

          <p>© 2026 Frame Society. All rights reserved.</p>

          <p>Curated in Greece.</p>

        </div>

      </div>
    </footer>
  );
}