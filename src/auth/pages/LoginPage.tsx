import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "../../assets/google-plus.png";
interface Props {}

const LoginPage = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="max-w-4xl md:shadow-md rounded-md p-10">
        <h1 className="text-center font-bold text-2xl my-4">Login</h1>
        <form autoComplete="new-password">
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            autoComplete="new-password"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </form>
        <div className="flex justify-end">
          <span className="cursor-pointer underline text-primary-600">
            Forgot Password
          </span>
        </div>
        <p className="text-center text-grey-600 my-5 mt-10">
          Or Connect with Social Media
        </p>
        <div className="flex justify-evenly items-center">
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
    </div>
  );
};

export default LoginPage;
