"use client"

import AddIcon from "@/assets/icons/AddIcone";
import FilterIcon from "@/assets/icons/FilterIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import MyParticipationLayout from "@/layouts/myParticipationLayout/MyParticipationLayout";
import Link from "next/link";
import React, { FC, useState } from "react";

const Page: FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>("")

  return (
    <MyParticipationLayout search={search}>
      <header className="grid grid-cols-[1fr_auto] mb-7 gap-5">
        <div className="grid items-center gap-6 bg-white p-3 rounded-lg">
          {/* <button className="flex justify-center items-center gap-2">
            <FilterIcon height={27} width={27} />
            <span>Filter By</span>
          </button> */}

          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search your participation here..."
              className="w-full bg-[#f0f0f0] px-3 py-2 rounded-md text-[0.9em]"
              onChange={(event) => setSearch(event.target.value)}
            />
            <SearchIcon height={27} width={27} className="absolute right-2" />
          </div>
        </div>

        <Link href="/student/myParticipation/addParticipation" className="flex justify-center items-center gap-2 bg-primary-color text-white font-semibold px-2 py-1 rounded-lg">
          <AddIcon height={35} width={35} />
          <span>Add More</span>
        </Link>
      </header>
    </MyParticipationLayout>
  );
};

export default Page;
