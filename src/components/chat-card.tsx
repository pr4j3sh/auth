import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export function ChatCard() {
  return (
    <Link to="/chat">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="flex flex-col gap-2 items-center p-2">
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
            <span className="text-sm text-muted-foreground">+398</span>
          </div>
          <div className="flex-grow space-y-1">
            <CardTitle>Convex Hackathon</CardTitle>
            <CardDescription className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <span className="font-bold">Harry:</span>
                <span>Hi...</span>
              </div>
              <div>3:20 pm</div>
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
