import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={inputId}
        placeholder=" "
        className="w-full bg-white rounded-lg border border-teal-700 px-3 h-14 text-gray-800  placeholder-shown:border-none peer"
      />
      <label
        htmlFor={inputId}
        // className="absolute left-3 top-3.5 pointer-events-none"
        className="absolute left-3 top-[-12px] pointer-events-none bg-gray-50 leading-4 px-1 peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 transition-all"
      >
        {placeholder}
      </label>
    </div>
  );
}
