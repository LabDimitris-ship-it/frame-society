"use client";

import { createContext, useContext, useState } from "react";

type ExploreContextType = {
  selected: string | null;
  setSelected: (slug: string | null) => void;

  activeBusiness: string | null;
  setActiveBusiness: (slug: string | null) => void;

  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  userLocation: {
    lat: number;
    lng: number;
  } | null;

  setUserLocation: (
    location: {
      lat: number;
      lng: number;
    } | null
  ) => void;
};

const ExploreContext = createContext<ExploreContextType>({
  selected: null,
  setSelected: () => {},

  activeBusiness: null,
  setActiveBusiness: () => {},

  search: "",
  setSearch: () => {},

  category: "all",
  setCategory: () => {},

  userLocation: null,
  setUserLocation: () => {},
});

export function ExploreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const [activeBusiness, setActiveBusiness] =
    useState<string | null>(null);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  return (
    <ExploreContext.Provider
      value={{
        selected,
        setSelected,

        activeBusiness,
        setActiveBusiness,

        search,
        setSearch,

        category,
        setCategory,

        userLocation,
        setUserLocation,
      }}
    >
      {children}
    </ExploreContext.Provider>
  );
}

export function useExplore() {
  return useContext(ExploreContext);
}