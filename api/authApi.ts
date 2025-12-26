import {
  loginRequestType,
  registerRequestType,
} from "@/shared/types/api/authApiType";
import { commonApi } from "./axiosConfig";

export const auth = {
  register: (request: registerRequestType) =>
    commonApi.post("/auth/register", request),
  login: (request: loginRequestType) => commonApi.post("/auth/login", request),
  logout: () => commonApi.post("/auth/logout"),
};
