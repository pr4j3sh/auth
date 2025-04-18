import auth from "@pr4j3sh/auth";
import { create } from "zustand";
import Cookies from "js-cookie";

export const userStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: Cookies.get("token") || null,
  key: null,

  login: async (payload) => {
    const res = await auth.login(payload);
    const token = res?.data?.token;
    set({ token });
    Cookies.set("token", token);
    return { success: res.success, message: res.message };
  },

  register: async (payload) => {
    const res = await auth.register(payload);
    const token = res?.data?.token;
    set({ token });
    Cookies.set("token", token);
    return { success: res.success, message: res.message };
  },

  profile: async () => {
    const token = get().token;
    const res = await auth.profile(token);
    const user = res?.data?.user;
    set({ user });
    localStorage.setItem("user", JSON.stringify(user));
    return { success: res.success, message: res.message };
  },

  secret: async () => {
    const token = get().token;
    const res = await auth.secret(token);
    set({ key: res?.data?.secret?.secret });
    return { success: res.success, message: res.message };
  },

  logout: () => {
    set({ user: null, token: null, key: null });
    Cookies.remove("token");
    localStorage.removeItem("user");
    return { success: true, message: "user logged out" };
  },
}));
