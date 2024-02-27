import React, { FC } from 'react';
import PendingLogo from '@/assets/icons/PendingLogo';
import LocationIcon from '@/assets/icons/LocationIcon';
import DateIcon from '@/assets/icons/DateIcon';

const EventHistoryCard: FC = (): JSX.Element => {
  return (
    <div className="bg-white p-4 rounded-lg grid gap-2">
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl'>Synergia</h1>
        <div className='flex items-center gap-1 text-[0.85em] border px-2 py-1 rounded-s-full rounded-e-full border-slate-500 text-slate-500'>
          <PendingLogo height={15} width={15}/>
          <span>Pending</span>
        </div>
      </div>

      <div className='flex items-center gap-1'>
        <LocationIcon height={20} width={20}/>
        <p>Sahyadri College of Engineering and Management, adyar, mangalore</p>
      </div>

      <div className='flex items-center gap-1 text-[0.9em] text-slate-600'>
        <DateIcon height={20} width={20}/>
        <span>01-01-2024</span>
        <span>To 03-01-2024</span>
      </div>

      <div className='flex justify-between mt-2'>
        <button className='bg-primary-color text-white px-2 py-1 rounded-md'>Update Certificate</button>
        <div className='flex gap-3'>
          <button className='bg-blue-500 text-white px-2 py-1 rounded-md'>Edit</button>
          <button className='bg-red-500 text-white px-2 py-1 rounded-md'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default EventHistoryCard;
