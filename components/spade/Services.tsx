type Props = {
  business: {
    services?: {
      title: string;
      items: string[];
    }[];
  };
};

export default function Services({ business }: Props) {
  if (!business.services?.length) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-12 text-center text-5xl font-light">
          Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {business.services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-zinc-200 p-8"
            >
              <h3 className="mb-6 text-2xl font-semibold">
                {service.title}
              </h3>

              <ul className="space-y-3 text-zinc-600">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}