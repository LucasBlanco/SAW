import React from "react";
import Person from "assets/person.jpeg";
import StarIcon from "@material-ui/icons/Star";
import GermanyFlag from "assets/germany.png";
import SpainFlag from "assets/spain.png";
import RoomIcon from "@material-ui/icons/Room";
import Button from "shared/Button";
interface Props {}

const AdContact = (props: Props) => {
  return (
    <div className="rounded-md shadow-lg p-4 w-full">
      <div className="flex mb-5">
        <div
          className="rounded-full w-20 h-20 md:w-32 md:h-32 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${Person})` }}
        />
        <div className="md:text-xl flex flex-col items-center flex-grow">
          <h3 className="font-bold">Hairdresser</h3>
          <div className="flex items-center content-between gap-1">
            <span>4.8</span>
            <StarIcon style={{ width: 20 }} />
            <img src={GermanyFlag} width="20" />
            <img src={SpainFlag} width="20" />
          </div>
          <div className="flex items-center">
            <RoomIcon className="text-primary-500 mr-2" />
            <span className="text-sm">Munich</span>
          </div>
        </div>
      </div>
      <p className="font-bold">
        If you decide to call, remembre to mention Trato
      </p>
      <Button variant="contained" className="w-full mt-5 py-1">
        URL platform
      </Button>
      <Button variant="contained" className="w-full mt-5 py-1">
        Facebook
      </Button>
      <Button variant="contained" className="w-full mt-5 py-1">
        Mail
      </Button>
    </div>
  );
};

export default AdContact;
