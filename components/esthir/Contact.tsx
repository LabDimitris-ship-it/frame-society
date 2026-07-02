export default function Contact() {
  return (
    <section className="bg-[#111111] py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">
          <p className="uppercase tracking-[6px] text-[#C9A76A]">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-light text-white">
            Get In Touch
          </h2>

          <p className="mt-6 text-zinc-400">
            Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες ή για να κλείσετε το επόμενο ραντεβού σας.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Address */}
          <div className="rounded-[28px] border border-zinc-800 bg-[#1A1A1A] p-8 text-center transition hover:-translate-y-2 hover:border-[#C9A76A]">

            <div className="mb-5 text-5xl">📍</div>

            <h3 className="text-2xl text-white">
              Address
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              Υψηλάντου 24
              <br />
              & Περίανδρου Γωνία
              <br />
              Λουτράκι 20300
            </p>

          </div>

          {/* Phone */}
          <div className="rounded-[28px] border border-zinc-800 bg-[#1A1A1A] p-8 text-center transition hover:-translate-y-2 hover:border-[#C9A76A]">

            <div className="mb-5 text-5xl">📞</div>

            <h3 className="text-2xl text-white">
              Phone
            </h3>

            <a
              href="tel:+306946136886"
              className="mt-5 block text-lg text-[#C9A76A] hover:underline"
            >
              694 613 6886
            </a>

          </div>

          {/* Email */}
          <div className="rounded-[28px] border border-zinc-800 bg-[#1A1A1A] p-8 text-center transition hover:-translate-y-2 hover:border-[#C9A76A]">

            <div className="mb-5 text-5xl">✉️</div>

            <h3 className="text-2xl text-white">
              Email
            </h3>

            <a
              href="mailto:magdakonti@hotmail.com"
              className="mt-5 block break-all text-[#C9A76A] hover:underline"
            >
              magdakonti@hotmail.com
            </a>

          </div>

          {/* Social */}
          <div className="rounded-[28px] border border-zinc-800 bg-[#1A1A1A] p-8 text-center transition hover:-translate-y-2 hover:border-[#C9A76A]">

            <div className="mb-5 text-5xl">🌐</div>

            <h3 className="text-2xl text-white">
              Follow Us
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <a
                href="https://www.instagram.com/magda_konti/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 px-6 py-3 text-white transition hover:scale-105"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100063706924391"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 px-6 py-3 text-white transition hover:scale-105"
              >
                Facebook
              </a>

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-zinc-800 pt-8 text-center">

          <h3 className="text-3xl font-light text-white">
            ΕΣΘΗΡ
          </h3>

          <p className="mt-2 text-zinc-500">
            Άγγιγμα Ομορφιάς
          </p>

          <p className="mt-6 text-sm tracking-[4px] text-[#C9A76A]">
            DESIGNED & POWERED BY FRAME SOCIETY
          </p>

        </div>

      </div>
    </section>
  );
}