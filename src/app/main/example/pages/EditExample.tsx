import { ExampleModel } from "../models";
import React from "react";
import { ExampleForm } from "./";

interface Props {
  initialValue: ExampleModel;
  edit: (x: ExampleModel) => Promise<any>;
}

export const EditExample = (props: Props) => {
  return (
    <ExampleForm
      initialValue={props.initialValue}
      submit={props.edit}
    ></ExampleForm>
  );
};
