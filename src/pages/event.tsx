import SecondaryFooterMenu from "@/components/secondary-footer-menu";
import SecondaryHeaderMenu from "@/components/secondary-header-menu";
import SampleEvent from "../assets/sample-event.jpg";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";
import {
  calculateDistance,
  calculateTravelTime,
  getCurrentLocation,
} from "@/lib/utils";
import moment from "moment";

export default function Event() {
  const { eventId } = useParams();

  const user = useQuery(api.users.viewer);
  const event = useQuery(api.events.getEventById, {
    eventId: eventId!,
  });
  const chat = useQuery(api.chatrooms.getChatroom, {
    eventId: eventId,
  });

  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const [distance, setDistance] = useState<string>("");
  const [travelTime, setTravelTime] = useState<string>("");
  const [address, setAddress] = useState({});
  const [firstTwoUsers, setFirstTwoUsers] = useState([]);
  const [remainingCount, setRemainingCount] = useState(0);

  const averageSpeed = 60; // Average speed in km/h
  const apiKey = import.meta.env.VITE_GEO_API_KEY;

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
    async function fetchAddress() {
      try {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${parseFloat(event?.lat)}&lon=${parseFloat(event?.lon)}&apiKey=${apiKey}`,
        );

        const data = await res.json();
        setAddress(data?.features[0].properties);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAddress();
  }, [apiKey, event?.lat, event?.lon]);

  useEffect(() => {
    if (chat?.users) {
      const slicedUsers = chat.users.slice(0, 2);
      setFirstTwoUsers(slicedUsers);
      setRemainingCount(chat.users.length - slicedUsers.length);
    }
  }, [chat?.users]);

  return (
    <div className="container min-h-screen md:w-2/4 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <SecondaryHeaderMenu />
      <div className="flex flex-grow flex-col items-start gap-4">
        <img
          src={SampleEvent}
          alt="Image"
          loading="lazy"
          className="aspect-video rounded-md object-cover"
        />
        <Badge variant="secondary">{event?.category}</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {event?.title}
        </h1>
        <p className=" flex h-5 items-center space-x-2 text-muted-foreground">
          <span>{moment(event?.date).format("ddd, MMM Do, YYYY")}</span>
          <Separator orientation="vertical" />
          <span>
            {moment(event?.timeFrom, "HH:mm").format("hh:mm a")} -{" "}
            {moment(event?.timeTo, "HH:mm").format("hh:mm a")}
          </span>
        </p>
        <p className=" flex h-5 items-center space-x-2 text-muted-foreground">
          <span>{distance} km away</span>
          <Separator orientation="vertical" />
          <span>{travelTime}</span>
        </p>
        <p className="flex flex-col space-y-2 text-muted-foreground">
          <span>{address?.address_line1},</span>
          <span>{address?.address_line2}</span>
        </p>
        <p className="leading-7 my-6">{event?.description}</p>
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
      </div>
      <SecondaryFooterMenu eventId={event?._id} userId={user?._id} />
    </div>
  );
}
