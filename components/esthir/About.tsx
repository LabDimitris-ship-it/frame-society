import { Business } from "@/data/businesses";

type Props = {
  business: Business;
};

export default function About({ business }: Props) {
  return (
    <section className="bg-[#F8F5EF] py-24">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-10 text-center text-5xl font-light text-black">
          About
        </h2>

        <p className="mx-auto max-w-3xl text-center text-lg leading-9 text-gray-700">
          {business.about ?? "More information coming soon."}
        </p>

      </div>
    </section>
  );
}