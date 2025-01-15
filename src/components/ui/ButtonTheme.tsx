import type { DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonThemeProps = {} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function ButtonTheme({
  children,
  className,
  ...rest
}: ButtonThemeProps) {
  return (
    <button
      className={twMerge(
        "px-2 text-slate-500 transition duration-700 ease-in-out hover:scale-125 hover:text-teal-600 dark:text-slate-300",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
