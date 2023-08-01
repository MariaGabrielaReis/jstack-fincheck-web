import { sleep } from "../../utils/sleep";
import { api } from "../httpClient";

export type SignUpParams = { name: string; email: string; password: string };

export type SignUpResponse = { accessToken: string };

export async function signUp(params: SignUpParams) {
  await sleep();

  const { data } = await api.post<SignUpResponse>("/auth/signup", params);
  return data;
}
