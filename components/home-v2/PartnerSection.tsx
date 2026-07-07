"use client";

import Link from "next/link";

export default function PartnerSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950" />

      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">

          <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-white/80">
            FRAME SOCIETY
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Έχετε Επιχείρηση;
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            Γίνετε μέλος του Frame Society και παρουσιάστε την επιχείρησή
            σας μέσα από μια σύγχρονη πλατφόρμα που ανακαλύπτουν καθημερινά
            κάτοικοι και επισκέπτες.
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/partner"
            className="rounded-full bg-white px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
          >
            Γίνετε Συνεργάτης
          </Link>

          <Link
            href="/explore"
            className="rounded-full border border-white/20 px-10 py-5 text-lg font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            Ανακάλυψε Επιχειρήσεις
          </Link>
<div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
    <h3 className="text-5xl font-bold text-white">
      2+
    </h3>

    <p className="mt-3 text-gray-400">
      Premium Επιχειρήσεις
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
    <h3 className="text-5xl font-bold text-white">
      6
    </h3>

    <p className="mt-3 text-gray-400">
      Κατηγορίες
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
    <h3 className="text-5xl font-bold text-white">
      1
    </h3>

    <p className="mt-3 text-gray-400">
      Πόλη
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
    <h3 className="text-5xl font-bold text-white">
      100%
    </h3>

    <p className="mt-3 text-gray-400">
      Επιλεγμένες Επιχειρήσεις
    </p>
  </div>

</div>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-5 text-5xl">
              📍
            </div>

            <h3 className="text-2xl font-bold text-white">
              Μεγαλύτερη Προβολή
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              Η επιχείρησή σας εμφανίζεται στον διαδραστικό χάρτη και στις
              κορυφαίες προτάσεις του Frame Society.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-5 text-5xl">
              ⭐
            </div>

            <h3 className="text-2xl font-bold text-white">
              Premium Προφίλ
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              Φωτογραφίες, υπηρεσίες, στοιχεία επικοινωνίας, social media
              και όλες οι πληροφορίες της επιχείρησής σας.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-5 text-5xl">
              🚀
            </div>

            <h3 className="text-2xl font-bold text-white">
              Ανάπτυξη
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              Προσεγγίστε νέους πελάτες και γίνετε μέρος μιας κοινότητας
              με τις καλύτερες επιχειρήσεις της περιοχής.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}