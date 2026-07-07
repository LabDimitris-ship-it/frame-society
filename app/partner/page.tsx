export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <section className="mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <div className="mb-16 text-center">

          <span className="rounded-full bg-black px-5 py-2 text-sm uppercase tracking-[0.3em] text-white">
            FRAME SOCIETY
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            Γίνετε Συνεργάτης
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-500">
            Προβάλετε την επιχείρησή σας μέσα από το Frame Society και
            αποκτήστε μια σύγχρονη ψηφιακή παρουσία που θα σας φέρει πιο
            κοντά σε κατοίκους και επισκέπτες.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-8">

            <div className="rounded-3xl bg-black p-10 text-white shadow-xl">

              <h2 className="text-3xl font-bold">
                Γιατί να συνεργαστείτε μαζί μας;
              </h2>

              <p className="mt-5 text-white/70 leading-8">
                Δημιουργούμε ένα premium προφίλ για την επιχείρησή σας,
                με στόχο να ξεχωρίζει και να είναι εύκολα προσβάσιμη από
                όσους αναζητούν ποιοτικές επιλογές στην περιοχή τους.
              </p>

              <ul className="mt-10 space-y-5 text-lg">

                <li> Προβολή στον διαδραστικό χάρτη</li>

                <li>Premium προφίλ επιχείρησης</li>

                <li> Gallery φωτογραφιών υψηλής ποιότητας</li>

                <li> Κουμπιά άμεσης επικοινωνίας</li>

                <li>Προβολή υπηρεσιών & πληροφοριών</li>

                <li>Προώθηση σε κατοίκους και επισκέπτες</li>

                <li>Συμμετοχή σε μελλοντικές καμπάνιες & events</li>

              </ul>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="mb-8 text-3xl font-bold">
              Φόρμα Συνεργασίας
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Επωνυμία Επιχείρησης"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-black"
              />

              <input
                type="text"
                placeholder="Ονοματεπώνυμο Υπευθύνου"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-black"
              />

              <select className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-black">

                <option>Επιλέξτε Κατηγορία</option>

                <option>Καφέ</option>

                <option>Εστιατόριο</option>

                <option>Beach Bar</option>

                <option>Bar / Club</option>

                <option>Κέντρο Αισθητικής</option>

                <option>Κομμωτήριο</option>

                <option>Barber Shop</option>

                <option>Ξενοδοχείο</option>

                <option>Κατάστημα</option>

                <option>Άλλο</option>

              </select>

              <input
                type="text"
                placeholder="Πόλη"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-black"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-black"
              />

              <input
                type="tel"
                placeholder="Τηλέφωνο"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-black"
              />

              <input
                type="text"
                placeholder="Instagram"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-black"
              />

              <input
                type="text"
                placeholder="Ιστοσελίδα"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-black"
              />

              <textarea
                rows={5}
                placeholder="Πείτε μας λίγα λόγια για την επιχείρησή σας..."
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-black"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-black py-5 text-lg font-semibold text-white transition hover:bg-zinc-800"
              >
                Αποστολή Αίτησης
              </button>

            </form>

          </div>

        </div>

      </section>
    </main>
  );
}