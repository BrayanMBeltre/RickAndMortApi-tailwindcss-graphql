import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import Modal from "react-modal";
import { ArrowRightIcon } from "@heroicons/react/outline";

import LoadingAnimation from "./loadingAnimation";
import Episode from "./episode";

Modal.setAppElement("#root");

// modal styles needed for clean modal
const style = {
  content: {
    top: "10%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -1%)",
    background: "translate",
    border: "none",
  },
  overlay: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0, 0, 0, 0.50)",
  },
};

const CHARACTER_EPISODES = gql`
  query CharacterEpisodes($characterId: ID!) {
    character(id: $characterId) {
      episode {
        id
        name
        air_date
      }
    }
  }
`;

export default function CharacterEpisodes({ characterId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [getEpisodes, { data }] = useLazyQuery(CHARACTER_EPISODES, {
    variables: { characterId },
  });

  //get query after modal is open
  const afterOpenModal = () => {
    getEpisodes();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center h-10 w-10 bg-gray-900 dark:bg-gray-50 rounded-full transition duration-500"
        placeholder="Rick"
      >
        <ArrowRightIcon className="w-6 h-6 stroke-current stroke-2 text-gray-50 dark:text-gray-900 transition duration-500" />
      </button>

      <Modal
        style={style}
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => setIsOpen(false)}
      >
        <div className="w-96  dark:text-gray-50 dark:bg-gray-900 bg-gray-50 rounded-md overflow-auto">
          <h1 className="font-bold text-2xl p-3 border-b-2 border-gray-900 dark:border-gray-50">
            Appear In
          </h1>
          <div className="overflow-auto" style={{ height: "60vh" }}>
            {data ? (
              data.character.episode.map((episode) => (
                <Episode key={episode.id} episode={episode} />
              ))
            ) : (
              <LoadingAnimation />
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
