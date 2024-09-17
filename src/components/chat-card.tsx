import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Event, User } from "@/lib/types";

export function ChatCard({ event, users }: { event: Event; users: User[] }) {
  const [firstTwoUsers, setFirstTwoUsers] = useState<User[]>([]);
  const [remainingCount, setRemainingCount] = useState<number>(0);

  useEffect(() => {
    if (users) {
      const slicedUsers = users.slice(0, 2);
      setFirstTwoUsers(slicedUsers);
      setRemainingCount(users.length - slicedUsers.length);
    }
  }, [users]);

  return (
    <Link to={`/chat/${event?._id}`}>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="flex flex-col gap-2 items-center p-2">
            <div className="flex -space-x-6">
              {firstTwoUsers.map((user) => (
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
          <div className="flex-grow space-y-1">
            <CardTitle>{event?.title}</CardTitle>
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
