import auth from "@pr4j3sh/auth";
import { create } from "zustand";
import Cookies from "js-cookie";

export const userStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: Cookies.get("token") || null,

  login: async (payload) => {
    const res = await auth.login(payload);
    const token = res?.data?.token;
    const user = res?.data?.user;
    set({ token, user });
    localStorage.setItem("user", JSON.stringify(user));
    Cookies.set("token", token);
    return { success: res.success, message: res.message };
  },

  register: async (payload) => {
    const res = await auth.register(payload);
    const token = res?.data?.token;
    const user = res?.data?.user;
    set({ token, user });
    localStorage.setItem("user", JSON.stringify(user));
    Cookies.set("token", token);
    return { success: res.success, message: res.message };
  },

  logout: () => {
    set({ user: null, token: null });
    Cookies.remove("token");
    localStorage.removeItem("user");
    return { success: true, message: "user logged out" };
  },
}));
