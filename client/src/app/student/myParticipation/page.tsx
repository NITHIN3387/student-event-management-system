import AddIcon from "@/assets/icons/AddIcone";
import FilterIcon from "@/assets/icons/FilterIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import MyParticipationLayout from "@/layouts/myParticipationLayout/MyParticipationLayout";
import React, { FC } from "react";

const page: FC = (): JSX.Element => {
  return (
    <MyParticipationLayout>
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">My Participation</h1>

        <button className="flex justify-center items-center gap-2 bg-primary-color text-white font-semibold px-2 py-1 rounded-lg">
          <AddIcon height={35} width={35} />
          <span>Add More</span>
        </button>
      </header>

      <header className="grid grid-cols-[auto_1fr] items-center gap-6 bg-white p-3 rounded-lg my-7">
        <button className="flex justify-center items-center gap-2">
          <FilterIcon height={27} width={27} />
          <span>Filter By</span>
        </button>

        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search your participation here..."
            className="w-full bg-[#f0f0f0] px-3 py-2 rounded-md text-[0.9em]"
          />
          <SearchIcon height={27} width={27} className="absolute right-2" />
        </div>
      </header>
    </MyParticipationLayout>
  );
};

export default page;
