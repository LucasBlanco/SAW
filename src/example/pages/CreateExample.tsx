import { ExampleModel } from "example/models/Example";
import React from "react";
import ExampleForm from "./ExampleForm";

interface Props {
  create: (x: ExampleModel) => Promise<any>;
}

const CreateExample = (props: Props) => {
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

export default CreateExample;
