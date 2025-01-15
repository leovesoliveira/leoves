import type { SVGProps } from "react";

export type CloseIconProps = {} & SVGProps<SVGSVGElement>;

export default function CloseIcon({ ...rest }: CloseIconProps) {
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
        d="M6 18 18 6M6 6l12 12"
      ></path>
    </svg>
  );
}
