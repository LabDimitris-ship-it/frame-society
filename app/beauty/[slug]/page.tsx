import { businesses } from "@/data/businesses";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const business = businesses.find(
    (b) => b.slug === slug && b.category === "beauty"
  );

  if (!business) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: business.name,

    description: business.subtitle,

    openGraph: {
      title: business.name,
      description: business.subtitle,
      images: [business.hero],
    },
  };
}

import Hero from "@/components/business/Hero";
import About from "@/components/esthir/About";
import Services from "@/components/esthir/Services";
import Booking from "@/components/esthir/Booking";
import Gallery from "@/components/esthir/gallery";
import Map from "@/components/esthir/Map";
import Contact from "@/components/esthir/Contact";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;

  const business = businesses.find(
    (b) =>
      b.slug === slug &&
      b.category === "beauty"
  );

  if (!business) {
    notFound();
  }

  return (
    <main className="bg-black text-white">

      <Hero business={business} />

     <About business={business} />

      <Services />

      <Booking />

      <Gallery business={business} />

      <Map />

      <Contact />

    </main>
  );
}