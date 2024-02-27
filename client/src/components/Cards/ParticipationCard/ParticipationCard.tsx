"use client"
import React, { FC, useState } from 'react';
import Image from 'next/image';
import LocationLogo from "@/assets/images/location-pin.png";
import PendingLogo from "@/assets/images/time.png";
import DateLogo from "@/assets/images/calendar.png";

const EventHistoryCard: FC = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prize, setPrize] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleUpdateCertificate = () => {
    setIsModalOpen(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile);
  };

  const handlePrizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrize(event.target.value);
  };

  const handleSubmit = () => {
    console.log('File:', file);
    console.log('Prize:', prize);

    setIsModalOpen(false);
  };

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
                  height={10}
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
                    width={10}
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
                    width={10}
                    alt="logo"
                    className="inline"
                  />
                </span> Start Date: 2022-02-28
              </div>
              <div>
                <span className="font-semibold">
                  <Image
                    src={DateLogo}
                    height={10}
                    width={10}
                    alt="logo"
                    className="inline"
                  />
                </span> Due Date: 2022-03-05
              </div>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="flex justify-between items-end mt-auto">
        <div
          className="flex items-center pl-4 pr-4 rounded-full bg-yellow-500 text-white cursor-pointer"
          onClick={handleUpdateCertificate}
        >
          Update Certificate
        </div>
        
        <div className="flex space-x-2">
          <div className="pr-4 pl-4 ml-4 rounded-full border bg-green-500 text-white cursor-pointer">
            Edit
          </div>
          <div className="pr-4 pl-4 rounded-full border bg-red-500 text-white cursor-pointer">
            Delete
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-3">Update Certificate</h2>
            <input type="file" onChange={handleFileChange} />
            <input
              type="text"
              placeholder="Prize"
              value={prize}
              onChange={handlePrizeChange}
            />
            <button className="bg-green-500 mr-4 rounded-full p-1"onClick={handleSubmit}>Submit</button>

            <button className="bg-red-500 rounded-full p-1"onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventHistoryCard;
