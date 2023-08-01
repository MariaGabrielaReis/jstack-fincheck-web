import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useSignInController } from "./useSignInController";

export function SignIn() {
  const { register, handleSubmit, isLoading, errors } = useSignInController();

  return (
    <>
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Entre em sua conta
        </h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link
            to="/signup"
            className="tracking-[-0.5px] font-medium text-teal-700"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-16 flex flex-col gap-6">
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button type="submit" className="mt-2" isLoading={isLoading}>
          Entrar
        </Button>
      </form>
    </>
  );
}
