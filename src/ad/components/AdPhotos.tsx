import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Ad1 from "assets/ad1.jpg";
interface Props {}

const AdPhotos = (props: Props) => {
  const [photoDetailOpen, setphotoDetailOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap md:mr-44 mb-10">
        <div
          className="w-1/2 p-2 h-32 md:w-44 md:h-32 cursor-pointer"
          onClick={() => setphotoDetailOpen(true)}
        >
          <div
            className="rounded-md w-full h-full bg-cover bg-no-repeat bg-center shadow-sm"
            style={{
              backgroundImage: `url(${Ad1})`,
            }}
          />
        </div>
        <div
          className="w-1/2 p-2 h-32 md:w-44 md:h-32 cursor-pointer"
          onClick={() => setphotoDetailOpen(true)}
        >
          <div
            className="rounded-md w-full h-full bg-cover bg-no-repeat bg-center shadow-sm"
            style={{
              backgroundImage: `url(${Ad1})`,
            }}
          />
        </div>
      </div>
      <Dialog open={photoDetailOpen} onClose={() => setphotoDetailOpen(false)}>
        <img src={Ad1} style={{ width: "100%" }} />
      </Dialog>
    </>
  );
};

export default AdPhotos;
