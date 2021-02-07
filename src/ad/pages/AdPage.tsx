import React, { useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import GermanyFlag from "assets/germany.png";
import SpainFlag from "assets/spain.png";
import Person from "assets/person.jpeg";

import RoomIcon from "@material-ui/icons/Room";
import Chip from "shared/Chip";
import Button from "shared/Button";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import Dialog from "@material-ui/core/Dialog";
import AdPhotos from "ad/components/AdPhotos";
interface Props {}

const AdPage = (props: Props) => {
  return (
    <>
      <div className="p-10 container shadow-xl h-full overflow-auto">
        <div className="md:flex">
          <div>
            {/* User and stars*/}
            <div className="md:flex flex-grow items-center">
              <div className="flex flex-grow ">
                <div
                  className="rounded-full w-20 h-20 md:w-32 md:h-32 bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${Person})` }}
                />
                <div className="md:text-xl flex flex-col items-center justify-center ml-10">
                  <h3 className="font-bold">Hairdresser</h3>
                  <div className="flex items-center content-between gap-1">
                    <span className="text-sm">Karina M Lef</span>
                    <img src={GermanyFlag} width="20" />
                    <img src={SpainFlag} width="20" />
                  </div>
                  <div className="flex items-center">
                    <RoomIcon className="text-primary-500 mr-2" />
                    <span className="text-sm">Munich</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center my-5 md:my-0">
                <p>4.8 / 5</p>
                <div className="flex gap-1 text-primary-500">
                  <StarIcon style={{ fontSize: 30 }}></StarIcon>
                  <StarIcon style={{ fontSize: 30 }}></StarIcon>
                  <StarIcon style={{ fontSize: 30 }}></StarIcon>
                  <StarIcon style={{ fontSize: 30 }}></StarIcon>
                  <StarOutlineIcon style={{ fontSize: 30 }}></StarOutlineIcon>
                </div>
              </div>
            </div>

            <h3 className="font-bold my-5">About the service</h3>
            <p className="md:mr-44">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis
              consequuntur possimus vero distinctio tempora enim quisquam! Et
              deserunt iure, enim vel aliquam dolore rerum corrupti incidunt
              adipisci officiis atque. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Debitis consectetur consequuntur id qui beatae
              incidunt quaerat natus iste? Fugit enim voluptates beatae sequi
              at, incidunt molestiae omnis! Minima, illo expedita.
            </p>
            <h3 className="font-bold my-5">Photos of the service</h3>
            <AdPhotos />
          </div>

          <div className="shadow-md p-5 rounded-md bg-grey-100 md:ml-10">
            <h3 className="font-bold">Tags</h3>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AdPage;
