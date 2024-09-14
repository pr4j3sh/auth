import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export function SignInGitHub() {
  const { signIn } = useAuthActions();
  return (
    <Button
      className="flex-1"
      variant="outline"
      type="button"
      onClick={() => void signIn("github")}
    >
      <FaGithub className="mr-2 h-4 w-4" /> <span>GitHub</span>
    </Button>
  );
}
