import SecondaryHeaderMenu from "@/components/secondary-header-menu";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Notification() {
  return (
    <div className="container min-h-screen md:w-2/4 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <SecondaryHeaderMenu />
      <Alert>
        <AlertTitle className="flex items-center">
          <span className="flex-grow font-bold">Heads Up!</span>
          <Button variant="outline" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
