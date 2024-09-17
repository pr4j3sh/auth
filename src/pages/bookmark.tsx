import { EventCard } from "@/components/event-card";
import { Input } from "@/components/ui/input";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Placeholder } from "@/components/placeholder";
import { useEffect, useState } from "react";
import { getCurrentLocation } from "@/lib/utils";

export default function Bookmark() {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  const user = useQuery(api.users.viewer);
  const events = useQuery(api.bookmarks.getBookmarkedEvents, {
    userId: user?._id,
  });

  console.log(events);

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
      <Input type="text" placeholder="Search..." />
      <div className="flex flex-col gap-4">
        {events?.length != 0 ? (
          events?.map((event) => <EventCard event={event} coords={coords} />)
        ) : (
          <Placeholder message={"No bookmarked events."} />
        )}
      </div>
    </div>
  );
}
