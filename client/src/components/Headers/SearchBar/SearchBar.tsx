import SearchIcon from "@/assets/icons/SearchIcon";
import React, { Dispatch, SetStateAction } from "react";

const SearchBar = ({ setSearch }: { setSearch: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="grid items-center gap-6 bg-white p-3 rounded-lg">
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search by USN here..."
          className="w-full bg-[#f0f0f0] px-3 py-2 rounded-md text-[0.9em]"
          onChange={(event) => setSearch(event.target.value)}
        />
        <SearchIcon height={27} width={27} className="absolute right-2" />
      </div>
    </div>
  );
};

export default SearchBar;
