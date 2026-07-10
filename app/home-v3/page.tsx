import Navbar from "@/components/home-v3/Navbar";
import Hero from "@/components/home-v3/Hero";
import Featured from "@/components/home-v3/Featured";
import Categories from "@/components/home-v3/Categories";
import Map from "@/components/home-v3/Map";
import Stories from "@/components/home-v3/Stories";
import Footer from "@/components/home-v3/Footer";

export default function HomeV3() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Featured />
      <Categories />
      <Map />
      <Stories />
      <Footer />
    </main>
  );
}