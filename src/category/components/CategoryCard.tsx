import React from "react";

interface Props {
  header: () => React.ReactNode;
  content: () => React.ReactNode;
}

const CategoryCard = (props: Props) => {
  return (
    <div className="shadow-md rounded-md overflow-hidden">
      <div className="bg-primary-500 text-white p-2 ">{props.header()}</div>
      <div className="p-5">{props.content()}</div>
    </div>
  );
};

export default CategoryCard;
