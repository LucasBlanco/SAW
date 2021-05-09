import {TextField} from "formik-material-ui";
import AuthLayout from "auth/components/AuthLayout";
import React, { useState } from "react";
import Button from "vadiun-button"

import ForgotPasswordIlustration from "../../assets/forgot-password.svg";
import * as Yup from "yup";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {AuthContextType} from "auth/services/AuthService";
import Logo from "../../assets/logo.png";

interface FormSchema {
  email: string;
}

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("El email es invalido")
    .required("El email es requerido"),
});
interface Props {
  authSrv: AuthContextType;
}

const ForgotPasswordPage = (props: Props) => {
  const [successEmailEmition, setSuccessEmailEmition] = useState(false);

  const submit = async (
    value: FormSchema,
    formikHelpers: FormikHelpers<FormSchema>
  ) => {
    await props.authSrv.forgotPassword(value.email);
    setSuccessEmailEmition(true);
    formikHelpers.resetForm();
  };

  return (
    <AuthLayout
      ilustration={ForgotPasswordIlustration}
      title="Forgot Password"
      subtitle="Dont worry, we'll send you and email to recover your password."
      logo={Logo}
    >
      <div className="max-w-xl flex flex-col items-center w-full md:w-1/2 h-60 ">
        <h1 className="text-center font-bold text-2xl my-4">
          Forgot password?
        </h1>
        <div
          className={
            "w-full transition" + (successEmailEmition ? " animate-shrink" : "")
          }
        >
          <p className="font-bold text-gray-500">
            Enter you email to reset your password
          </p>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={Schema}
            onSubmit={submit}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  className="bg-white"
                  name="email"
                  component={TextField}
                />
                <div className="w-full my-8">
                  <Button
                    className="w-full"
                    variant="contained"
                    disabled={isSubmitting}
                  >
                    Send email
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div
          className={
            successEmailEmition
              ? "transition delay-300 duration-300 ease-in-out"
              : "transform h-0 scale-0"
          }
        >
          <p className="text-center mb-12">
            We have send you and email with the instructions to recover your
            account
          </p>
          <Button className="w-full" variant="contained">
            Got it!
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
