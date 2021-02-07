import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Button from "shared/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
interface Props {}

const AdCreate = (props: Props) => {
  return (
    <div className="flex flex-col h-full p-10 container shadow-xl overflow-auto">
      <div className="justify-between hidden md:flex mb-10">
        <h2 className="text-xl">Post an ad</h2>
        <Button variant="contained">Save</Button>
      </div>

      <form noValidate autoComplete="off" className="md:flex justify-between">
        <div className="md:w-1/2 flex-shrink-0">
          <div className="my-5 w-full md:px-5 box-border">
            <TextField label="Title" fullWidth />
          </div>
          <div className="my-5 w-full md:px-5 box-border">
            <TextField label="Description" multiline rows={3} fullWidth />
          </div>
          <div className="my-5 w-full md:px-5 box-border flex items-center gap-2">
            <div className="mr-10 w-full">
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select value={"spanish"} onChange={() => {}}>
                  <MenuItem value={"spanish"}>Spanish</MenuItem>
                  <MenuItem value={"russian"}>Russian</MenuItem>
                  <MenuItem value={"spanish"}>English</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button variant="contained" className="px-1 py-1">
              <RemoveIcon />
            </Button>
            <Button variant="contained" className="px-1 py-1">
              <AddIcon />
            </Button>
          </div>
          <div className="my-5 w-full md:w-1/2 md:px-5 box-border">
            <TextField label="Ubication" fullWidth />
          </div>
        </div>
        <div className="md:w-1/3">
          <h1 className="text-md text-primary-500">Photos</h1>
          <div className="w-full h-52 bg-grey-200 rounded-md my-3 md:my-10 text-primary-500 flex">
            <CameraAltIcon className="m-auto" style={{ fontSize: 60 }} />
          </div>
          <Button variant="contained" className="w-full">
            Add photo +
          </Button>
        </div>
      </form>

      <div className="md:hidden py-10">
        <Button variant="contained" className="w-full">
          Save
        </Button>
      </div>
    </div>
  );
};

export default AdCreate;
