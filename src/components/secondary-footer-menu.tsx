import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function SecondaryFooterMenu({ eventId, isBookmarked }) {
  const bookmarkEvent = useMutation(api.events.bookmarkEvent);

  const handleBookmark = async () => {
    try {
      await bookmarkEvent({ eventId });
      // Optionally handle success, like showing a confirmation message
    } catch (error) {
      console.error("Failed to bookmark event:", error);
      // Optionally handle error, like showing an error message
    }
  };

  return (
    <Menubar className="justify-end sticky bottom-2 z-100">
      {isBookmarked ? null : (
        <MenubarMenu>
          <MenubarTrigger onClick={handleBookmark}>Bookmark</MenubarTrigger>
        </MenubarMenu>
      )}
      <MenubarMenu>
        <MenubarTrigger>
          <Link to="/">Attend</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
