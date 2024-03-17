"use client";

import ApprovalParticipationCard from "@/components/Cards/ApprovalParticipationCard/ApprovalParticipationCard";
import SearchBar from "@/components/Headers/SearchBar/SearchBar";
import TableViewModle from "@/components/Modals/TableViewModel/TableViewModel";
import React, { Fragment, useEffect, useState } from "react";

interface eventType {
  CERTIFICATE: string;
  EID: number;
  ENAME: string;
  END_DATE: string;
  EPLACE: string;
  ETYPE: string;
  PID: number;
  SID: string;
  STATUS: string;
  SNAME: string;
  START_DATE: string;
}

interface attendenceResponceType {
  CONDUCTED: number;
  PRESENT: number;
  SEMESTER: number;
  SID: string;
  SUBID: string;
  SUBNAME: string;
}

interface marksResponceType {
  ASSIGNMENT: number;
  IA1: number;
  IA2: number;
  IA3: number;
  SEMESTER: number;
  SID: string;
  SUBID: string;
  SUBNAME: string;
}

const Page = () => {
  const [search, setSearch] = useState<string>("");
  const [participateEvent, setParticipateEvent] = useState<eventType[]>([]);
  const [tableRowVal, setTableRowVal] = useState<string[]>([]);
  const [tableColVal, setTableColVal] = useState<Array<string | number>[]>([
    [],
  ]);
  const [viewModel, setViewModel] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserParticipateEvent = async () => {
      const URL =
        process.env.NEXT_PUBLIC_SERVER_URL + "/participate/mentees/Pending";

      const responce: eventType[] = await fetch(URL, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());

      setParticipateEvent(
        responce.filter((event) =>
          event.SID.toLowerCase().includes(search.toLowerCase())
        )
      );
    };

    fetchUserParticipateEvent();
  }, [participateEvent]);

  const showAttendence = async (sid: string) => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + "/attendence/" + sid;

    const responce: attendenceResponceType[] = await fetch(url, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());

    setTableRowVal([
      "Subject Name",
      "Total Class",
      "Present",
      "Absent",
      "Percentage",
    ]);

    setTableColVal(
      responce.map((subject) => [
        subject.SUBNAME,
        subject.CONDUCTED,
        subject.PRESENT,
        subject.CONDUCTED - subject.PRESENT,
        parseInt(`${(subject.PRESENT / subject.CONDUCTED) * 100}`),
      ])
    );

    setViewModel(true);
  };

  const showMarks = async (sid: string) => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + "/marks/" + sid;

    const responce: marksResponceType[] = await fetch(url, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());

    setTableRowVal([
      "Subject Name",
      "IA-1",
      "IA-2",
      "IA-3",
      "Assignment",
      "Final",
    ]);

    setTableColVal(
      responce.map((subject) => [
        subject.SUBNAME,
        subject.IA1,
        subject.IA2,
        subject.IA3,
        subject.ASSIGNMENT,
        parseInt(`${(subject.IA1 + subject.IA2 + subject.IA3) / 3}`) +
          subject.ASSIGNMENT,
      ])
    );

    setViewModel(true);
  };

  const handleStatus = async (pid: number, status: string) => {
    const url =
      process.env.NEXT_PUBLIC_SERVER_URL + "/participate/update-status";
    const data = { pid: pid, status: status };

    await fetch(url, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  return (
    <div className="mt-7">
      <SearchBar setSearch={setSearch} />

      <div className="mt-7 grid gap-7">
        {participateEvent.length ? (
          participateEvent.map((event, index) => (
            <Fragment key={index}>
              <ApprovalParticipationCard
                event={event}
                showAttendence={showAttendence}
                showMarks={showMarks}
                handleStatus={handleStatus}
              />
            </Fragment>
          ))
        ) : search.length ? (
          <h1 className="text-center text-3xl font-bold mt-7">
            No Participation Found
          </h1>
        ) : (
          <h1 className="text-center text-3xl font-bold mt-7">
            No Pending events are there by your mentees
          </h1>
        )}
      </div>
      {viewModel && (
        <TableViewModle
          tableRowVal={tableRowVal}
          tableColVal={tableColVal}
          setViewModel={setViewModel}
        />
      )}
    </div>
  );
};

export default Page;
