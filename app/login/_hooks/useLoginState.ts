import { useToast } from "@/shared/providers/ToastProvider";
import {
  loginRequestType,
  AuthResponseType,
} from "@/shared/types/api/authApiType";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { auth } from "@/api/authApi";
import { setAuthCookies } from "@/app/actions/auth";
import { useAuthStore } from "@/stores/authStore";
import { AxiosError } from "axios";

const useLoginState = () => {
  const { toastError, toastSuccess } = useToast();
  const router = useRouter();
  const { setAuth } = useAuthStore();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (request: loginRequestType) => auth.login(request),
    onSuccess: async (response) => {
      const authData: AuthResponseType = response.data;

      // Set httpOnly cookies via Server Action
      await setAuthCookies(authData.accessToken, authData.refreshToken);

      // Update Zustand store with user data
      setAuth(authData.user);

      toastSuccess("Login successful");
      router.push("/homepage");
    },
    onError(error: AxiosError<{ message?: string }>) {
      toastError(
        error.response?.data?.message || error.message || "Login failed"
      );
    },
  });

  const handleLogin = async (request: loginRequestType) => {
    await mutateAsync(request);
  };

  const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      const { email, password } = value;
      await handleLogin({
        email,
        password,
      });
    },
  });

  return { form, isPending };
};

export default useLoginState;
