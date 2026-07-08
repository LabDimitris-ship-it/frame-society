"use client";

import HeroMobile from "./HeroMobile";
import SearchCard from "./SearchCard";
import CategorySlider from "./CategorySlider";
import TrendingSlider from "./TrendingSlider";


export default function HomeMobile() {
  return (
    <main className="min-h-screen bg-[#F6F6F3] pb-44">
      <HeroMobile />

      <SearchCard />

      <CategorySlider />
      <TrendingSlider />
      
    </main>
  );
}