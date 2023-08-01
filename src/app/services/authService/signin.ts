import { sleep } from "../../utils/sleep";
import { api } from "../httpClient";

export type SignInParams = { email: string; password: string };

export type SignInResponse = { accessToken: string };

export async function signIn(params: SignInParams) {
  await sleep();

  const { data } = await api.post<SignInResponse>("/auth/signin", params);
  return data;
}
