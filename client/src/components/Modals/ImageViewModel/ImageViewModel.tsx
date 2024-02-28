"use client";

import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

interface propsType {
  file?: string | null;
  setViewImage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageViewModel: FC<propsType> = ({ file, setViewImage }): JSX.Element => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
      const url =
        process.env.NEXT_PUBLIC_SERVER_URL + "/participate/certificate/" + file;

      const responce = await fetch(url)
        .then((res) => res.blob())
        .then((blob) => URL.createObjectURL(blob));

      setImage(responce);
    };

    getImage();
  }, [file]);

  return (
    <div
      className="absolute h-screen w-full backdrop-blur-sm backdrop-brightness-50 top-0 left-0 flex justify-center items-center"
      id="bg"
      onClick={(event) =>
        (event.target as any).id == "bg" ? setViewImage(false) : null
      }
    >
      <div className="bg-white sm:p-10 p-5 rounded-xl flex flex-col items-center gap-3 text-red-500 w-[80%] h-[80%] relative">
        <Image
          src={image}
          alt="image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ImageViewModel;
