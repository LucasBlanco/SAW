import React from "react";
import Button from "shared/Button";
import Person from "assets/person.jpeg";
import TextField from "@material-ui/core/TextField";

const PersonalInformation = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="justify-between hidden md:flex">
        <h2 className="text-lg">My account</h2>
        <Button variant="contained">Save</Button>
      </div>
      <div className="flex md:mt-10">
        <div
          className="rounded-full w-20 h-20 md:w-32 md:h-32 bg-cover bg-no-repeat bg-center flex-shrink-0 mr-10 hidden md:block"
          style={{ backgroundImage: `url(${Person})` }}
        />
        <form
          className="flex flex-col w-full min-h-full"
          noValidate
          autoComplete="off"
        >
          <div className="my-5">
            <TextField label="Username" fullWidth />
          </div>
          <div className="my-5">
            <TextField label="First name" fullWidth />
          </div>
          <div className="my-5">
            <TextField label="Last name" fullWidth />
          </div>
        </form>
      </div>
      <div className="md:hidden mt-auto">
        <Button variant="contained" className="w-full">
          Save
        </Button>
      </div>
    </div>
  );
};

export default PersonalInformation;
