import React, { FC } from "react";

interface propsType {
  data: {
    value: string;
    count: number;
  }[];
  total: number;
}

const colors = [
  "#fb9902",
  "#ff2713",
  "#a6194a",
  "#8701b1",
  "#3e00a5",
  "#0346fe",
  "#0292cf",
  "#66b033",
  "#d1e82b",
  "#fffe34",
];

const PieChart: FC<propsType> = ({ data, total }): JSX.Element => {
  let startIndex = 0;

  const conicGradient = `conic-gradient(${data.map(
    (data, index) =>
      `${colors[index]} ${startIndex}% ${(startIndex +=
        (data.count / total) * 100)}%`
  )})`;

  return (
    <>
      <div
        className="h-[15rem] w-[15rem] rounded-full grid p-7 shadow-inner"
        style={{ backgroundImage: conicGradient }}
      >
        <div className="bg-white rounded-full flex flex-col items-center justify-center text-xl font-semibold text-slate-500 shadow-xl">
          <span>Event</span>
          <span>Participation</span>
        </div>
      </div>
      <div className="grid grid-cols-[auto_auto_auto]">
        {data.map((item, index) => (
          <React.Fragment key={item.value}>
            <div
              className="w-[1rem] h-[1rem]"
              style={{ background: colors[index] }}
            ></div>
            <div>{item.value}</div>
            <div>{item.count}</div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default PieChart;
