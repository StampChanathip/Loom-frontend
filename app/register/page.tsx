"use client";
import TextInput from "@/components/form/TextInput";
import { Button } from "@/components/ui/button";
import Loading from "@/components/utils/Loading";
import { InputType } from "@/shared/enums/form";
import Link from "next/link";
import PublicRoute from "@/components/guards/PublicRoute";
import useRegisterState from "./_hooks/useRegisterState";
import GoogleOAuthButton from "@/components/auth/GoogleOAuthButton";

export default function Register() {
  const { form, isPending } = useRegisterState();

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
              <h1 className="text-5xl font-bold">Register</h1>

              <GoogleOAuthButton className="mt-4" />

              <div className="flex items-center w-full my-4">
                <div className="flex-1 border-t border-border"></div>
                <span className="px-4 text-sm text-muted-foreground">OR</span>
                <div className="flex-1 border-t border-border"></div>
              </div>

              <div className="flex flex-row w-full space-x-1 md:space-x-4 justify-between">
                <form.Field
                  name="firstName"
                  children={(field) => (
                    <TextInput
                      label="First Name"
                      type={InputType.Text}
                      placeHolder="First Name"
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
                  name="lastName"
                  children={(field) => (
                    <TextInput
                      label="Last Name"
                      type={InputType.Text}
                      placeHolder="Last Name"
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
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              />
              <form.Field
                name="confirmedPassword"
                children={(field) => (
                  <TextInput
                    label="Confirmed Password"
                    type={InputType.Password}
                    placeHolder="Confirmed Password"
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
                    {isSubmitting ? "..." : "Register"}
                  </Button>
                )}
              />

              <div className="text-sm text-center mt-4">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary hover:underline font-semibold"
                >
                  Login here
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Loading>
    </PublicRoute>
  );
}
