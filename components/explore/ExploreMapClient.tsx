"use client";

import "leaflet/dist/leaflet.css";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";

import { businesses } from "@/data/businesses";
import { useExplore } from "./ExploreContext";
import { createMarkerIcon } from "./createMarkerIcon";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function FlyToBusiness() {
  const map = useMap();
  const { selected } = useExplore();

  useEffect(() => {
    if (!selected) return;

    const business = businesses.find(
      (b) => b.slug === selected
    );

    if (!business?.coordinates) return;

    map.flyTo(
      [
        business.coordinates.lat,
        business.coordinates.lng,
      ],
      17,
      {
        animate: true,
        duration: 1.5,
      }
    );
  }, [selected, map]);

  return null;
}

function ClosePreviewOnMapClick() {
  const map = useMap();
  const { setActiveBusiness } = useExplore();

  useEffect(() => {
    const handleClick = () => {
      setActiveBusiness(null);
    };

    map.on("click", handleClick);

    return () => {
      map.off("click", handleClick);
    };
  }, [map, setActiveBusiness]);

  return null;
}

export default function ExploreMapClient() {
  const {
    search,
    category,
    setSelected,
    setActiveBusiness,
  } = useExplore();

  const filteredBusinesses = businesses.filter((business) => {
    if (!business.coordinates) return false;

    const value = search.toLowerCase();

    const matchesSearch =
      business.name.toLowerCase().includes(value) ||
      business.category.toLowerCase().includes(value) ||
      business.city.toLowerCase().includes(value);

    const matchesCategory =
      category === "all" ||
      business.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <MapContainer
      center={[37.9785, 22.9763]}
      zoom={15}
      scrollWheelZoom
      className="h-screen w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyToBusiness />

      <ClosePreviewOnMapClick />

      {filteredBusinesses.map((business) => (
        <Marker
          key={business.slug}
          position={[
            business.coordinates!.lat,
            business.coordinates!.lng,
          ]}
          icon={createMarkerIcon(
            business.logo || business.hero
          )}
          eventHandlers={{
            click: (e) => {
              e.originalEvent.stopPropagation();

              setSelected(business.slug);
              setActiveBusiness(business.slug);
            },
          }}
        >
          <Popup>
            <div className="min-w-[180px]">
              <h3 className="font-bold">
                {business.name}
              </h3>

              <p className="text-sm text-gray-500">
                {business.category}
              </p>

              <p className="mt-2 text-xs">
                {business.city}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
