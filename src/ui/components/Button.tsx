import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-teal-700  px-6 h-12 rounded-lg font-medium text-white disabled:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed hover:bg-teal-600 active:bg-teal-800 transition-all"
    />
  );
}
