import { ExampleModel } from "example/models/Example";
import React from "react";
import MUIDataTable from "mui-datatables";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "vadiun-button"
interface Props {
  examples: ExampleModel[];
  selectToEdit: (x: ExampleModel) => void;
  delete: (x: ExampleModel) => void;
}

const TableExample = (props: Props) => {
  const find = (id: number) => props.examples.find((x) => x.id === id);

  const findAndDelete = (id: number) => props.delete(find(id)!);
  const findAndEdit = (id: number) => props.selectToEdit(find(id)!);

  const columns = [
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "password",
      label: "Password",
    },
    {
      name: "fromDate",
      label: "From",
    },
    {
      name: "toDate",
      label: "To",
    },
    {
      label: "Actions",
      name: "id",
      options: {
        customBodyRender: (id: number) => (
          <div style={{ display: "flex" }}>
            <Button onClick={() => findAndEdit(id)} shape="circle">
              <CreateIcon fontSize="small" />
            </Button>
            <IconButton onClick={() => findAndDelete(id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        ),
      },
    },
  ];

  return (
    <MUIDataTable
      options={{
        elevation: 0,
      }}
      title={"Employee List"}
      data={props.examples}
      columns={columns}
    />
  );
};

export default TableExample;
