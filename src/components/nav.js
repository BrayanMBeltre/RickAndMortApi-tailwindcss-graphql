import ThemeSwitch from "./themeSwitch";

export default function Nav() {
  return (
    <div className="flex justify-between py-6 px-6">
      <div className="uppercase text-2xl font-bold text-gray-900 dark:text-gray-50">
        Rick and Morty
      </div>
      <ThemeSwitch />
    </div>
  );
}
