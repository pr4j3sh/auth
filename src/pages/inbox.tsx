import { ChatCard } from "@/components/chat-card";
import { Input } from "@/components/ui/input";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Placeholder } from "@/components/placeholder";
import { Id } from "convex/_generated/dataModel";

export default function Inbox() {
  const user = useQuery(api.users.viewer);
  const chatrooms = useQuery(api.chatrooms.get, {
    userId: user?._id as Id<"users">,
  });
  console.log(chatrooms);
  return (
    <div className="flex flex-grow flex-col gap-4">
      <Input type="text" placeholder="Search..." />
      <div className="flex flex-col gap-4">
        {chatrooms && chatrooms?.length > 0 ? (
          chatrooms?.map(({ event, users }) => (
            <ChatCard event={event} users={users} />
          ))
        ) : (
          <Placeholder message={"You're not part of any event."} />
        )}
      </div>
    </div>
  );
}
