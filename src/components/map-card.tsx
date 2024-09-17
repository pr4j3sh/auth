import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "./ui/separator";
import moment from "moment";
import { useEffect, useState } from "react";
import { calculateDistance, calculateTravelTime } from "@/lib/utils";
import { Event, Coords } from "@/lib/types";

export function MapCard({
  event,
  coords,
  onCardClick,
}: {
  event: Event;
  coords: Coords;
  onCardClick: VoidFunction;
}) {
  const [distance, setDistance] = useState<string>("");
  const [travelTime, setTravelTime] = useState<string>("");

  const averageSpeed = 60; // Average speed in km/h

  useEffect(() => {
    async function fetchLocationAndData() {
      try {
        const distance = calculateDistance(
          coords?.lat,
          coords?.lon,
          parseFloat(event?.lat),
          parseFloat(event?.lon),
        );
        setDistance(distance.toString());

        const time = calculateTravelTime(distance.toString(), averageSpeed);
        setTravelTime(time);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLocationAndData();
  }, [coords?.lat, coords?.lon, event?.lat, event?.lon]);
  return (
    <Card onClick={onCardClick} className="w-80 shrink-0 snap-center">
      <CardHeader>
        <div className="flex flex-col items-start gap-2">
          <Badge variant="secondary">Technology</Badge>
          <CardTitle>{event?.title}</CardTitle>
        </div>
        <CardDescription className="flex h-5 items-center space-x-2">
          <span>{moment(event?.date).format("ddd, MMM Do, YYYY")}</span>
          <Separator orientation="vertical" />
          <span>
            {moment(event?.timeFrom, "HH:mm").format("hh:mm a")} -{" "}
            {moment(event?.timeTo, "HH:mm").format("hh:mm a")}
          </span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div className="flex h-5 items-center space-x-2 text-sm text-muted-foreground">
          <span>{distance} km away</span>
          <Separator orientation="vertical" />
          <span>{travelTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
