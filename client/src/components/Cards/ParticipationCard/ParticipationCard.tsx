import React, { FC } from 'react';
import Image from 'next/image';
import LocationLogo from "@/assets/images/location-pin.png"
import PendingLogo from "@/assets/images/time.png"
import DateLogo from "@/assets/images/calendar.png"

const EventHistoryCard: FC = (): JSX.Element => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md relative">
      <div className="flex flex-col mb-4">
        <ul className="space-y-2 flex-col">
          <li>
            <div className="flex justify-between flex-col">
              <div>
                <span className="font-semibold"></span> Event ABC
              </div>
              <div className="absolute top-4 right-4 p-2  border text-black-500 border-blue-500 rounded-full cursor-pointer">
                <Image
                  src={PendingLogo}
                  height={15}
                  width={15}
                  alt="logo"
                  className="inline"
                />
                Pending
              </div>
              <div>
                <span className="font-semibold">
                  <Image
                    src={LocationLogo}
                    height={10}
                    width={20}
                    alt="logo"
                    className="inline"
                  />
                </span> Participation Place XYZ
              </div>
              <div>
                <span className="font-semibold">
                  <Image
                    src={DateLogo}
                    height={10}
                    width={20}
                    alt="logo"
                    className="inline"
                  />
                </span> 2022-02-28
              </div>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="flex justify-between items-end mt-auto">
        <div className="flex items-center pl-4 pr-4 rounded-full  bg-yellow-500  text-white cursor-pointer">
          Update Certificate
        </div>
        
        <div className="flex space-x-2">
          <div className="pr-4 pl-4 ml-4 rounded-full border bg-green-500  text-whit cursor-pointer">
            Edit
          </div>
          <div className="pr-4 pl-4  rounded-full border bg-red-500  text-whit cursor-pointer">
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHistoryCard;
