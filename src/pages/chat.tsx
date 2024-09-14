import SecondaryHeaderMenu from "@/components/secondary-header-menu";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

export default function Chat() {
  return (
    <div className="container min-h-screen md:w-2/4 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <SecondaryHeaderMenu />

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/prajesheleven.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link to="/event">
            <div className="space-y-1">
              <CardTitle>Convex Hackathon</CardTitle>
              <CardDescription>4 min ago...</CardDescription>
            </div>
          </Link>
        </CardHeader>
      </Card>
      <div className="flex-grow">
        <div className="flex flex-col gap-1 border p-2 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-semibold">John</span>
            <span className="text-muted-foreground text-sm">4:30 pm</span>
          </div>
          <span>What is up?</span>
        </div>
      </div>
      <Input type="text" placeholder="Type a messsage..." />
    </div>
  );
}
