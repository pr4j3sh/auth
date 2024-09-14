import { EventCard } from "@/components/event-card";
import HeaderMenu from "@/components/header-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col gap-4">
      <HeaderMenu />
      <Input type="text" placeholder="Search..." />
      <div className="snap-x scroll-auto flex gap-2 py-2 overflow-x-auto">
        <Badge className="scroll-mx-0.5 snap-start">Music</Badge>
        <Badge className="scroll-mx-0.5 snap-start">Food</Badge>
        <Badge className="scroll-mx-0.5 snap-start">Technology</Badge>
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Events
      </h1>
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
