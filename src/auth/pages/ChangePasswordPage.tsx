import TextField from "@material-ui/core/TextField";
import AuthLayout from "auth/components/AuthLayout";
import React from "react";
import Button from "vadiun-button"
import ChangePasswordIlustration from "../../assets/change-password.svg";
import Logo from "../../assets/logo.png";

interface Props {}

const ChangePasswordPage = (props: Props) => {
  return (
    <AuthLayout
      ilustration={ChangePasswordIlustration}
      title="Change Password"
      subtitle="Just one more step to recover you account."
      logo={Logo}
    >
      <div className="max-w-xl flex flex-col items-center">
        <h1 className="text-center font-bold text-2xl my-4">Change password</h1>
        <p className="font-bold text-gray-500">
          Enter your new password and repeat it
        </p>

        <form autoComplete="new-password" className="mt-8">
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            className="bg-white"
          />
          <TextField
            label="Repeat password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            className="bg-white"
          />
        </form>
        <div className="w-full my-8">
          <Button className="w-full" variant="contained">
            Save
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ChangePasswordPage;
