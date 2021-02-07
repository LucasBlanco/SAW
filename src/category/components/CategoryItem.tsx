import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
interface Props {
  icon: () => React.ReactNode;
  text: () => React.ReactNode;
}

const CategoryItem = (props: Props) => {
  return (
    <div className="flex items-center w-full shadow-md rounded-md p-4">
      {props.icon()}
      <div className="ml-5">{props.text()}</div>
      <KeyboardArrowRightIcon className="ml-auto text-primary-500" />
    </div>
  );
};

export default CategoryItem;
