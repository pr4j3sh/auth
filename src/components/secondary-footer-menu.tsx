import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";

export function SecondaryFooterMenu() {
  return (
    <Menubar className="justify-end sticky bottom-2 z-100">
      <MenubarMenu>
        <MenubarTrigger>
          <Link to="/">Bookmark</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to="/">Attend</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
