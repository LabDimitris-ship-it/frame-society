"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type Location = {
  lat: number;
  lng: number;
};

type LocationContextType = {
  userLocation: Location | null;

  setUserLocation: (
    location: Location | null
  ) => void;
};

const LocationContext =
  createContext<LocationContextType>({
    userLocation: null,
    setUserLocation: () => {},
  });

export function LocationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userLocation, setUserLocation] =
    useState<Location | null>(null);

  return (
    <LocationContext.Provider
      value={{
        userLocation,
        setUserLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}