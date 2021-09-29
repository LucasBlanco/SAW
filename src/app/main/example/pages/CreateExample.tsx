import React from "react";
import { ExampleModel } from "../models";
import { ExampleForm } from ".";
interface Props {
  create: (x: ExampleModel) => Promise<any>;
}

export const CreateExample = (props: Props) => {
  return (
    <ExampleForm
      initialValue={{
        email: "",
        password: "",
      }}
      submit={props.create}
    ></ExampleForm>
  );
};
