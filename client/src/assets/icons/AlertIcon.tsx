import React, { FC } from "react";

interface propsType {
  width?: number,
  height?: number,
  className?: string
}

const AlertIcon: FC<propsType> = ({ width, height, className }): JSX.Element => {
  return (
    <svg width={width || 50} height={height || 50} className={className} xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 339 287">
      <path
        fill="#BF0000"
        fillOpacity=".4"
        d="M166.3 48.7c2 .2 5.4.2 7.5 0 2-.2.3-.4-3.8-.4s-5.8.2-3.7.4m-87 87.3c0 4.1.2 5.8.4 3.7.2-2 .2-5.4 0-7.5-.2-2-.4-.3-.4 3.8m180.9-4c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8m.1 7.5c0 2.2.2 3 .4 1.7.2-1.2.2-3 0-4-.3-.9-.5.1-.4 2.3m-94 84.2c2 .2 5.4.2 7.5 0 2-.2.3-.4-3.8-.4s-5.8.2-3.7.4"
      />
      <path
        fill="#BF0000"
        fillOpacity=".6"
        d="m103.9 75.7-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m131.1-.2c1.3 1.4 2.6 2.5 2.8 2.5.3 0-.5-1.1-1.8-2.5s-2.6-2.5-2.8-2.5c-.3 0 .5 1.1 1.8 2.5m-131 121c1.3 1.4 2.6 2.5 2.8 2.5.3 0-.5-1.1-1.8-2.5s-2.6-2.5-2.8-2.5c-.3 0 .5 1.1 1.8 2.5m130.9.2-2.4 2.8 2.8-2.4c1.5-1.4 2.7-2.6 2.7-2.8 0-.8-.8-.1-3.1 2.4"
      />
      <path
        fill="#BF0000"
        d="M152.1 50.5c-21.6 4.9-40.7 16.3-53.1 31.8-6.5 8.1-13.3 21.3-16.2 31.3-3.3 11.4-3.3 33.4 0 44.8 8.4 29.2 31.3 51.9 61.7 61.2 8.3 2.6 10.3 2.8 25.5 2.8s17.2-.2 25.5-2.8c30.4-9.3 53.3-32 61.7-61.2 3.3-11.4 3.3-33.4 0-44.8-8.4-29.2-31.6-52.2-61.7-61.2-11.2-3.3-32.9-4.3-43.4-1.9m25.8 27.3c1.9.9 4.3 3.3 5.3 5.2 2.3 4.3 2.2 6-3.2 38.7-2.2 13-4 25.1-4 26.8 0 4-1.6 5.5-5.7 5.5-3.7 0-5.3-2.1-5.3-6.9 0-1.7-1.8-14.4-4-28.3-4.9-30.6-5.1-32.9-2.4-36.5 2.6-3.6 8-6.3 12.4-6.3 1.9 0 5 .8 6.9 1.8m-1.1 84.9c5.5 3.4 7.8 12.2 4.7 18.2-3.7 7.2-11 9.9-17.5 6.6-5-2.6-7.7-10.1-6-16.4 2.5-9.6 11-13.3 18.8-8.4"
      />
      <path
        fill="#BF4040"
        d="M179 78.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3M165.2 149c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3m3.6 4.7c1.2.2 3 .2 4 0 .9-.3-.1-.5-2.3-.4-2.2 0-3 .2-1.7.4M157.2 175c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3m2.8 9.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3"
      />
      <path
        fill="#BF8080"
        d="M184.2 89c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3m-9.1 59.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3"
      />
      <path
        fill="#BFBFBF"
        d="M159.9 80.7c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m17.1 82.7c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m5.1 11.2c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m-4.7 10.6-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9m-8.6 3.5c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5"
      />
      <path
        fill="#FFF"
        d="M164.5 78c-1.1.4-3.1 2-4.5 3.5-3.3 3.6-3.2 6.7 1.9 38.6 2.3 14.1 4.1 27.3 4.1 29.3v3.6h4.5c4.3 0 4.5-.2 4.5-2.8 0-1.5 2-15.1 4.5-30.2s4.5-28.9 4.5-30.8c0-4.5-2.4-8.9-6-10.7-3.1-1.6-10.2-1.9-13.5-.5m-.1 84.9c-3.2 2-6.4 8.2-6.4 12.6 0 6.9 5.1 12.5 11.5 12.5 13.4 0 17.4-20.4 5-25.6-4.5-1.9-6.4-1.8-10.1.5"
      />
    </svg>
  );
};

export default AlertIcon;
