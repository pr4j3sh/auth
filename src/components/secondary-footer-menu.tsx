import { Toggle } from "@/components/ui/toggle";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "./ui/button";
import { BookmarkIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SecondaryFooterMenu({ eventId, userId }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const bookmarkEvent = useMutation(api.bookmarks.bookmarkEvent);
  const bookEvent = useMutation(api.chatrooms.bookEvent);
  const checkBookmark = useQuery(api.bookmarks.checkBookmark, {
    eventId,
    userId,
  });
  const deleteBookmark = useMutation(api.bookmarks.deleteBookmark);

  const checkEvent = useQuery(api.chatrooms.checkEvent, {
    eventId,
    userId,
  });

  console.log(checkEvent);

  useEffect(() => {
    if (checkBookmark) {
      setIsBookmarked(checkBookmark?.isBookmarked);
    }
  }, [checkBookmark]);

  useEffect(() => {
    if (checkEvent) {
      setIsBooked(checkEvent?.isBooked);
    }
  }, [checkEvent]);

  const handleBookmark = async () => {
    try {
      if (isBookmarked) {
        // Delete bookmark if already bookmarked
        await deleteBookmark({ bookmarkId: checkBookmark?.bookmarkId });
        setIsBookmarked(false);
      } else {
        // Add bookmark if not already bookmarked
        await bookmarkEvent({ eventId, userId });
        setIsBookmarked(true);
      }
    } catch (error) {
      console.error("Error handling bookmark:", error);
      // Optionally, you can show a user-friendly message or alert
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
    <div className="flex justify-end sticky bottom-2 z-100 gap-x-2">
      <Toggle
        variant="outline"
        aria-label="Toggle bookmark"
        onClick={handleBookmark}
      >
        <BookmarkIcon
          className={`h-4 w-4 ${isBookmarked ? "text-blue-500" : "text-gray-500"}`}
        />
      </Toggle>{" "}
      {isBooked ? (
        <Link to={`/chat/${eventId}`}>
          <Button className="cursor-pointer">Go to chat</Button>
        </Link>
      ) : (
        <Button
          variant="outline"
          onClick={handleJoin}
          className="cursor-pointer"
        >
          Join
        </Button>
      )}
    </div>
  );
}
