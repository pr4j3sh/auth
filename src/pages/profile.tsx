import SecondaryHeaderMenu from "@/components/secondary-header-menu";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Profile() {
  const { signOut } = useAuthActions();
  const user = useQuery(api.users.viewer);
  return (
    <div className="container min-h-screen md:w-2/4 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <SecondaryHeaderMenu />
      <Card>
        <CardHeader>
          <Avatar>
            <AvatarImage src={user?.image} />
            <AvatarFallback>{user?.name?.at(0)?.toUpperCase()}</AvatarFallback>
          </Avatar>
          <CardTitle>{user?.name}</CardTitle>
          <CardDescription>{user?.email}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="destructive" onClick={() => void signOut()}>
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
