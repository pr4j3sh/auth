import { convexAuth } from "@convex-dev/auth/server";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import { Resend } from "./resend";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [Google, GitHub, Resend],
});
