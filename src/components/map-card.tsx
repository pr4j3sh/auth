import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Separator } from "./ui/separator";

export function MapCard() {
  return (
    <Card className="w-80 shrink-0 snap-center">
      <CardHeader>
        <div className="flex flex-col items-start gap-2">
          <Badge variant="secondary">Technology</Badge>
          <CardTitle>Convex Hackathon</CardTitle>
        </div>
        <CardDescription className="flex h-5 items-center space-x-2">
          <span>Mon, 10 Mar 2024</span>
          <Separator orientation="vertical" />
          <span>2:10 pm - 3:30 pm</span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div className="flex h-5 items-center space-x-2 text-sm text-muted-foreground">
          <span>2.5 km away</span>
          <Separator orientation="vertical" />
          <span>45 mins</span>
        </div>
      </CardFooter>
    </Card>
  );
}
