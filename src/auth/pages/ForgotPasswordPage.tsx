import TextField from "@material-ui/core/TextField";
import AuthLayout from "auth/components/AuthLayout";
import React from "react";
import Button from "shared/components/Button";
import ForgotPasswordIlustration from "../../assets/forgot-password.svg";

interface Props {}

const ForgotPasswordPage = (props: Props) => {
  return (
    <AuthLayout
      ilustration={ForgotPasswordIlustration}
      title="Forgot Password"
      subtitle="Dont worry, we'll send you and email to recover your password."
    >
      <div className="max-w-xl flex flex-col items-center">
        <h1 className="text-center font-bold text-2xl my-4">
          Forgot password?
        </h1>
        <p className="font-bold text-grey-500">
          Enter you email to reset your password
        </p>

        <form autoComplete="new-password" className="mt-8">
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            className="bg-white"
          />
        </form>
        <div className="w-full my-8">
          <Button className="w-full" variant="contained">
            Send email
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
