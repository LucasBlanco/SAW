import React, { FC } from "react";

interface Props {}

const PageContainer: FC<Props> = (props) => {
  return <div className="page">{props.children}</div>;
};

export default PageContainer;
