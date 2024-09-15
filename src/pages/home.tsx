import { EventCard } from "@/components/event-card";
import HeaderMenu from "@/components/header-menu";
import { Input } from "@/components/ui/input";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Category from "@/components/category";
import { useEffect, useState } from "react";
import { getCurrentLocation } from "@/lib/utils";

export default function Home() {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  const categories = useQuery(api.events.getCategories);
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
      } catch (error) {
        console.error(error);
      }
    }

    fetchLocation();
  }, []);

  return (
    <div className="flex flex-grow flex-col gap-4">
      <HeaderMenu />
      <Input type="text" placeholder="Search..." />
      <div className="snap-x scroll-auto flex gap-2 py-2 overflow-x-auto">
        {categories?.map((category) => <Category category={category} />)}
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Events
      </h1>
      <div className="flex flex-col gap-4">
        {events?.map((event) => <EventCard event={event} coords={coords} />)}
      </div>
    </div>
  );
}
