import TextField from "@material-ui/core/TextField";
import React from "react";
import Button from "shared/Button";
import Person from "assets/person.jpeg";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
interface Props {}

const ProfileDescription = (props: Props) => {
  return (
    <div className="flex flex-col h-full">
      <div className="justify-between hidden md:flex">
        <h2 className="text-lg">My account</h2>
        <Button variant="contained">Save</Button>
      </div>
      <div className="flex md:mt-10">
        <div
          className="rounded-full w-20 h-20 md:w-32 md:h-32 mr-10 bg-cover bg-no-repeat bg-center flex-shrink-0 hidden md:block"
          style={{ backgroundImage: `url(${Person})` }}
        />
        <form className="flex flex-col w-full " noValidate autoComplete="off">
          <div className="my-5">
            <TextField label="Description" multiline rows={3} fullWidth />
          </div>

          <h3 className="text-md">Languages</h3>
          <div className="flex justify-between items-center mt-5">
            <div className="w-1/3 mx-5 ml-0">
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select value={"spanish"} onChange={() => {}}>
                  <MenuItem value={"spanish"}>Spanish</MenuItem>
                  <MenuItem value={"russian"}>Russian</MenuItem>
                  <MenuItem value={"spanish"}>English</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="w-1/3">
              <FormControl fullWidth>
                <InputLabel>Level</InputLabel>
                <Select value={"basic"} onChange={() => {}}>
                  <MenuItem value={"basic"}>Basic</MenuItem>
                  <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"native"}>Native</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex gap-2">
              <Button variant="contained" className="px-1 py-1">
                <RemoveIcon />
              </Button>
              <Button variant="contained" className="px-1 py-1">
                <AddIcon />
              </Button>
            </div>
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

export default ProfileDescription;
