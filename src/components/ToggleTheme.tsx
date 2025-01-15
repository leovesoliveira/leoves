import DarkIcon from "@components/icons/DarkIcon";
import LightIcon from "@components/icons/LightIcon";
import useDarkModeStore from "@stores/DarkModeStore";
import { useEffect } from "react";
import ButtonTheme from "./ui/ButtonTheme";

export default function ToggleTheme() {
  const { darkMode, setDarkMode, toggle } = useDarkModeStore();

  useEffect(() => {
    setDarkMode(
      JSON.parse(localStorage.getItem("darkMode")) === null
        ? false
        : JSON.parse(localStorage.getItem("darkMode")),
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <ButtonTheme onClick={toggle}>
      {darkMode ? (
        <DarkIcon className="size-7 sm:size-8" />
      ) : (
        <LightIcon className="size-7 sm:size-8" />
      )}
    </ButtonTheme>
  );
}
