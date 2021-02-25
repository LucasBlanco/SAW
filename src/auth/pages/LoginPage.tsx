import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "../../assets/google-plus.png";
import LoginIlustration from "../../assets/login.svg";
import AuthLayout from "auth/components/AuthLayout";
interface Props {}

const LoginPage = (props: Props) => {
  return (
    <AuthLayout ilustration={LoginIlustration} title="Welcome to Vadiun">
      <div className="max-w-xl flex flex-col items-center">
        <h1 className="text-center font-bold text-2xl my-4">Login</h1>
        <p>
          Or{" "}
          <span className="font-bold text-primary-600 ">Create an account</span>
        </p>
        <form autoComplete="new-password">
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            className="bg-white"
          />
          <TextField
            label="Password"
            type="password"
            autoComplete="new-password"
            variant="outlined"
            margin="normal"
            fullWidth
            className="bg-white"
          />
        </form>
        <span className="cursor-pointer underline text-primary-600 ml-auto">
          Forgot Password
        </span>
        <div className="w-full my-8">
          <Button
            color="primary"
            style={{ width: "100%", fontWeight: "bold", fontSize: 16 }}
            variant="contained"
            disableElevation
          >
            Login
          </Button>
        </div>
        <p className="text-center text-grey-600 my-5 mt-10">
          Or Connect with Social Media
        </p>
        <div className="flex justify-evenly items-center space-x-2">
          <Button
            variant="contained"
            style={{ backgroundColor: "#4267B2", color: "white" }}
            disableElevation
            startIcon={<FacebookIcon />}
          >
            Facebook
          </Button>
          <Button
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
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
