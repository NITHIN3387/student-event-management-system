"use client"

import React, { FC, useState } from "react";
import PendingLogo from "@/assets/icons/PendingLogo";
import LocationIcon from "@/assets/icons/LocationIcon";
import DateIcon from "@/assets/icons/DateIcon";
import UpdateCertificateModel from "@/components/Modals/UpdateCertificateModel/UpdateCertificateModel";
import ImageViewModel from "@/components/Modals/ImageViewModel/ImageViewModel";
import { useRouter } from "next/navigation";
import ApprovedIcon from "@/assets/icons/ApprovedIcon";

interface propsType {
  event: {
    AWARD: string | null;
    CERTIFICATE: string | null;
    EID: number;
    ENAME: string;
    END_DATE: string;
    EPLACE: string;
    ETYPE: string;
    PID: number;
    SID: string;
    START_DATE: string;
    STATUS: string;
  };
}

const ParticipationCard: FC<propsType> = ({ event }): JSX.Element => {
  const router = useRouter()

  const [openModel, setOpenModel] = useState<boolean>(false)
  const [viewImage, setViewImage] = useState<boolean>(false)

  const handleDelete = async () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + "/participate/" + event.PID

    const responce = await fetch(url, {
      method: "DELETE",
      credentials: "include"
    })

    if (responce.status === 200)
      router.refresh()
  }

  return (
    <div className="bg-white p-4 rounded-lg grid gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">
          {event.ENAME}
          <span className="text-slate-500 text-[0.5em] ml-3">
            {`(${event.ETYPE})`}
          </span>
        </h1>
        <div className={`
          flex items-center gap-1 text-[0.85em] border px-2 py-1 rounded-s-full rounded-e-full
          ${event.STATUS === "Pending" ? 'border-slate-500 text-slate-500' : event.STATUS == 'Approved' ? 'border-yellow-500 text-yellow-500' : 'border-green-500 text-green-500' }`}>
          {event.STATUS === "Pending" && <PendingLogo height={15} width={15} />}
          {event.STATUS !== "Pending" && <ApprovedIcon height={15} width={15} />}
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
          <button className="bg-primary-color text-white px-2 py-1 rounded-md" onClick={() => setViewImage(true)}>
            View Certificate
          </button>
        ) : (
          <button className="bg-primary-color text-white px-2 py-1 rounded-md" onClick={() => setOpenModel(true)}>
            Update Certificate
          </button>
        )}
        <div className="flex gap-3">
          {/* <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Edit
          </button> */}
          <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {openModel && <UpdateCertificateModel setOpenModel={setOpenModel} pid={event.PID}/>}
      {viewImage && <ImageViewModel file={event.CERTIFICATE} setViewImage={setViewImage}/>}
    </div>
  );
};

export default ParticipationCard;
