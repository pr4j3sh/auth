import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export function SignInGoogle() {
  const { signIn } = useAuthActions();
  return (
    <Button
      className="flex-1"
      variant="outline"
      type="button"
      onClick={() => void signIn("google")}
    >
      <FcGoogle className="mr-2 h-4 w-4" /> <span>Google</span>
    </Button>
  );
}
