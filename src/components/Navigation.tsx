import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";
import { twMerge } from "tailwind-merge";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div x-data="{isOpen:false}" className="flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-2 text-slate-600 sm:hidden dark:text-slate-300"
      >
        {isOpen ? (
          <CloseIcon className="size-7" />
        ) : (
          <MenuIcon className="size-7" />
        )}
      </button>

      <nav
        className={twMerge(
          "fixed inset-x-0 bottom-0 flex-wrap justify-center bg-white p-4 shadow-lg sm:relative sm:flex sm:bg-transparent sm:py-0 sm:shadow-none dark:bg-slate-950",
          isOpen ? "flex" : "hidden",
        )}
      >
        <a
          className="mr-4 rounded border-2 border-slate-400 p-1 px-3 text-slate-600 transition duration-700 ease-in-out hover:border-teal-600 hover:bg-teal-100 hover:text-teal-700 hover:shadow-lg hover:shadow-teal-800/25 sm:text-lg dark:text-slate-200"
          href="https://www.linkedin.com/in/leoves/"
        >
          LinkedIn
        </a>

        <a
          className="rounded border-2 border-slate-400 p-1 px-3 text-slate-600 transition duration-700 ease-in-out hover:border-teal-600 hover:bg-teal-100 hover:text-teal-700 hover:shadow-lg hover:shadow-teal-800/25 sm:text-lg dark:text-slate-200"
          href="https://github.com/leovesoliveira"
        >
          GitHub
        </a>
      </nav>
    </div>
  );
}
