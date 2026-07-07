"use client";

import ExploreMap from "../../components/explore/ExploreMap";
import Header from "../../components/explore/Header";
import SearchBar from "../../components/explore/SearchBar";
import Categories from "../../components/explore/Categories";
import BottomSheet from "../../components/explore/BottomSheet";
import BusinessPreview from "../../components/explore/BusinessPreview";

import { ExploreProvider } from "../../components/explore/ExploreContext";
import { LocationProvider } from "../../components/explore/LocationContext";

import MobileNav from "@/components/mobile/MobileNav";

export default function ExplorePage() {
  return (
    <LocationProvider>
      <ExploreProvider>
        <main className="relative h-screen overflow-hidden">
          <ExploreMap />

          <Header />

          <SearchBar />

          <Categories />

          <BusinessPreview />

          <BottomSheet />

          <MobileNav />
        </main>
      </ExploreProvider>
    </LocationProvider>
  );
}