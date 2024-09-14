import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function SecondaryHeaderMenu() {
  return (
    <header className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Link to="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </header>
  );
}
