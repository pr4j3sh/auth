import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { User } from "lucide-react";
// import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "../assets/favicon.png";

export default function HeaderMenu() {
  return (
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
      {/* <DropdownMenu> */}
      {/*   <DropdownMenuTrigger asChild> */}
      {/*     <Link to="/notification"> */}
      {/*       <Button variant="outline" size="icon"> */}
      {/*         <Bell className="h-[1.2rem] w-[1.2rem]" /> */}
      {/*         <span className="sr-only">Notification</span> */}
      {/*       </Button> */}
      {/*     </Link> */}
      {/*   </DropdownMenuTrigger> */}
      {/* </DropdownMenu> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Link to="/profile">
            <Button variant="outline" size="icon">
              <User className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </header>
  );
}
