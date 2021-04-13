import Nav from "./components/nav";
import Leyend from "./components/leyend";
import AllCharacters from "./components/allCharacters";

export default function App() {
  return (
    <>
      <div className="dark:bg-gray-900 h-full bg-white transition duration-500 ">
        <Nav />
        <Leyend />
        <AllCharacters />
      </div>
    </>
  );
}
