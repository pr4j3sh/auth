import { Outlet } from "react-router-dom";
import { FooterMenu } from "../components/footer-menu";

export default function Root() {
  return (
    <div className="container min-h-screen md:w-1/2 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <Outlet />
      <FooterMenu />
    </div>
  );
}
