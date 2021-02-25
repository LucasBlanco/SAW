import { ExampleModel } from "example/models/Example";
import React from "react";
import ExampleForm from "./ExampleForm";

interface Props {
  initialValue: ExampleModel;
  edit: (x: ExampleModel) => Promise<any>;
}

const EditExample = (props: Props) => {
  return (
    <ExampleForm
      initialValue={props.initialValue}
      submit={props.edit}
    ></ExampleForm>
  );
};

export default EditExample;
