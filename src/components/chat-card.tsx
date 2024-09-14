import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ChatCard() {
  return (
    <Card className="flex items-center overflow-hidden">
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
      <div className="flex-grow">
        <CardHeader>
          <CardTitle>Convex Hackathon</CardTitle>
          <CardDescription className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="font-bold">Harry:</span>
              <span>Hi...</span>
            </div>
            <div>3:20 pm</div>
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
}
