import type { SVGProps } from "react";

export type MenuIconProps = {} & SVGProps<SVGSVGElement>;

export default function MenuIcon({ ...rest }: MenuIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      {...rest}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      ></path>
    </svg>
  );
}
