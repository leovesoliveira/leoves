import Navigation from "./Navigation";
import ToggleTheme from "./ToggleTheme";
import LeonardoAlves from "./ui/LeonardoAlves";

export default function Header() {
  return (
    <header className="flex w-full justify-center">
      <div className="container flex max-w-2xl items-end justify-between p-4">
        <LeonardoAlves />

        <div className="flex items-center">
          <ToggleTheme />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
