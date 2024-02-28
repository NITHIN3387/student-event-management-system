import React, { FC } from "react";
import PendingLogo from "@/assets/icons/PendingLogo";
import LocationIcon from "@/assets/icons/LocationIcon";
import DateIcon from "@/assets/icons/DateIcon";

interface propsType {
  event: {
    AWARD: string | null;
    CERTIFICATE: string | null;
    EID: number;
    ENAME: string;
    END_DATE: string;
    EPLACE: string;
    ETYPE: string;
    SID: string;
    START_DATE: string;
    STATUS: string;
  };
}

const EventHistoryCard: FC<propsType> = ({ event }): JSX.Element => {
  return (
    <div className="bg-white p-4 rounded-lg grid gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">
          {event.ENAME}
          <span className="text-slate-500 text-[0.5em] ml-3">
            {`(${event.ETYPE})`}
          </span>
        </h1>
        <div className="flex items-center gap-1 text-[0.85em] border px-2 py-1 rounded-s-full rounded-e-full border-slate-500 text-slate-500">
          <PendingLogo height={15} width={15} />
          <span>{event.STATUS}</span>
        </div>
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

      <div className="flex justify-between mt-2">
        {event.CERTIFICATE ? (
          <button className="bg-primary-color text-white px-2 py-1 rounded-md">
            View Certificate
          </button>
        ) : (
          <button className="bg-primary-color text-white px-2 py-1 rounded-md">
            Update Certificate
          </button>
        )}
        <div className="flex gap-3">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Edit
          </button>
          <button className="bg-red-500 text-white px-2 py-1 rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventHistoryCard;
