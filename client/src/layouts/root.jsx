import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { AUTHOR, SITE } from "../lib/consts";
import { useEffect } from "react";
import { userStore } from "../lib/store";

export default function Root() {
  const navigate = useNavigate();
  const { user, token, profile } = userStore();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [navigate, user]);

  useEffect(() => {
    if (token && !user) profile();
  }, [profile, token, user]);

  return (
    <div className="container">
      <Navbar site={SITE} />
      <main>
        <Outlet />
      </main>
      <Footer author={AUTHOR} />
    </div>
  );
}
