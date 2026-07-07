import Hero from "@/components/home-v2/Hero";
import Navbar from "@/components/home-v2/Navbar";
import ExploreSection from "@/components/home-v2/ExploreSection";
import FeaturedSection from "@/components/home-v2/FeaturedSection";
import CategoriesSection from "@/components/home-v2/CategoriesSection";
import PartnerSection from "../../components/home-v2/PartnerSection";
import EventsSection from "@/components/home-v2/EventsSection";
import MobileNav from "@/components/mobile/MobileNav";
export default function HomeV2() {
  return (
      <main className="bg-[#fafafa] pb-28">
  <Navbar />
  <Hero />
  <ExploreSection />
  <FeaturedSection />
  <CategoriesSection />
  <EventsSection />
  <PartnerSection />
   <MobileNav />
</main>
  );
}