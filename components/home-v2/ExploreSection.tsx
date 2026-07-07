"use client";

import Header from "@/components/explore/Header";
import SearchBar from "@/components/explore/SearchBar";
import Categories from "@/components/explore/Categories";
import ExploreMap from "@/components/explore/ExploreMap";
import BottomSheet from "@/components/explore/BottomSheet";
import BusinessPreview from "@/components/explore/BusinessPreview";
import { ExploreProvider } from "@/components/explore/ExploreContext";

export default function ExploreSection() {
  return (
    <section
      id="explore"
      className="relative bg-white"
    >
      <div className="w-full px-8 py-24 xl:px-12">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-black px-4 py-2 text-sm text-white">
            EXPLORE
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Discover Loutraki
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Search businesses, discover local experiences and
            explore the city through an interactive map.
          </p>

        </div>

<div className="overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,.18)]">
          <ExploreProvider>
<div className="relative h-[950px] xl:h-[1000px]">

              <ExploreMap />

              <Header />

              <SearchBar />

              <Categories />

              <BusinessPreview />

              <BottomSheet />

            </div>

          </ExploreProvider>

        </div>

      </div>
    </section>
  );
}