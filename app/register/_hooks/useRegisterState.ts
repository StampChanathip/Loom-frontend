import { useToast } from "@/shared/providers/ToastProvider";
import { registerRequestType, AuthResponseType } from "@/shared/types/api/authApiType";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { auth } from "@/api/authApi";
import { setAuthCookies } from "@/app/actions/auth";
import { useAuthStore } from "@/stores/authStore";
import { AxiosError } from "axios";

const useRegisterState = () => {
  const { toastError, toastSuccess } = useToast();
  const router = useRouter();
  const { setAuth } = useAuthStore();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (request: registerRequestType) => auth.register(request),
    onSuccess: async (response) => {
      const authData: AuthResponseType = response.data;

      // Set httpOnly cookies via Server Action
      await setAuthCookies(authData.accessToken, authData.refreshToken);

      // Update Zustand store with user data
      setAuth(authData.user);

      toastSuccess("Registration successful");
      router.push("/homepage");
    },
    onError(error: AxiosError<{ message?: string }>) {
      toastError(error.response?.data?.message || error.message || "Registration failed");
    },
  });

  const handleRegister = async (request: registerRequestType) => {
    await mutateAsync(request);
  };

  const registerSchema = z
    .object({
      firstName: z.string().nonempty({
        message: "This field is required",
      }),
      lastName: z.string().nonempty({
        message: "This field is required",
      }),
      email: z.string().email({ message: "Invalid email address" }),
      password: z.string(),
      confirmedPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmedPassword, {
      message: "Passwords do not match",
      path: ["confirmedPassword"],
    });

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
    validators: {
      onSubmit: registerSchema,
    },
    onSubmit: async ({ value }) => {
      const { email, password, firstName, lastName } = value;
      await handleRegister({
        email,
        password,
        firstName,
        lastName,
      });
    },
  });

  return { form, isPending };
};

export default useRegisterState;
