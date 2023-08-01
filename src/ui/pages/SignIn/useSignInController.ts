import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import { SignInParams } from "../../../app/services/authService/signin";

const schema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "A senha deve conter ao menos 8 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function useSignInController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: SignInParams) => {
      return authService.signIn(data);
    },
  });

  const handleSubmit = hookFormSubmit(async data => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log({ accessToken });
    } catch {
      toast.error("Credenciais inválidas!");
    }
  });

  return { register, handleSubmit, isLoading, errors };
}
