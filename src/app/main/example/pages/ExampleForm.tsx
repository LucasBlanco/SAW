import { Field, Form, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import * as Yup from "yup";
import { ExampleModel } from "app/main/example/models";
import { Button } from "@vadiun/react-components";

const ExampleSchema = Yup.object().shape({
  email: Yup.string()
    .email("El email es invalido")
    .required("El email es requerido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(4, "La contraseña debe tener como minimo 4 caracteres"),
});

interface Props {
  initialValue: ExampleModel;
  submit: (x: ExampleModel) => Promise<any>;
}

export const ExampleForm = (props: Props) => {
  const initialValues = {
    email: props.initialValue.email,
    password: props.initialValue.password,
  };

  const submit = async (value: any, formikHelpers: FormikHelpers<any>) => {
    await props.submit({
      email: value.email,
      password: value.password,
    });
    formikHelpers.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ExampleSchema}
      onSubmit={submit}
    >
      {({ submitForm }) => (
        <div className="flex flex-col">
          <Form className="flex space-x-12">
            <Field
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              component={TextField}
            />
            <Field
              name="password"
              label="Contraseña"
              variant="outlined"
              fullWidth
              margin="normal"
              component={TextField}
            />
          </Form>
          <Button
            variant="contained"
            onClick={submitForm}
            className="ml-auto mt-8"
          >
            Guardar
          </Button>
        </div>
      )}
    </Formik>
  );
};
