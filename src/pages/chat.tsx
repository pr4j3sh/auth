import SecondaryHeaderMenu from "@/components/secondary-header-menu";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SendHorizontalIcon } from "lucide-react";
import moment from "moment";
import { Id } from "convex/_generated/dataModel";
import { User } from "@auth/core/types";

const formSchema = z.object({
  message: z.string().min(1, {
    message: "Cannot send empty message.",
  }),
});

export default function Chat() {
  const { eventId } = useParams();
  const chat = useQuery(api.chatrooms.getChatroom, {
    eventId: eventId as Id<"events">,
  });
  console.log(chat);
  const messages = useQuery(api.messages.get, {
    eventId: eventId as Id<"events">,
  });

  console.log(messages);

  const user = useQuery(api.users.viewer);

  const sendMessage = useMutation(api.messages.send);

  const [firstTwoUsers, setFirstTwoUsers] = useState<User[]>([]);
  const [remainingCount, setRemainingCount] = useState<number>(0);

  useEffect(() => {
    if (chat?.users) {
      const slicedUsers = chat.users.slice(0, 2);
      setFirstTwoUsers(slicedUsers);
      setRemainingCount(chat.users.length - slicedUsers.length);
    }
  }, [chat?.users]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await sendMessage({
        eventId: eventId as Id<"events">,
        userId: user?._id as Id<"users">,
        message: values?.message,
      });
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  }

  return (
    <div className="container min-h-screen md:w-2/4 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <SecondaryHeaderMenu />

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="flex flex-col gap-2 items-center p-2">
            <div className="flex -space-x-6">
              {firstTwoUsers?.map((user) => (
                <Avatar key={user?.image}>
                  <AvatarImage src={user?.image as string | undefined} />
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
          <Link to={`/event/${chat?.event?._id}`}>
            <div className="space-y-1">
              <CardTitle>{chat?.event?.title}</CardTitle>
              <CardDescription>4 min ago...</CardDescription>
            </div>
          </Link>
        </CardHeader>
      </Card>
      <div className="flex-grow flex flex-col gap-y-2">
        {messages?.map((msg, index) => (
          <div
            key={index}
            className={`flex ${user?._id === msg?.user?._id ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`w-5/6 flex flex-col gap-1 border p-2 rounded-lg  `}
            >
              <div
                className={`flex ${user?._id === msg?.user?._id ? "flex-row-reverse" : "flex-row"}  items-center justify-between`}
              >
                <span className="font-semibold">{msg?.user?.name}</span>
                <span className="text-muted-foreground text-sm">
                  {moment(msg.timeStamp).format("MMM D, YYYY | h:mm a")}
                </span>
              </div>
              <span
                className={`flex ${user?._id === msg?.user?._id ? "justify-end" : "justify-start"}`}
              >
                {msg?.message}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-between gap-x-2 sticky bottom-2 z-100 bg-background"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input placeholder="Type a message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="outline" size="icon">
            <SendHorizontalIcon className="h-4 w-4" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
