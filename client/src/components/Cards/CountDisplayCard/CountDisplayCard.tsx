import React, { FC } from "react";

interface propsType {
  color: string
  heading: string,
  subheading?: string,
  count: number
}

const CountDisplayCard: FC<propsType> = ({ color, heading, subheading, count }) => {
  return (
    <div className='grid grid-cols-[2fr_1fr] bg-white rounded-ee-md rounded-se-md p-3 items-center border-l-[5px]' style={{borderColor: color, color: color}}>
      <div className="text-2xl grid">
        <span className="text-[0.8em]">Total</span>
        <span className="text-[1.15em] font-bold">{heading}</span>
        <span className="text-[1em] font-semibold">{subheading}</span>
      </div>
      <div className="text-[3.5em] font-extrabold text-center">{count}</div>
    </div>
  );
};

export default CountDisplayCard;
