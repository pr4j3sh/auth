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

export function EventCard() {
  return (
    <Link to="/event">
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
              <Badge variant="secondary">Technology</Badge>
              <CardTitle>Convex Hackathon</CardTitle>
            </div>
            <CardDescription className="flex h-5 items-center space-x-2">
              <span>Mon, 10 Mar 2024</span>
              <Separator orientation="vertical" />
              <span>2:10 pm - 3:30 pm</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            Convex is the open-source backend for application builders. An
            all-in-one platform with thoughtful, product-centric APIs.
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex h-5 items-center space-x-2 text-sm text-muted-foreground">
              <span>2.5 km away</span>
              <Separator orientation="vertical" />
              <span>45 mins</span>
            </div>
            <div className="flex">
              <div className="flex -space-x-6">
                <Avatar>
                  <AvatarImage src="https://github.com/prajesheleven.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/prajesheleven.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm text-muted-foreground">
                +398
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
