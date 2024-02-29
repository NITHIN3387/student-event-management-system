"use client"
import React, { FC, useState } from 'react';

interface Subject {
  subId: string;
  subName: string;
  totalClasses: number;
  attendedClasses: number;
  selectedEvent: string;
}

const Page: FC = (): JSX.Element => {
  const subjects: Subject[] = [
    { subId: '1', subName: 'Math', totalClasses: 20, attendedClasses: 15, selectedEvent: 'Synergia' },
    { subId: '2', subName: 'Science', totalClasses: 18, attendedClasses: 12, selectedEvent: 'Hackathon' },
  ];

  const [displayTable, setDisplayTable] = useState<boolean>(false);
  const [displayPendingTable, setDisplayPendingTable] = useState<boolean>(false);
  const [pendingAttendance, setPendingAttendance] = useState<number>(0);
  const [totalAttendanceClicked, setTotalAttendanceClicked] = useState<boolean>(false);

  const eventOptions: { name: string; attendances: number }[] = [
    { name: 'Synergia', attendances: 2 },
    { name: 'Hackathon', attendances: 3 },
    
  ];

  const calculateAverageAttendance = (): number => {
    const totalAttendance = subjects.reduce((total, subject) => total + (subject.attendedClasses / subject.totalClasses), 0);
    return totalAttendance / subjects.length;
  };

  const handleTotalAttendanceClick = (): void => {
    setDisplayTable(true);
    setDisplayPendingTable(false);
    setTotalAttendanceClicked(true);
  };

  const handlePendingAttendanceClick = (): void => {
    setDisplayPendingTable(true);
    setDisplayTable(false);
    setTotalAttendanceClicked(true);
    const totalPendingAttendance = subjects.reduce((totalPending, subject) => {
      const pendingForSubject = subject.totalClasses - subject.attendedClasses;
      return totalPending + pendingForSubject;
    }, 0);

    setPendingAttendance(totalPendingAttendance);
  };

  const handleEventChange = (subjectIndex: number, event: string): void => {
    const updatedSubjects = [...subjects];
    updatedSubjects[subjectIndex].selectedEvent = event;
    subjects[subjectIndex].selectedEvent = event;
  };

  return (
    <div>
      <button
        className={`p-2 rounded-full ${totalAttendanceClicked ? 'bg-dark-green bg-green-400' : 'text-green-900'} mr-4`}
        onClick={handleTotalAttendanceClick}
      >
        Total Attendance
      </button>
      <button
        className={`p-2 rounded-full ${displayPendingTable ? 'bg-dark-green bg-green-400' : ' text-green-900'} mr-4`}
        onClick={handlePendingAttendanceClick}
      >
        Pending Attendance
      </button>

      {displayTable && (
        <div>
          <table className="border-collapse border-2 border-gray-500 mt-5">
            <thead>
              <tr>
                <th className="border border-gray-500 p-3">Sub ID</th>
                <th className="border border-gray-500 p-3">Sub Name</th>
                <th className="border border-gray-500 p-3">Total Classes</th>
                <th className="border border-gray-500 p-3">Attended Classes</th>
                <th className="border border-gray-500 p-3">Average Attendance</th>
                <th className="border border-gray-500 p-3">Select Event</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={subject.subId}>
                  <td className="border border-gray-500 p-2">{subject.subId}</td>
                  <td className="border border-gray-500 p-2">{subject.subName}</td>
                  <td className="border border-gray-500 p-2">{subject.totalClasses}</td>
                  <td className="border border-gray-500 p-2">{subject.attendedClasses}</td>
                  <td className="border border-gray-500 p-2">{(subject.attendedClasses / subject.totalClasses).toFixed(2)}</td>
                  <td className="border border-gray-500 p-2">
                    <select
                      value={subject.selectedEvent}
                      onChange={(e) => handleEventChange(index, e.target.value)}
                    >
                      <option value="">Select Event</option>
                      {eventOptions.map((event, index) => (
                        <option key={index} value={event.name}>
                          {`${event.name} (${event.attendances} attendances)`}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Average Attendance: {calculateAverageAttendance().toFixed(2)}</p>
        </div>
      )}

      {displayPendingTable && (
        <div>
          <h2>Pending Attendance</h2>
          {subjects.map((subject) => (
            <div key={subject.subId} className="border border-gray-500 p-3 mb-3">
              <p>Subject ID: {subject.subId}</p>
              <p>Pending Attendance: {subject.totalClasses - subject.attendedClasses}</p>
              <p>
                Event:
                <select
                  value={subject.selectedEvent}
                  onChange={(e) => handleEventChange(subjects.findIndex((s) => s.subId === subject.subId), e.target.value)}
                >
                  <option value="">Event participated</option>
                  {eventOptions.map((event, index) => (
                    <option key={index} value={event.name}>
                      {`${event.name} (${event.attendances} attendances)`}
                    </option>
                  ))}
                </select>
              </p>
            </div>
          ))}
          <p>Total Pending Attendance: {pendingAttendance}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
