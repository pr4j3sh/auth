import { EventCard } from "@/components/event-card";
import { Input } from "@/components/ui/input";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Placeholder } from "@/components/placeholder";

export default function Bookmark() {
  const events = useQuery(api.events.getBookmarkedEvents);
  return (
    <div className="flex flex-grow flex-col gap-4">
      <Input type="text" placeholder="Search..." />
      <div className="flex flex-col gap-4">
        {events?.length != 0 ? (
          events?.map((event) => <EventCard event={event} />)
        ) : (
          <Placeholder message={"No bookmarked events."} />
        )}
      </div>
    </div>
  );
}
