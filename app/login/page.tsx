"use client";
import TextInput from "@/components/form/TextInput";
import { Button } from "@/components/ui/button";
import Loading from "@/components/utils/Loading";
import { InputType } from "@/shared/enums/form";
import Link from "next/link";
import PublicRoute from "@/components/guards/PublicRoute";
import useLoginState from "./_hooks/useLoginState";
import GoogleOAuthButton from "@/components/auth/GoogleOAuthButton";

export default function Login() {
  const { form, isPending } = useLoginState();

  return (
    <PublicRoute>
      <Loading isLoading={isPending}>
      <div className="w-full flex flex-row items-center justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="flex flex-col items-center w-100 space-y-3">
            <h1 className="text-5xl font-bold">Login</h1>

            <GoogleOAuthButton className="mt-4" />

            <div className="flex items-center w-full my-4">
              <div className="flex-1 border-t border-border"></div>
              <span className="px-4 text-sm text-muted-foreground">OR</span>
              <div className="flex-1 border-t border-border"></div>
            </div>

            <form.Field
              name="email"
              children={(field) => (
                <TextInput
                  label="Email"
                  type={InputType.Email}
                  placeHolder="Email"
                  errorMessage={
                    field.state.meta.errors[0]
                      ? field.state.meta.errors[0].message
                      : ""
                  }
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />

            <form.Field
              name="password"
              children={(field) => (
                <TextInput
                  label="Password"
                  type={InputType.Password}
                  placeHolder="Password"
                  errorMessage={
                    field.state.meta.errors[0]
                      ? field.state.meta.errors[0].message
                      : ""
                  }
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="mt-4 w-full text-lg font-bold"
                >
                  {isSubmitting ? "..." : "Login"}
                </Button>
              )}
            />

            <div className="text-sm text-center mt-4">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-primary hover:underline font-semibold"
              >
                Register here
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Loading>
    </PublicRoute>
  );
}
