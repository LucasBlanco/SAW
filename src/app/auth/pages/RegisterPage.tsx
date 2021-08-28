import { TextField } from "@material-ui/core";
import AuthLayout from "app/auth/components/AuthLayout";
import React, { useState } from "react";
import { Button } from "@vadiun/react-components";
import { Stepper } from "@vadiun/react-components";
import RegisterIlustration from "assets/sign-up.svg";
import Logo from "assets/logo.png";

interface Props {}

const RegisterPage = (props: Props) => {
  const [step, setStep] = useState(1);
  return (
    <AuthLayout
      ilustration={RegisterIlustration}
      title="Sign up to Vadiun"
      subtitle="Make your dreams come true"
      logo={Logo}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <Stepper.Container value={step}>
          <Stepper.Step
            title="Account"
            value={1}
            description="Vadiun account"
          />
          <Stepper.Step
            title="Personal"
            value={2}
            description="Personal information"
          />
          <Stepper.Step
            title="Address"
            value={3}
            description="Residential address"
          />
        </Stepper.Container>

        {step === 1 && (
          <form
            autoComplete="new-password"
            className="flex flex-col max-w-lg mt-8 w-full"
          >
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
            <Button
              variant="contained"
              className="ml-auto mt-8"
              onClick={() => setStep(2)}
            >
              Next <span className="ml-2">{">"}</span>
            </Button>
          </form>
        )}
        {step === 2 && (
          <form
            autoComplete="new-password"
            className="flex flex-col max-w-lg mt-8 w-full"
          >
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
            <div className="flex justify-between mt-8">
              <Button onClick={() => setStep(1)}>
                <span className="mr-2">{"<"}</span>Back
              </Button>
              <Button variant="contained" onClick={() => setStep(3)}>
                Next <span className="ml-2">{">"}</span>
              </Button>
            </div>
          </form>
        )}
        {step === 3 && (
          <form
            autoComplete="new-password"
            className="flex flex-col max-w-lg mt-8 w-full"
          >
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
            <div className="flex justify-between mt-8">
              <Button variant="outlined" onClick={() => setStep(2)}>
                <span className="mr-2">{"<"}</span>Back
              </Button>
              <Button variant="contained" onClick={() => alert("save")}>
                Register
              </Button>
            </div>
          </form>
        )}
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
