export default function Services() {
  return (
    <section className="bg-[#f7f2ec] py-24 px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="tracking-[6px] uppercase text-[#b89b67]">
            Our Services
          </p>

          <h2 className="mt-4 text-5xl font-light text-zinc-900">
            Beauty Treatments
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600">
            Κάθε θεραπεία είναι σχεδιασμένη ώστε να αναδεικνύει τη φυσική σας
            ομορφιά με επαγγελματισμό και σύγχρονες τεχνικές.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            title="Facial Treatments"
            items={[
              "Βαθύς Καθαρισμός",
              "Μεσοθεραπεία",
              "Δερμοαπόξεση με Διαμάντι",
              "Υδρογονοθεραπεία",
              "Φυτικό Peeling",
              "RF Ραδιοσυχνότητες",
            ]}
          />

          <ServiceCard
            title=" Body Treatments"
            items={[
              "RF Ραδιοσυχνότητες",
              "Πρεσσοθεραπεία",
              "Θερμοκουβέρτα",
              "Μασάζ Κυτταρίτιδας",
            ]}
          />

          <ServiceCard
            title="Massage"
            items={[
              "Χαλαρωτικό",
              "Deep Tissue",
              "Gua Sha",
            ]}
          />

          <ServiceCard
            title="Make Up"
            items={[
              "Καθημερινό",
              "Βραδινό",
              "Νυφικό",
            ]}
          />

          <ServiceCard
            title="Hair Removal"
            items={[
              "Πρόσωπο",
              "Σώμα",
              "Κερί",
              "Ριζική",
              "Laser",
            ]}
          />

        </div>

      </div>
    </section>
  );
}

function ServiceCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <h3 className="mb-6 text-2xl font-semibold text-zinc-900">
        {title}
      </h3>

      <ul className="space-y-3 text-zinc-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

    </div>
  );
}