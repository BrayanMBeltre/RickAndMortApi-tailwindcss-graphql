import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Card from "./card";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CogIcon,
} from "@heroicons/react/outline";
import SearchBar from "./searchBar";

const GET_ALL_CHARACTERS = gql`
  query($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
        next
        prev
      }
      results {
        id
        image
        name
        origin {
          name
        }
        episode {
          name
        }
        species
        gender
        status
      }
    }
  }
`;

export default function AllCharacters() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const { loading, data, error } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page, name },
  });

  console.log(error);

  if (loading)
    return (
      <div className="h-screen flex  justify-center items-center dark:text-gray-50">
        <div className="h-3/6 flex  items-center ">
          <CogIcon className="animate-spin w-6 h-6 mr-2" />
          <h2 className="font-bold text-xl">Loading </h2>
        </div>
      </div>
    );

  if (error) {
    return (
      <div className="h-screen flex  justify-center items-center ">
        <h2 className="font-bold text-xl">{error.message}</h2>
      </div>
    );
  }

  return (
    <div>
      <div
        className={`sm:grid sm:grid-cols-4 sm:gap-4 ${
          data ? "opacity-100" : "opacity-0"
        } transition duration-1000`}
      >
        <Card characters={data.characters.results} />
      </div>

      {data.characters.info.next > 0 && (
        <div className="flex justify-center items-center gap-5 ">
          {data.characters.info.prev > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="flex justify-center items-center h-10 rounded-full px-4 dark:text-gray-50"
            >
              <ArrowLeftIcon className="w-6 h-6 ml-3 stroke-current stroke-2 dark:text-gray-50" />
              Prev
            </button>
          )}

          {data.characters.info.next > 0 && (
            <button
              onClick={() => setPage(page + 1)}
              className="flex justify-center items-center h-10 rounded-full px-4 dark:text-gray-50"
            >
              Next
              <ArrowRightIcon className="w-6 h-6 ml-3 stroke-current stroke-2 dark:text-gray-50" />
            </button>
          )}
        </div>
      )}
      <SearchBar setName={setName} name={name} />
    </div>
  );
}
