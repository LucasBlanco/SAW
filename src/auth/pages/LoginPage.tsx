import MUIButton from "@material-ui/core/Button";
import Button from "vadiun-button"
import React, { useState } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "../../assets/google-plus.png";
import LoginIlustration from "../../assets/login.svg";
import AuthLayout from "auth/components/AuthLayout";
import * as Yup from "yup";
import { AuthContextType } from "auth/services/AuthService";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import { Link } from "react-router-dom";

interface FormSchema {
  email: string;
  password: string;
}

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("El email es invalido")
    .required("El email es requerido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(4, "La contraseña debe tener como minimo 4 caracteres"),
});

interface Props {
  authSrv: AuthContextType;
}
const LoginPage = (props: Props) => {
  const initialValues: FormSchema = {
    email: "",
    password: "",
  };

  const submit = async (
    value: FormSchema,
    formikHelpers: FormikHelpers<FormSchema>
  ) => {
    await props.authSrv.login(value);
    formikHelpers.resetForm();
  };

  return (
    <AuthLayout ilustration={LoginIlustration} title="Welcome to Vadiun">
      <div className="max-w-xl flex flex-col items-center">
        <h1 className="text-center font-bold text-2xl my-4">Login</h1>
        <p>
          Or{" "}
          <span className="font-bold text-primary-600 ">Create an account</span>
        </p>
        <Formik
          initialValues={initialValues}
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
              <Field
                label="Password"
                type="password"
                name="password"
                autoComplete="new-password"
                variant="outlined"
                margin="normal"
                fullWidth
                className="bg-white"
                component={TextField}
              />
              <Link
                to="/auth/forgot-password"
                className="cursor-pointer underline text-primary-600 ml-auto"
              >
                Forgot Password
              </Link>
              <div className="w-full my-8">
                <Button
                  color="primary"
                  className="w-full"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </div>
              <p className="text-center text-gray-600 my-5 mt-10">
                Or Connect with Social Media
              </p>
              <div className="flex justify-evenly items-center space-x-2">
                <MUIButton
                  variant="contained"
                  style={{ backgroundColor: "#4267B2", color: "white" }}
                  disableElevation
                  startIcon={<FacebookIcon />}
                >
                  Facebook
                </MUIButton>
                <MUIButton
                  variant="contained"
                  style={{ backgroundColor: "#DD4B39", color: "white" }}
                  disableElevation
                  startIcon={
                    <img
                      alt=""
                      src={GoogleIcon}
                      style={{ width: 20, filter: "invert(1)" }}
                    />
                  }
                >
                  Google
                </MUIButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
