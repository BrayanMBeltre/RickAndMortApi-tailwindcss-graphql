import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

import LoadingAnimation from "./loadingAnimation";
import ErrorMessage from "./errorMessage";
import SearchBar from "./searchBar";
import Card from "./card";

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

  if (loading) return <LoadingAnimation />;

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const characters = data.characters;

  return (
    <>
      {/* search button / bar */}
      <SearchBar setName={setName} name={name} />

      {/* all characteres list */}
      <Card characters={characters.results} />

      {/* prev button */}
      {characters.info.next > 0 && (
        <div className="flex justify-center items-center gap-5">
          {characters.info.prev > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="flex justify-center items-center h-10 rounded-full px-4 dark:text-gray-50"
            >
              <ArrowLeftIcon className="w-6 h-6 mr-3 stroke-current stroke-2 dark:text-gray-50" />
              Prev
            </button>
          )}

          {/* next button */}
          {characters.info.next > 0 && (
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
    </>
  );
}
