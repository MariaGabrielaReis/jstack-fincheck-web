import { Outlet } from "react-router-dom";

import illustration from "../../assets/illustration.png";
import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center lg:w-1/2">
        <Logo className="text-gray-500 h-6" />

        <div className="mt-16 w-full max-w-lg px-8">
          <Outlet />
        </div>
      </div>

      <div className="w-1/2 h-full hidden justify-center items-center p-8 relative lg:flex">
        <img
          src={illustration}
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"
        />
        <div className="bg-white max-w-[656px] p-10 absolute bottom-8 mx-8 rounded-b-[32px]">
          <Logo className="text-teal-700 h-8" />
          <p className="text-gray-700 font-medium text-xl mt-6">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
