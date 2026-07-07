import L from "leaflet";

export function createMarkerIcon(image: string) {
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width:54px;
        height:54px;
        border-radius:50%;
        background:white;
        border:3px solid white;
box-shadow:0 8px 20px rgba(0,0,0,.25);        overflow:hidden;
      ">
        <img
          src="${image}"
          style="
            width:100%;
            height:100%;
            object-fit:cover;
          "
        />
      </div>
    `,
    iconSize: [54, 54],
    iconAnchor: [27, 27],
  });
}