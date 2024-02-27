import React, { FC } from "react";

interface propsType {
  width?: number;
  height?: number;
  className?: string;
}

const DateIcon: FC<propsType> = ({
  width,
  height,
  className,
}): JSX.Element => {
  return (
    <svg width={width || 50} height={height || 50} className={className} fill="currentcolor" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 640 640">
      <path
        fill-opacity=".4"
        d="M193.4 116.5c0 12.6.2 17.7.3 11.2.2-6.5.2-16.8 0-23-.1-6.2-.3-.9-.3 11.8m241 1c0 12.6.2 17.7.3 11.2.2-6.5.2-16.8 0-23-.1-6.2-.3-.9-.3 11.8m30 .5c0 12.9.2 18.2.3 11.7.2-6.4.2-17 0-23.5-.1-6.4-.3-1.1-.3 11.8m98.1 246c0 76.2.1 107.3.2 69.2.2-38 .2-100.4 0-138.5-.1-38-.2-6.9-.2 69.3m-217.1-52c0 11.3.2 15.9.3 10.2.2-5.6.2-14.8 0-20.5-.1-5.6-.3-1-.3 10.3m-160.1 30.7c5.3.2 14.1.2 19.5 0 5.3-.1.9-.3-9.8-.3s-15.1.2-9.7.3m119.5 0c5.6.2 14.8.2 20.5 0 5.6-.1 1-.3-10.3-.3s-15.9.2-10.2.3m120 0c5.6.2 14.8.2 20.5 0 5.6-.1 1-.3-10.3-.3s-15.9.2-10.2.3m-239 74c5.6.2 14.8.2 20.5 0 5.6-.1 1-.3-10.3-.3s-15.9.2-10.2.3m119 0c5.6.2 14.8.2 20.5 0 5.6-.1 1-.3-10.3-.3s-15.9.2-10.2.3m120 0c5.6.2 14.8.2 20.5 0 5.6-.1 1-.3-10.3-.3s-15.9.2-10.2.3M345.4 447c0 11.3.2 15.9.3 10.2.2-5.6.2-14.8 0-20.5-.1-5.6-.3-1-.3 10.3"
      />
      <path
        fill-opacity=".5"
        d="M199.3 193.7c66.4.2 175 .2 241.5 0 66.4-.1 12-.2-120.8-.2s-187.2.1-120.7.2m349.6 336c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7M91.5 535c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2"
      />
      <path
        fill-opacity=".7"
        d="M406 473.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3"
      />
      <path
        fill-opacity=".8"
        d="M128.3 94.7c6.4.2 17 .2 23.5 0 6.4-.1 1.1-.3-11.8-.3s-18.2.2-11.7.3m125.4 0c33.2.2 87.4.2 120.5 0 33.2-.1 6.1-.2-60.2-.2s-93.4.1-60.3.2m223.1 0c6.8.2 17.6.2 24 0 6.4-.1.9-.3-12.3-.3s-18.5.2-11.7.3m71.2 16.7c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3M199.8 225.7c66.8.2 175.7.2 242 0 66.4-.1 11.8-.2-121.3-.2s-187.4.1-120.7.2m-14 55c5.7.2 14.7.2 20 0 5.3-.1.7-.3-10.3-.3s-15.4.2-9.7.3m119 0c5.7.2 14.7.2 20 0 5.3-.1.7-.3-10.3-.3s-15.4.2-9.7.3m121 0c5.7.2 14.7.2 20 0 5.3-.1.7-.3-10.3-.3s-15.4.2-9.7.3m-142.4 30.8c0 11 .2 15.6.3 10.3.2-5.3.2-14.3 0-20-.1-5.7-.3-1.3-.3 9.7m-119 0c0 10.4.2 14.6.3 9.2.2-5.4.2-13.9 0-19-.1-5.1-.3-.7-.3 9.8m119 135.5c0 10.7.2 15.1.3 9.7.2-5.3.2-14.1 0-19.5-.1-5.3-.3-.9-.3 9.8m-119 .5c0 10.4.2 14.6.3 9.2.2-5.4.2-13.9 0-19-.1-5.1-.3-.7-.3 9.8m21.4 31.2c5 .2 13.4.2 18.5 0 5-.1.9-.3-9.3-.3s-14.3.2-9.2.3m119.5 0c5.3.2 14.1.2 19.5 0 5.3-.1.9-.3-9.8-.3s-15.1.2-9.7.3m120 0c5.3.2 14.1.2 19.5 0 5.3-.1.9-.3-9.8-.3s-15.1.2-9.7.3M79.1 503.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m137.7 42.1c54.7.2 143.8.2 198 0 54.3-.1 9.6-.2-99.3-.2s-153.3.1-98.7.2"
      />
      <path
        fill-opacity=".3"
        d="M163.4 116.5c0 12.6.2 17.7.3 11.2.2-6.5.2-16.8 0-23-.1-6.2-.3-.9-.3 11.8m241 195c0 11 .2 15.6.3 10.3.2-5.3.2-14.3 0-20-.1-5.7-.3-1.3-.3 9.7m-178 .5c0 10.7.2 15.1.3 9.7.2-5.3.2-14.1 0-19.5-.1-5.3-.3-.9-.3 9.8m0 135c0 10.7.2 15.1.3 9.7.2-5.3.2-14.1 0-19.5-.1-5.3-.3-.9-.3 9.8m178 .5c0 11 .2 15.6.3 10.3.2-5.3.2-14.3 0-20-.1-5.7-.3-1.3-.3 9.7"
      />
      <path
        fill-opacity=".1"
        d="M547.5 110c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2"
      />
      <path d="M105.3 97.1c-6.2 2.4-15.3 10.3-19 16.6-5.8 10-6.3 13.6-6.3 47.9V193h480.1l-.3-31.8-.3-31.7-2.8-5.8C550.9 112 539 102 525.1 97.3c-6.2-2.1-8.3-2.3-33.3-2.3H465v24.4c0 23.6-.1 24.4-2.2 27.6-3.8 5.5-7.3 7.5-13.3 7.5s-9.5-2-13.2-7.5c-2.2-3.2-2.3-4-2.3-27.6V95H194v24.4c0 23.6-.1 24.4-2.2 27.6-3.2 4.7-6.8 7.1-11.6 7.7-5.7.8-12.1-2.5-15-7.6-2.1-3.7-2.2-5-2.2-28V95l-26.2.1c-23.9 0-26.8.2-31.5 2M80 367.7c0 115.2.3 142.7 1.4 146.8 3.3 12.4 10.9 22 21.4 27.2l5.7 2.8 205 .3c185.3.2 205.5.1 210.4-1.4 17.6-5.1 31.6-17.6 36.1-32.1 2-6.4 2-9 2-145.9V226H80zM218.1 281c1.9.6 4.6 2.2 6 3.6 2.4 2.5 2.4 2.8 2.7 24.9.3 25.1-.2 27.9-6 31.5-3 1.8-5 2-25.4 2-21.4 0-22.2-.1-25.5-2.3-1.9-1.3-3.9-3.8-4.6-5.7-1.3-3.7-1.8-39.2-.7-44.9.8-3.7 5.4-8.8 8.7-9.4 4.6-.9 41.4-.6 44.8.3m119 0c1.9.6 4.6 2.2 6 3.6l2.4 2.6V337l-2.8 2.7-2.7 2.8-23.8.3c-23.5.3-23.8.3-27.2-2-5.5-3.7-6.2-7.2-5.8-31.3.3-20.1.4-21.1 2.6-24.2 1.3-1.8 3.8-3.7 5.5-4.2 4.3-1.3 41.3-1.3 45.8-.1m124 1.3c5.1 3.4 5.4 5.2 5.4 30.1 0 20.7-.2 23.4-1.8 25.8-2.9 4.3-6.3 4.8-29.9 4.8-32.4 0-31 1.4-30.6-32.5.3-23.2.3-23.4 2.7-25.9 1.4-1.5 3.9-3.1 5.5-3.6 1.7-.5 12.8-.8 24.6-.7 18.7.2 21.8.4 24.1 2M221 417.5c5.5 2.9 6 5.2 6 29.2 0 19.8-.2 22.1-2 25-3.9 6.5-5.1 6.8-29 6.8-32.9 0-31.5 1.3-31.5-31.2 0-32.6-1.4-31.3 31.3-31.3 18 0 22.9.3 25.2 1.5m119 0c5.6 2.9 6 5.1 6 30 0 32.7 1.7 31-31.4 31-32.6 0-31.1 1.6-31.1-31.6 0-32.2-1.3-30.9 31.3-30.9 18 0 22.9.3 25.2 1.5m121.1.8c5.5 3.7 6.1 7.1 5.7 31.4-.4 30.2.3 29.6-33.5 29.1-30.3-.4-29.3.7-29.3-31.6 0-32.6-1.5-31.1 31.1-31.2 21.9 0 22.7.1 26 2.3" />
      <path
        fill-opacity=".9"
        d="m91.9 105.7-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m-12.5 59.8c0 15.4.2 21.6.3 13.7.2-7.9.2-20.5 0-28-.1-7.5-.3-1.1-.3 14.3m481 0c0 15.4.2 21.6.3 13.7.2-7.9.2-20.5 0-28-.1-7.5-.3-1.1-.3 14.3M79.5 364c0 76.2.1 107.3.2 69.2.2-38 .2-100.4 0-138.5-.1-38-.2-6.9-.2 69.3m207.4-80.3c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3M466.4 312c0 11.3.2 15.9.3 10.2.2-5.6.2-14.8 0-20.5-.1-5.6-.3-1-.3 10.3M406 338.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m-184 80c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m119 0c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m65.9 1.3c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m59.5 27.3c0 11.3.2 15.9.3 10.2.2-5.6.2-14.8 0-20.5-.1-5.6-.3-1-.3 10.3"
      />
    </svg>
  );
};

export default DateIcon;
