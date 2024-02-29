"use client"
import Table from "@/components/Tables/Table";
import React, { FC, useState, useEffect, useRef } from 'react';

interface PendingAttendance {
  SubName: string;
  COUNT: number;
}

const tableRowVal = [
  "Subject Name",
  "Pending attendence"
];

const Card: FC<{ pendingAttendance: PendingAttendance }> = ({ pendingAttendance }): JSX.Element => {
  const [tableColVal, setTableColVal] = useState<Array<Array<string | number>>>(
    [[]]
  );

  const eventOptions = ['Event A', 'Event B', 'Event C'];

  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (event: string) => {
    setSelectedEvent(event);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Table tableRowVal={tableRowVal} tableColVal={tableColVal} />
      <div className="card border-2 border-gray-700 rounded-md flex justify-between items-center mt-5">
        <div className="attendance-info">
          <h3 className='mt-2 ml-4'>{pendingAttendance.SubName}</h3>
        </div>

        <div className="attendance-info flex flex-row-reverse mr-4">
          <label className='ml-3'> attendence need to be given:</label>
          
          <div className={`dropdown-toggle ${dropdownOpen ? 'open' : ''}`} onClick={handleDropdownToggle}>
            {selectedEvent ? (
              <span className='flex'>{selectedEvent}</span>
            ) : (
              <span> Total Count</span>
            )}
          </div>
        </div>

        <div className="dropdown" ref={dropdownRef}>
          {dropdownOpen && (
            <div className="dropdown-options ">
              <ul>
                <li onClick={() => handleOptionClick(pendingAttendance.COUNT.toString())}>
                  {pendingAttendance.COUNT} attendances
                </li>
              </ul>
              {selectedEvent && (
                <div className="event-details">
                  <ul>
                    {eventOptions.map((event, index) => (
                      <li key={index} onClick={() => handleOptionClick(event)}>
                        {Math.ceil(pendingAttendance.COUNT / eventOptions.length)} for {event}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Page: FC = (): JSX.Element => {
  const dummyPendingAttendance: PendingAttendance = {
    SubName: 'DataBase Management System',
    COUNT: 6,
  };

  return (
    <div>
      <Card pendingAttendance={dummyPendingAttendance} />
    </div>
  );
};

export default Page;
