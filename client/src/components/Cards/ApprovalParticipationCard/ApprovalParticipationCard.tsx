"use client";

import React, { FC, useState } from "react";
import LocationIcon from "@/assets/icons/LocationIcon";
import DateIcon from "@/assets/icons/DateIcon";

interface propsType {
  event: {
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
  };
  showAttendence: (sid: string) => void;
  showMarks: (sid: string) => void;
  viewImage?: (image: string) => void;
  handleStatus: (pid: number, status: string)  => void
}

const ParticipationCard: FC<propsType> = ({ event, showAttendence, showMarks, viewImage, handleStatus }): JSX.Element => {
  return (
    <div className="bg-white p-4 rounded-lg grid gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">
          {event.ENAME}
          <span className="text-slate-500 text-[0.5em] ml-3">
            {`(${event.ETYPE})`}
          </span>
        </h1>
      </div>

      <div className="flex items-center gap-1">
        <LocationIcon height={20} width={20} />
        <p>{event.EPLACE}</p>
      </div>

      <div className="flex items-center gap-1 text-[0.9em] text-slate-600">
        <DateIcon height={20} width={20} />
        <span>{event.START_DATE.split("T")[0]}</span>
        <span>To {event.END_DATE.split("T")[0]}</span>
      </div>

      <div className="flex items-center gap-1 text-[0.9em] text-slate-400">
        <span>{`Participating by ${event.SNAME} (${event.SID})`}</span>
      </div>

      <div className="flex justify-between mt-2">
        {/* {!true ? ( */}
        {event.STATUS === "Pending" ? (
          <button className="bg-primary-color text-white px-2 py-1 rounded-md" onClick={() => handleStatus(event.PID, "Approved")}>
            Approve
          </button>
        ) : (
          <button className="bg-primary-color text-white px-2 py-1 rounded-md" onClick={() => handleStatus(event.PID, "Varified")}>
            Varify
          </button>
        )}
        <div className="flex gap-3">
          {event.STATUS === "Approved" && (
            <button
              className="bg-yellow-500 text-white px-2 py-1 rounded-md"
              onClick={() => viewImage ? viewImage(event.CERTIFICATE) : null}
            >
              View Certificate
            </button>
          )}
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => showMarks(event.SID)}>
            Marks
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md"
            onClick={() =>  showAttendence(event.SID)}
          >
            Attendence
          </button>
        </div>
      </div>
      {/* {viewImage && (
        <ImageViewModel file={event.CERTIFICATE} setViewImage={setViewImage} />
      )} */}
    </div>
  );
};

export default ParticipationCard;
