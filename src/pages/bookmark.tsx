import { EventCard } from "@/components/event-card";
import { Input } from "@/components/ui/input";

export default function Bookmark() {
  return (
    <div className="flex flex-grow flex-col gap-4">
      <Input type="text" placeholder="Search..." />
      <div className="flex flex-col gap-4">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
