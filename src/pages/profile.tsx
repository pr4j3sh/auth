import SecondaryHeaderMenu from "@/components/secondary-header-menu";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="container min-h-screen md:w-2/4 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <SecondaryHeaderMenu />
      <Card>
        <CardHeader>
          <Avatar>
            <AvatarImage src="https://github.com/prajesheleven.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle>John Doe</CardTitle>
          <CardDescription>john@example.com</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
