import React, { FC } from "react";

interface Props {}

const PageContainer: FC<Props> = (props) => {
  return (
    <div className="md:my-8 md:mx-32 md:rounded-md p-8 md:px-32 md:py-12 bg-white box-border">
      {props.children}
    </div>
  );
};

export default PageContainer;
