"use client";

import dynamic from "next/dynamic";

const ExploreMapClient = dynamic(
  () => import("./ExploreMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        Loading map...
      </div>
    ),
  }
);

export default function ExploreMap() {
  return <ExploreMapClient />;
}