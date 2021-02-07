import React, { useState } from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import AdCardContainer from "ad/components/AdCardContainer";
interface Props {}

const Ads = (props: Props) => {
  const scrollItemQuantity = 4;
  function nextCard() {
    const scrollContainer = document.querySelector("#scrollContainer")!;
    scrollContainer!.scrollLeft +=
      scrollContainer.scrollWidth / scrollItemQuantity;
  }

  function previousCard() {
    const scrollContainer = document.querySelector("#scrollContainer")!;
    scrollContainer!.scrollLeft -=
      scrollContainer.scrollWidth / scrollItemQuantity;
  }

  return (
    <>
      <div className="flex items-center justify-center h-full">
        <button
          onClick={previousCard}
          className="rounded-full shadow-lg p-3 cursor-pointer transition duration-300 ease-in-out hover:bg-primary-100 text-primary-500 focus:outline-none"
        >
          <KeyboardArrowLeftIcon />
        </button>
        <div
          className="flex container h-full items-center m-2 md:m-10 overflow-x-scroll"
          id="scrollContainer"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="w-full md:w-1/2 lg:w-1/3 p-5 box-border  flex-shrink-0 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <AdCardContainer />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-5 box-border  flex-shrink-0 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <AdCardContainer />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-5 box-border  flex-shrink-0 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <AdCardContainer />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-5 box-border  flex-shrink-0 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <AdCardContainer />
          </div>
        </div>
        <button
          onClick={nextCard}
          className=" rounded-full shadow-lg p-3 cursor-pointer transition duration-300 ease-in-out hover:bg-primary-100 text-primary-500 focus:outline-none"
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </>
  );
};

export default Ads;
