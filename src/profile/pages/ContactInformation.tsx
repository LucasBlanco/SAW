import TextField from "@material-ui/core/TextField";
import React from "react";
import Button from "shared/Button";

interface Props {}

const ContactInformation = (props: Props) => {
  return (
    <div className="flex flex-col h-full">
      <div className="justify-between hidden md:flex">
        <h2 className="text-lg">My account</h2>
        <Button variant="contained">Save</Button>
      </div>

      <form noValidate autoComplete="off" className="flex flex-wrap">
        <div className="my-5 w-full md:w-1/2 md:px-5 box-border">
          <TextField label="URL" fullWidth />
        </div>
        <div className="my-5 w-full md:w-1/2 md:px-5 box-border">
          <TextField label="Phone" fullWidth />
        </div>
        <div className="my-5 w-full md:w-1/2 md:px-5 box-border">
          <TextField label="Facebook" fullWidth />
        </div>
        <div className="my-5 w-full md:w-1/2 md:px-5 box-border">
          <TextField label="Whatsapp" fullWidth />
        </div>
        <div className="my-5 w-full md:w-1/2 md:px-5 box-border">
          <TextField label="Instagram" fullWidth />
        </div>
        <div className="my-5 w-full md:w-1/2 md:px-5 box-border">
          <TextField label="Mail" fullWidth />
        </div>
      </form>
      <div className="md:hidden py-5">
        <Button variant="contained" className="w-full">
          Save
        </Button>
      </div>
    </div>
  );
};

export default ContactInformation;
