import React from "react";
import StarIcon from "@material-ui/icons/Star";
import GermanyFlag from "assets/germany.png";
import SpainFlag from "assets/spain.png";
import Person from "assets/person.jpeg";
import RoomIcon from "@material-ui/icons/Room";
import Chip from "shared/Chip";
import Button from "shared/Button";

interface Props {
  onShowDetails: () => void;
  onContact: () => void;
  toolbar?: React.ReactNode;
}

const AdCard = (props: Props) => {
  return (
    <>
      <div
        className="rounded-md shadow-lg p-4 w-full"
        onClick={props.onShowDetails}
      >
        {props.toolbar && (
          <div className="flex justify-end gap-1">{props.toolbar}</div>
        )}
        <div className="flex">
          <div
            className="rounded-full w-24 h-24 md:w-32 md:h-32 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${Person})` }}
          />
          <div className="md:text-xl flex flex-col items-center justify-center flex-grow ">
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
        <div className="flex gap-2 mt-5">
          <Chip>Fitness</Chip>
          <Chip>Fitness</Chip>
          <Chip>Fitness</Chip>
        </div>
        <div className="flex gap-2 mt-5">
          <Chip className="bg-grey-300 text-black">Fitness</Chip>
          <Chip className="bg-grey-300 text-black">Fitness</Chip>
          <Chip className="bg-grey-300 text-black">Fitness</Chip>
        </div>
        <Button
          variant="contained"
          className="w-full mt-5"
          onClick={(e) => {
            e.stopPropagation();
            props.onContact();
          }}
        >
          Contact
        </Button>
      </div>
    </>
  );
};

export default AdCard;
