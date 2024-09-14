import { useAuthActions } from "@convex-dev/auth/react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SignInGoogle } from "@/components/signin-google";
import { SignInGitHub } from "@/components/signin-github";
import FormDivider from "./form-divider";
import { useNavigate } from "react-router-dom";

const emailFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email field cannot be empty." })
    .email("This is not a valid email."),
});
const codeFormSchema = z.object({
  code: z.string().min(1, { message: "Code cannot be empty." }),
  email: z
    .string()
    .min(1, { message: "Email field cannot be empty." })
    .email("This is not a valid email."),
});

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuthActions();
  const [step, setStep] = useState<"signIn" | { email: string }>("signIn");

  const formEmail = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const formCode = useForm<z.infer<typeof codeFormSchema>>({
    resolver: zodResolver(codeFormSchema),
    defaultValues: {
      code: "",
      email: "",
    },
  });

  useEffect(() => {
    if (typeof step === "object") {
      formCode.reset({
        code: "",
        email: step.email, // Set email here
      });
    }
  }, [step, formCode]);

  function onSubmitEmail(values: z.infer<typeof emailFormSchema>) {
    console.log(values);
    void signIn("resend-otp", values).then(() =>
      setStep({ email: values.email as string }),
    );
  }

  function onSubmitCode(values: z.infer<typeof codeFormSchema>) {
    console.log(values);
    void signIn("resend-otp", values).then(() => {
      navigate("/");
    });
  }

  return step === "signIn" ? (
    <>
      <div className="flex flex-col min-[460px]:flex-row w-full gap-2 items-stretch">
        <SignInGoogle />
        <SignInGitHub />
      </div>
      <FormDivider />
      <Form {...formEmail}>
        <form
          onSubmit={formEmail.handleSubmit(onSubmitEmail)}
          className="space-y-8"
        >
          <FormField
            control={formEmail.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Send Code</Button>
        </form>
      </Form>
    </>
  ) : (
    <>
      <Form {...formCode}>
        <form
          onSubmit={formCode.handleSubmit(onSubmitCode)}
          className="space-y-8"
        >
          <FormField
            control={formCode.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formCode.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="hidden" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex gap-2">
            <Button type="submit">Continue</Button>
            <Button variant="secondary" onClick={() => setStep("signIn")}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
