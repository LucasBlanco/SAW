import React from "react";
import Header from "../components/Header";
import Subheader from "layout/components/Subheader";
import HeroImg from "layout/components/HeroImg";
import CategoryCard from "category/components/CategoryCard";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import CategoryItem from "category/components/CategoryItem";
import AdCard from "ad/components/AdCard";

const categories = [
  "Design",
  "Marketing",
  "Tutoring",
  "Care giving",
  "Fitness",
  "See all Categories",
];

const Landing = () => {
  return (
    <div>
      <Subheader categories={categories} />
      <HeroImg />
      <div className="container p-5 md:p-0">
        <h2 className="font-bold text-grey-700 my-5 md:my-10 text-xl ">
          Find what you want
        </h2>
        <div className="md:hidden">
          <CategoryItem
            icon={() => <FitnessCenterIcon className=" text-primary-500" />}
            text={() => "Fitness & Wellness"}
          />
          <CategoryItem
            icon={() => <FitnessCenterIcon className=" text-primary-500" />}
            text={() => "Fitness & Wellness"}
          />
        </div>
        <div className=" md:flex flex-wrap gap-8 hidden ">
          <CategoryCard
            header={() => (
              <div className="p-4 flex items-center justify-center">
                <FitnessCenterIcon style={{ fontSize: "2em" }} />
              </div>
            )}
            content={() => "Fitness & Wellness"}
          />
          <CategoryCard
            header={() => (
              <div className="p-4 flex items-center justify-center">
                <FitnessCenterIcon style={{ fontSize: "2em" }} />
              </div>
            )}
            content={() => "Fitness & Wellness"}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
