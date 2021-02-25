import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  toolbar?: React.ReactNode;
}

const PageHeader = (props: Props) => {
  return (
    <div className="bg-white px-8  flex justify-between items-center shadow-md h-16">
      <div className="flex space-x-2 items-center">
        <h1 className=" text-lg text-grey-700">{props.title}</h1>
        <div className="border-solid border-grey-300 border-r-2 h-6"></div>
        <h1 className=" text-sm text-grey-500">{props.subtitle}</h1>
      </div>
      <div className="flex space-x-2">{props.toolbar}</div>
    </div>
  );
};
export default PageHeader;
