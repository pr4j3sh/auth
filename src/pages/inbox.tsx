import { ChatCard } from "@/components/chat-card";
import { Input } from "@/components/ui/input";

export default function Inbox() {
  return (
    <div className="flex flex-grow flex-col gap-4">
      <Input type="text" placeholder="Search..." />
      <div className="flex flex-col gap-4">
        <ChatCard />
      </div>
    </div>
  );
}
