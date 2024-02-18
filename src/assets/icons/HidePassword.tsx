import { FC } from "react"

interface propsType {
  width?: number,
  height?: number,
  className?: string
}

const HidePassword: FC<propsType> = ({ width, height, className }) => {
  return (
    <svg width={width || 50} height={height || 50} className={className} xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 640 640"><path fill-opacity=".6" d="M332.8 160.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m149.1 65c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m-9 9c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3M138 271.5c-2.4 2.5-4.2 4.5-3.9 4.5s2.5-2 4.9-4.5 4.2-4.5 3.9-4.5-2.5 2-4.9 4.5m261.4 36.7-2.9 3.3 3.3-2.9c3-2.8 3.7-3.6 2.9-3.6-.2 0-1.6 1.5-3.3 3.2m-6.5 6.5-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m108 54-3.4 3.8 3.8-3.4c2-1.9 3.7-3.6 3.7-3.8 0-.8-.8 0-4.1 3.4m-179.5 17.5-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9m-9.5 9.5c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-9 9-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m-5.5 5.5-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9m-35.5 35.5-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m70.9 34c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6"/><path fill-opacity=".7" d="M528 253.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m-384.1 12.3c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-12 12c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m374 86c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-10 10c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7M115.5 391c3.3 3.3 6.2 6 6.4 6 .3 0-2.1-2.7-5.4-6s-6.2-6-6.4-6c-.3 0 2.1 2.7 5.4 6"/><path fill-opacity=".8" d="M309.8 160.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m18 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m-206.9 83-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m401.6 4.3c2.7 2.7 5.1 5 5.4 5s-1.7-2.3-4.4-5c-2.7-2.8-5.1-5-5.4-5s1.7 2.2 4.4 5m-411.6 5.7-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7M502 272.2c4.1 4.5 5 5.3 5 4.5 0-.2-2.1-2.3-4.7-4.7l-4.8-4.5zm-86.9 43.4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m93.8 45.1c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-16 16c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m34.5 10.5-2.9 3.3 3.3-2.9c1.7-1.7 3.2-3.1 3.2-3.3 0-.8-.8-.1-3.6 2.9m-9.5 9.5-2.4 2.8 2.8-2.4c1.5-1.4 2.7-2.6 2.7-2.8 0-.8-.8-.1-3.1 2.4m-203.1 19c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m-4.5 64c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5s-2.7.2-1.7.5m17.5 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6"/><path fill-opacity=".9" d="m459 158.7-26.5 26.8 26.8-26.5c24.8-24.6 27.2-27 26.4-27-.1 0-12.1 12-26.7 26.7M330.5 331.2l-177 177.3 177.3-177C428.2 234.2 508 154.4 508 154.3q0-.3-.3-.3c-.1 0-79.9 79.8-177.2 177.2m-17.2-170.5c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5s-2.7.2-1.7.5m10 0c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5m68.7 64.8-16.5 17 17-16.7c9.3-9.2 16.7-16.9 16.5-17-.3-.2-7.9 7.3-17 16.7m-75.2-.8c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m5 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m-183.9 4c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-7 6c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m378.6 1.3c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m-393.6 12.7-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m135.5 4.5-2.9 3.3 3.3-2.9c1.7-1.7 3.2-3.1 3.2-3.3 0-.8-.8-.1-3.6 2.9m231.6 1.2c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m-333.6 5.8-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m386.1 1.8c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m-433.6 1.7c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m390.1-1.4c0 .2 1.5 1.6 3.3 3.3l3.2 2.9-2.9-3.3c-2.8-3-3.6-3.7-3.6-2.9m-183.5 46.4C284.3 333.1 264.7 353 265 353c.8 0 88.5-87.9 88-88.2-.3-.2-20.3 19.6-44.5 43.9m-32.1-36.5-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9m-5 5-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m237.6 2.3c1.3 1.4 2.6 2.5 2.8 2.5.3 0-.5-1.1-1.8-2.5s-2.6-2.5-2.8-2.5c-.3 0 .5 1.1 1.8 2.5m-382.6 3.7-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m390.6 5.2c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3M224.3 320c0 2.5.2 3.5.4 2.2.2-1.2.2-3.2 0-4.5-.2-1.2-.4-.2-.4 2.3m191 .5c0 2.2.2 3 .4 1.7.2-1.2.2-3 0-4-.3-.9-.5.1-.4 2.3M64.2 320c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3m510.9-.4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3M120 349.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m392.4 7.8-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2M137 367.5c4.7 4.7 8.7 8.5 9 8.5.2 0-3.3-3.8-8-8.5s-8.7-8.5-9-8.5c-.2 0 3.3 3.8 8 8.5m405.9 2.2c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3M96 369.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m440.9 7.3c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3M104 378.5c1.3 1.4 2.6 2.5 2.8 2.5.3 0-.5-1.1-1.8-2.5s-2.6-2.5-2.8-2.5c-.3 0 .5 1.1 1.8 2.5m117.5 17.7-20 20.3 20.3-20c11.1-11 20.2-20.1 20.2-20.2 0-.8-1.9 1.1-20.5 19.9m267.9-16-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2M153 382.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m233.9 5.3-2.4 2.8 2.8-2.4c1.5-1.4 2.7-2.6 2.7-2.8 0-.8-.8-.1-3.1 2.4m135.5 4.5-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9M128.5 403c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m379.9 2.2-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9m-7.5 6.5c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-183.1 4c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m4 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m-167.3 47.5-23 23.3 23.3-23c12.7-12.6 23.2-23.1 23.2-23.2 0-.8-2.1 1.3-23.5 22.9m161.3 16.5c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5m7.5 0c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5"/><path fill-opacity=".1" d="m459 157.7-26.5 26.8 26.8-26.5c24.8-24.6 27.2-27 26.4-27-.1 0-12.1 12-26.7 26.7m47-26.3c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m-12.5 37.8-9 9.3 9.3-9c8.5-8.3 9.7-9.5 8.9-9.5-.1 0-4.3 4.2-9.2 9.2m-12.1 12-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m-167.6 11.5c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m155.1 1c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-6.5 6.5-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9m-6 6-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9m-64.9 19-16 16.3 16.3-16c8.9-8.8 16.2-16.1 16.2-16.2 0-.8-1.7.9-16.5 15.9m51.4-5.5c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-6 6c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-9 9c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m-7 7-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m-305.4 6.5-6 6.3 6.3-6c3.4-3.3 6.2-6.1 6.2-6.2 0-.8-1 .1-6.5 5.9m408.5.3c1.3 1.4 2.6 2.5 2.8 2.5.3 0-.5-1.1-1.8-2.5s-2.6-2.5-2.8-2.5c-.3 0 .5 1.1 1.8 2.5m-275.1 6.2c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m156.5 2.5-2.9 3.3 3.3-2.9c1.7-1.7 3.2-3.1 3.2-3.3 0-.8-.8-.1-3.6 2.9m-257.5 5.5c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m250 2-3.4 3.8 3.8-3.4c3.4-3.3 4.2-4.1 3.4-4.1-.2 0-1.9 1.7-3.8 3.7m-47.5 0c.9 1-84.5 86.3-85.7 85.6-.6-.4-.7-.1-.2.7s14.3-12.3 44.1-42.1c38-38 44.4-44.9 41.7-44.9-.4 0-.3.3.1.7m150.6 7.8c3 3 5.7 5.5 5.9 5.5.3 0-1.9-2.5-4.9-5.5s-5.7-5.5-5.9-5.5c-.3 0 1.9 2.5 4.9 5.5m-117.6 6.7-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m-254.5 2.5c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m247.5 4.5-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m-10.5 10.5c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m-11.5 11.5-2.9 3.3 3.3-2.9c3-2.8 3.7-3.6 2.9-3.6-.2 0-1.6 1.5-3.3 3.2m-6.5 6.5-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m-15.4 15.5-7 7.3 7.3-7c6.7-6.4 7.7-7.5 6.9-7.5-.1 0-3.4 3.3-7.2 7.2m-11.6 11.5-3.4 3.8 3.8-3.4c2-1.9 3.7-3.6 3.7-3.8 0-.8-.8 0-4.1 3.4m-10 10-3.4 3.8 3.8-3.4c2-1.9 3.7-3.6 3.7-3.8 0-.8-.8 0-4.1 3.4m-10 10-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7M138 367.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m155.9 1.3c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m-8.5 8.5-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9M221 395.5c-10.7 10.7-19.3 19.5-19 19.5s9.3-8.8 20-19.5 19.3-19.5 19-19.5-9.3 8.8-20 19.5m56.9-10.8-3.4 3.8 3.8-3.4c2-1.9 3.7-3.6 3.7-3.8 0-.8-.8 0-4.1 3.4m112 1c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m133.6 6.5-6 6.3 6.3-6c5.8-5.5 6.7-6.5 5.9-6.5-.1 0-2.9 2.8-6.2 6.2m-138.6-1.5c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m-118 5c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-9 9-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m-7.9 7.8c-2.4 2.5-4.2 4.5-3.9 4.5s2.5-2 4.9-4.5 4.2-4.5 3.9-4.5-2.5 2-4.9 4.5m-7.1 7.2c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-8 8c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-5 5c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-76.4 30.5-23 23.3 23.3-23c12.7-12.6 23.2-23.1 23.2-23.2 0-.8-2.1 1.3-23.5 22.9m63.4-17.5-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m94.9 2c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m13 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m-129.9 20c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-10 10-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7M131 506.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m23.9 1.3c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3"/><g stroke-width="0"><path d="M489.5 130.1c-1.1.6-14.2 13.3-29.2 28.2l-27.1 27-8.4-3.5c-16-6.9-37.4-13.4-54.8-16.7-23-4.4-58.6-5.6-82.3-2.6-61.8 7.6-118.8 35.7-167.1 82.5-19.8 19.2-39.1 42.8-50.7 62.2-6.7 11.2-6.7 14.5.1 25.8 21.6 35.4 58.1 73 95.5 98.2 6.6 4.5 12.2 8.3 12.5 8.5.2.2-10.2 11-23.2 24.1-13 13-24.1 24.7-24.7 25.9-1.8 3.5-1.3 10.4.9 14.1 4 6.5 13.3 9.2 19.8 5.8 3.3-1.8 357.5-356.2 359.1-359.3 3.1-6.1.1-15.5-6.1-19.3-3.6-2.2-11-2.6-14.3-.9M358 194.4c13 2.3 27.5 6 40 10.3 5.8 2 10.7 3.7 11 4 .5.5-32.2 33.3-33.3 33.3-.4 0-3.8-1.8-7.4-4-30.7-18.5-70.7-17.4-101.1 2.7-21.4 14.2-37.2 38.6-41.2 63.7-1.8 10.8-.8 31 2 40.6 2.1 7.4 7.8 20.1 12.2 27.2l2.3 3.8-20 20c-11 11-20.7 20-21.7 20-2.3 0-27.5-17-39.8-27-19.6-15.8-41.6-39.2-56.8-60.3l-6.4-8.7 4.8-6.8c14.2-20 36.5-44.4 54.4-59.4 39.9-33.6 83.3-53.5 131.5-60.3 13.8-1.9 56.3-1.4 69.5.9m-22.5 63.1c6.4 1.7 17.5 6.4 17.5 7.4 0 .8-87.3 88.1-88.1 88.1-1 0-5.7-11.1-7.4-17.5-2-7.8-2-23.9.1-31.9 5.5-21.4 23.3-39.5 44.9-45.7 7.9-2.3 24.9-2.5 33-.4m142.8-27.2-11.1 11.2 9 7c18.3 14.1 45.7 43.1 61.2 64.8l4.8 6.7-5.7 7.9c-10.2 14.2-18.8 24.4-31.5 37.5-45.1 46.4-96.7 73.5-154.3 81.1-22.6 2.9-58.8 1.6-78.2-3l-6-1.4-12.8 12.7-12.7 12.7 5.7 1.8c8.7 2.6 33.5 7.5 44.8 8.7 21.3 2.3 52.3 1.2 75.5-2.6 44.1-7.4 91.2-29.2 129.4-60 28.2-22.7 59.1-57.5 74.5-83.9 5.8-9.8 5.7-13.6-.8-24.3-16.9-28.2-51-65.6-79.2-86.9-1.3-1-3.3.6-12.6 10"/><path d="m397.9 310.7-13.6 13.8-1.6 8.2c-4.7 25.2-24.8 45.3-50 50l-8.2 1.6-13.7 13.6c-7.6 7.5-13.8 13.9-13.8 14.2 0 1.3 13.3 3 23.4 3 42.2 0 79-27.8 91.2-68.8 2-6.8 2.7-11.8 3.1-21.9.5-12.3-.9-27.4-2.6-27.4-.3 0-6.7 6.2-14.2 13.7"/></g><path fill-opacity=".5" d="M484.9 222.7c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-97.5 97.5-2.9 3.3 3.3-2.9c1.7-1.7 3.2-3.1 3.2-3.3 0-.8-.8-.1-3.6 2.9M257.9 449.7c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-5 5-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m-7.5 7.5-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2"/><path fill-opacity=".2" d="m504.4 158.2-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9m-28.5 28.5c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m-4 4c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-162.6 2c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5m20.5 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m110.1 30c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m-188 29c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3M493 264.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m14 14c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m-164.6 41.8-2.9 3.3 3.3-2.9c1.7-1.7 3.2-3.1 3.2-3.3 0-.8-.8-.1-3.6 2.9M132 361.3c0 .2 1.5 1.6 3.3 3.3l3.2 2.9-2.9-3.3c-2.8-3-3.6-3.7-3.6-2.9m9 9.1c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m187.3 77.3c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5m-115.4 2c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-5 5-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m-7.5 7.5-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m-20 20-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m-14 14-2.9 3.3 3.3-2.9c3-2.8 3.7-3.6 2.9-3.6-.2 0-1.6 1.5-3.3 3.2"/></svg>
  )
}

export default HidePassword
