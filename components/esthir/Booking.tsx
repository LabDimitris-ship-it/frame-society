export default function Booking() {
  return (
    <section className="bg-[#111111] py-28">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[#C9A76A]/20 bg-[#1b1b1b] px-10 py-20 text-center shadow-2xl">

        <p className="uppercase tracking-[6px] text-[#C9A76A]">
          BOOK YOUR APPOINTMENT
        </p>

        <h2 className="mt-5 text-5xl font-light text-white">
          Ready for your Beauty Experience?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Χαρίστε στον εαυτό σας την περιποίηση που του αξίζει.
          Επικοινωνήστε μαζί μας και κλείστε το επόμενο ραντεβού σας.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row">

          <a
            href="https://www.instagram.com/magda_konti/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#C9A76A] px-8 py-4 font-medium text-black transition hover:scale-105"
          >
            Instagram
          </a>

          <a
            href="tel:+306900000000"
            className="rounded-full border border-[#C9A76A] px-8 py-4 text-white transition hover:bg-[#C9A76A] hover:text-black"
          >
            📞 Call Now
          </a>

        </div>

      </div>
    </section>
  );
}