import { ArrowRightIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";

export default function Card({ characters, loading }) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, [characters]);

  return (
    <>
      {characters.map((character) => (
        <div
          key={character.id}
          className={` ${
            isAnimated ? "opacity-100" : "opacity-0"
          } flex justify-center transform dark:text-gray-50 mb-4 `}
        >
          <div>
            <img
              src={character.image}
              // src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt=""
              className="rounded-3xl  w-72 h-72"
            />
            <div
              className={`
            ${character.status === "Alive" && "border-green-600"}
            ${character.status === "Dead" && "border-red-400"}
            ${character.status === "unknown" && "border-gray-500"}
            rounded-b-3xl -mt-5 border-4`}
            >
              <div className="px-4 pt-9 pb-2 space-y-6">
                <h2 className="font-semibold text-2xl w-52">
                  {character.name}
                </h2>
                {/* Origin */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-xl">Origin</h3>
                    <p className="w-32 ">{character.origin.name}</p>
                  </div>
                  <button
                    className="flex justify-center items-center h-10 w-10 bg-gray-900 dark:bg-gray-50 rounded-full transition duration-500"
                    placeholder="Rick"
                  >
                    <ArrowRightIcon className="w-6 h-6 stroke-current stroke-2 text-gray-50  dark:text-gray-900 transition duration-500" />
                  </button>
                </div>
                {/* Episodes */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-xl">Episodes</h3>
                    <p>{character.episode.length}</p>
                  </div>
                  <button
                    className="flex justify-center items-center h-10 w-10 bg-gray-900 dark:bg-gray-50 rounded-full transition duration-500"
                    placeholder="Rick"
                  >
                    <ArrowRightIcon className="w-6 h-6 stroke-current stroke-2 text-gray-50  dark:text-gray-900 transition duration-500" />
                  </button>
                </div>
                <div className="flex justify-between mx-5 ">
                  <p className="font-semibold ">{character.species}</p>
                  <p className="font-semibold">|</p>
                  <p className="font-semibold">{character.gender}</p>
                </div>
              </div>
            </div>
            {/* <div className="rounded-b-3xl  border-4 border-red-400 bg-red-400 ">
          <div className="flex justify-between mx-10 ">
            <p className="font-semibold text-gray-50">Human</p>
            <p className="font-semibold text-gray-50">|</p>
            <p className="font-semibold text-gray-50">Male</p>
          </div>
        </div> */}
          </div>
        </div>
      ))}
    </>
  );
}
