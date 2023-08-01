import { CrossCircledIcon } from "@radix-ui/react-icons";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          placeholder=" "
          className={cn(
            "w-full bg-white rounded-lg border border-teal-700 px-3 h-14 text-gray-800 focus:border-gray-800 placeholder-shown:border-none peer",
            error && "!border-red-700 placeholder-shown:border-solid",
            className,
          )}
        />
        <label
          htmlFor={inputId}
          className="absolute left-3 top-[-12px] pointer-events-none bg-gray-50 leading-4 px-1 peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 transition-all"
        >
          {placeholder}
        </label>

        {error && (
          <div className="flex items-center gap-1 mt-2 text-red-700">
            <CrossCircledIcon />
            <span className="text-sm">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
