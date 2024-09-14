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

export default function Auth() {
  return (
    <div className="container min-h-screen md:w-2/4 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <header className="flex gap-2 items-center">
        <div className="justify-center flex-grow">
          <Link to="/">logo</Link>
        </div>
        <ModeToggle />
      </header>
      <main className="flex flex-grow flex-col items-center md:justify-center gap-4">
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
