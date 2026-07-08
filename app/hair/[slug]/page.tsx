import { businesses } from "@/data/businesses";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Hero from "@/components/business/Hero";
import About from "@/components/esthir/About";
import ActionButtons from "@/components/business/ActionButtons";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const business = businesses.find(
    (b) => b.slug === slug && b.category === "hair"
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

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;

  const business = businesses.find(
    (b) => b.slug === slug && b.category === "hair"
  );

  if (!business) {
    notFound();
  }

return (
  <main className="bg-white">

    <Hero business={business} />

    <ActionButtons business={business} />

    <About business={business} />

  </main>
);
}