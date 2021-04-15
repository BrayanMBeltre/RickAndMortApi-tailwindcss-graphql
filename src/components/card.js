import { ArrowRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Masonry from "react-masonry-css";

import rickImg from "../assets/Rick.jpeg";
import CharacterEpisodes from "./characterEpisodes";

// masonry breack points
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function Card({ characters }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid sm:px-4 sm:gap-4"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div
            key={character.id}
            className={`flex justify-center dark:text-gray-50 mb-8`}
          >
            <div>
              {/* rickimg = placeholder img */}
              <img
                onLoad={() => setIsLoaded(true)}
                src={isLoaded ? character.image : rickImg}
                alt=""
                className={`rounded-3xl w-72 h-72`}
              />
              {/* border color status */}
              <div
                className={`
            ${character.status === "Alive" && "border-green-600"}
            ${character.status === "Dead" && "border-red-400"}
            ${character.status === "unknown" && "border-gray-500"}
            rounded-b-3xl -mt-5 border-4`}
              >
                <div className="px-4 pt-9 pb-2 space-y-6">
                  {/* character name */}
                  <h2 className="font-semibold text-2xl w-52">
                    {character.name}
                  </h2>
                  {/* Origin */}
                  <div className="flex justify-between items-center">
                    {/* character origin */}
                    <div>
                      <h3 className="font-semibold text-xl">Origin</h3>
                      <p className="w-32 ">{character.origin.name}</p>
                    </div>
                    {/* origin button */}
                    <button
                      className="flex justify-center items-center h-10 w-10 bg-gray-900 dark:bg-gray-50 rounded-full transition duration-500"
                      placeholder="Rick"
                    >
                      <ArrowRightIcon className="w-6 h-6 stroke-current stroke-2 text-gray-50 dark:text-gray-900 transition duration-500" />
                    </button>
                  </div>
                  {/* Episodes */}
                  <div className="flex justify-between items-center">
                    {/* episodes count */}
                    <div>
                      <h3 className="font-semibold text-xl">Episodes</h3>
                      <p>{character.episode.length}</p>
                    </div>
                    {/* get character episodes button */}
                    <CharacterEpisodes characterId={character.id} />
                  </div>
                  {/* specie */}
                  <div className="flex justify-center">
                    <p className="font-semibold">{character.species}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </>
  );
}
