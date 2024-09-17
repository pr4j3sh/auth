import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function SecondaryFooterMenu({ eventId, userId, isBookmarked }) {
  const bookmarkEvent = useMutation(api.events.bookmarkEvent);
  const bookEvent = useMutation(api.chatrooms.bookEvent);

  const handleBookmark = async () => {
    try {
      await bookmarkEvent({ eventId });
    } catch (error) {
      console.error("Failed to bookmark event:", error);
    }
  };

  const handleJoin = async () => {
    try {
      await bookEvent({ eventId, userId });
    } catch (error) {
      console.error("Failed to book event:", error);
    }
  };

  return (
    <Menubar className="justify-end sticky bottom-2 z-100">
      {isBookmarked ? null : (
        <MenubarMenu>
          <MenubarTrigger onClick={handleBookmark} className="cursor-pointer">
            Bookmark
          </MenubarTrigger>
        </MenubarMenu>
      )}
      <MenubarMenu>
        <MenubarTrigger onClick={handleJoin} className="cursor-pointer">
          Join
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
