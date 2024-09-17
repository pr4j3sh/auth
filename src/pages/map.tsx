import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapCard } from "@/components/map-card";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useRef, useState } from "react";
import { getCurrentLocation } from "@/lib/utils";
import { Map as LeafletMap } from "leaflet";

export default function Map() {
  const mapRef = useRef<LeafletMap>(null);
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const [mapReady, setMapReady] = useState(false);

  const events = useQuery(api.events.get, {
    currentLat: coords.lat,
    currentLon: coords.lon,
  });

  useEffect(() => {
    async function fetchLocation() {
      try {
        const currentPosition = await getCurrentLocation();
        setCoords({
          lat: currentPosition.coords.latitude,
          lon: currentPosition.coords.longitude,
        });
        setMapReady(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLocation();
  }, []);

  function LocationMarker() {
    const map = useMapEvents({
      locationfound(e) {
        map.flyTo(e.latlng, 13);
      },
    });

    useEffect(() => {
      if (mapReady && events?.length) {
        map?.flyTo([parseFloat(events[0].lat), parseFloat(events[0].lon)], 13);
      }
    }, [map]);

    return null;
  }

  const flyToEventLocation = (lat: number, lon: number) => {
    if (mapRef.current) {
      mapRef?.current?.flyTo([lat, lon], 13); // Fly to the event's coordinates
    }
  };

  return (
    <div className="relative w-full flex flex-grow flex-col rounded-md overflow-hidden">
      <MapContainer
        className="w-full z-0"
        style={{ height: "calc(100vh - 76px)" }}
        center={[coords.lat, coords.lon]}
        zoom={13}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapReady && <LocationMarker />}
        {events?.map((event) => (
          <Marker position={[parseFloat(event.lat), parseFloat(event.lon)]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="w-full absolute bottom-0 flex overflow-x-auto snap-x p-2 gap-2">
        {events?.map((event) => (
          <MapCard
            event={event}
            coords={coords}
            onCardClick={() =>
              flyToEventLocation(parseFloat(event.lat), parseFloat(event.lon))
            }
          />
        ))}
      </div>
    </div>
  );
}
