import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import SampleEvent from "../assets/sample-event.jpg";
import { Separator } from "./ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import { calculateDistance, calculateTravelTime } from "@/lib/utils";
import { Event, Coords } from "@/lib/types";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function EventCard({ event, coords }: { event: Event; coords: Coords }) {
  const chat = useQuery(api.chatrooms.getChatroom, {
    eventId: event?._id,
  });
  const [distance, setDistance] = useState<string>("");
  const [travelTime, setTravelTime] = useState<string>("");
  const [firstTwoUsers, setFirstTwoUsers] = useState([]);
  const [remainingCount, setRemainingCount] = useState(0);

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

  useEffect(() => {
    if (chat?.users) {
      const slicedUsers = chat.users.slice(0, 2);
      setFirstTwoUsers(slicedUsers);
      setRemainingCount(chat.users.length - slicedUsers.length);
    }
  }, [chat?.users]);

  return (
    <Link to={`/event/${event._id}`}>
      <Card className="md:flex overflow-hidden">
        <div className="md:w-1/3">
          <img
            src={SampleEvent}
            alt="Image"
            loading="lazy"
            className="h-full object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <CardHeader>
            <div className="flex flex-col items-start gap-2 md:flex-row-reverse md:items-center md:justify-between">
              <Badge variant="secondary">{event?.category}</Badge>
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
          <CardContent>{event?.description}</CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex h-5 items-center space-x-2 text-sm text-muted-foreground">
              <span>{distance} km away</span>
              <Separator orientation="vertical" />
              <span>{travelTime}</span>
            </div>
            <div className="flex">
              <div className="flex -space-x-6">
                {firstTwoUsers?.map((user) => (
                  <Avatar key={user?._id}>
                    <AvatarImage src={user?.image} />
                    <AvatarFallback>
                      {user?.name?.charAt(0).toUpperCase() || "N/A"}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              {remainingCount > 0 && (
                <span className="text-sm text-muted-foreground">
                  +{remainingCount}
                </span>
              )}
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
