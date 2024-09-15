import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapCard } from "@/components/map-card";

export default function Map() {
  return (
    <div className="relative w-full flex flex-grow flex-col rounded-md overflow-hidden">
      <MapContainer
        className="w-full z-0"
        style={{ height: "calc(100vh - 76px)" }}
        center={[27.364068, 79.626092]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[27.364068, 79.626092]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="w-full absolute bottom-0 flex overflow-x-auto snap-x p-2 gap-2">
        <MapCard />
        <MapCard />
        <MapCard />
        <MapCard />
        <MapCard />
        <MapCard />
        <MapCard />
        <MapCard />
        <MapCard />
      </div>
    </div>
  );
}
