"use client";

import { useState } from "react";

const options = [
  "text",
  "call",
  "video",
];

const SearchableDropdown = ()=> {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-sm">
      {/* Input field */}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Search or select an option"
          value={isOpen ? search : selected}
          onFocus={() => {
            setSearch("");
            setIsOpen(true);
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
        />

        <button
          type="button"
          className="btn btn-outline join-item"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setSearch("");
          }}
          aria-label="Toggle options"
        >
          <span className="text-lg">⌄</span>
        </button>
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="menu absolute top-full left-0 z-50 mt-1
          max-h-60 w-full flex-nowrap overflow-y-auto
          rounded-box border border-base-300 bg-base-100
          p-2 shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  className={
                    selected === option ? "active" : ""
                  }
                  onClick={() => {
                    setSelected(option);
                    setSearch("");
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              </li>
            ))
          ) : (
            <li>
              <span className="pointer-events-none opacity-60">
                No options found
              </span>
            </li>
          )}
        </ul>
      )}

      {selected && (
        <p className="mt-2 text-sm text-base-content/70">
          Selected: {selected}
        </p>
      )}
    </div>
  );
}

export default SearchableDropdown