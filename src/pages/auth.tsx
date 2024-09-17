import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignIn from "@/components/signin";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "../assets/favicon.png";

export default function Auth() {
  return (
    <div className="container min-h-screen md:w-2/4 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <header className="flex gap-2 items-center">
        <div className="justify-center flex-grow">
          <Link to="/">
            <Avatar className="h-6 w-6">
              <AvatarImage src={Logo} alt="EventSphere" />
              <AvatarFallback>EventSphere</AvatarFallback>
            </Avatar>
          </Link>
        </div>
        <ModeToggle />
      </header>
      <main className="flex flex-grow flex-col items-center md:justify-center gap-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-x-2 items-center md:mt-0 mt-24">
            <Avatar>
              <AvatarImage src={Logo} alt="EventSphere" />
              <AvatarFallback>EventSphere</AvatarFallback>
            </Avatar>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              EventSphere
            </h3>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Discover, Connect, and Engage with Events Around You.
          </p>
        </div>
        <Card className="md:w-[400px]">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Explore events happening around you with EventSphere.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <SignIn />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
