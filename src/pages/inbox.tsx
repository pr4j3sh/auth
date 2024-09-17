import { ChatCard } from "@/components/chat-card";
import { Input } from "@/components/ui/input";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Inbox() {
  const chatrooms = useQuery(api.chatrooms.get);
  return (
    <div className="flex flex-grow flex-col gap-4">
      <Input type="text" placeholder="Search..." />
      <div className="flex flex-col gap-4">
        {chatrooms &&
          chatrooms.map(({ event, users }) => (
            <ChatCard key={event} event={event} users={users} />
          ))}
      </div>
    </div>
  );
}
