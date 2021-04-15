import { useState } from "react";
import { SearchIcon, XIcon } from "@heroicons/react/outline";

import Modal from "react-modal";

Modal.setAppElement("#root");

// modal styles needed for clean modal
const style = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "transparent",
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

export default function SearchBar({ setName, name }) {
  const [characterName, setCharacterName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(characterName);

    //close modal after query
    setIsOpen(false);
  };

  return (
    <div className="fixed flex right-2 bottom-3 justify-end sm:pr-5 ">
      {/* Open searchBar button */}
      <button
        onClick={() => {
          // if searchching for some character change name to empty
          name === "" ? setIsOpen(true) : setName("");
        }}
        className="flex justify-center items-center h-12 w-12 bg-gray-900 dark:bg-gray-50 rounded-full transition duration-500"
      >
        {/* if searchching for some character change icon */}
        {name === "" ? (
          <SearchIcon className="w-6 h-6 stroke-current stroke-2 text-gray-50 dark:text-gray-900 transition duration-500" />
        ) : (
          <XIcon className="w-6 h-6 stroke-current stroke-2 text-gray-50 dark:text-gray-900 transition duration-500" />
        )}
      </button>
      {/* SearchBar */}
      <Modal
        style={style}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <form className="flex items-center " onSubmit={handleSubmit}>
          <input
            autoFocus={true}
            onChange={(e) => {
              setCharacterName(e.target.value);
            }}
            className="h-10 w-80 mr-3 rounded-full border-2 border-gray-900 dark:border-gray-50 dark:text-gray-50 dark:bg-gray-900 p-4 transition duration-500 text-center"
          />
        </form>
      </Modal>
    </div>
  );
}
