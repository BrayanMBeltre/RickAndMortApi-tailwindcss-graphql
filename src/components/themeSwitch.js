import useDarkMode from "../hooks/useDarkMode";

export default function ThemeSwitch() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <button
      className=" "
      onClick={() => {
        setTheme(colorTheme);
      }}
    >
      <svg
        width="50"
        height="25"
        viewBox="0 0 50 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={`transform  ${
            colorTheme === "light"
              ? "text-gray-50"
              : "  translate-x-6 bg-gray-900"
          }   transition duration-500  fill-current  `}
          cx="13.5"
          cy="12.5"
          r="12"
        />
        <rect
          className={`${
            colorTheme === "light" ? "text-gray-50" : "bg-gray-900"
          } stroke-current stroke-2`}
          x="1"
          y="1"
          width="48"
          height="23"
          rx="11.5"
          stroke="white"
        />
      </svg>
    </button>
  );
}
