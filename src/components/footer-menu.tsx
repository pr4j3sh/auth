import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";

export function FooterMenu() {
  return (
    <Menubar className="md:justify-evenly justify-between sticky bottom-2 z-100">
      <MenubarMenu>
        <MenubarTrigger>
          <Link to="/">Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to="/chat">Chat</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to="/map">Map</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to="/bookmark">Bookmark</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
