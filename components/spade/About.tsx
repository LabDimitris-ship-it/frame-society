type Props = {
  business: {
    about?: string;
  };
};

export default function About({ business }: Props) {
  if (!business.about) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">

        <p className="tracking-[6px] uppercase text-[#b89b67]">
          About
        </p>

        <h2 className="mt-4 text-5xl font-light text-zinc-900">
          More than a haircut.
        </h2>

        <p className="mt-8 text-lg leading-9 text-zinc-600">
          {business.about}
        </p>

      </div>
    </section>
  );
}