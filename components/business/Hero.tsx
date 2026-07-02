import Image from "next/image";

type HeroProps = {
  business: {
    name: string;
    subtitle: string;
    hero: string;
  };
};

export default function Hero({ business }: HeroProps) {
  return (
    <section className="relative h-screen">
      <Image
        src={business.hero}
        alt={business.name}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-light tracking-[12px]">
          {business.name}
        </h1>

        <p className="mt-5 text-2xl text-gray-300">
          {business.subtitle}
        </p>
      </div>
    </section>
  );
}