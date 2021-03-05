import { Fab } from "@material-ui/core";
import React, { useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import { FieldProps, FormikProps } from "formik";

import { faCamera, faEdit, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from ".";

function MUIFileUpload(props: FieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { field, form } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = e.currentTarget.files![0];
    form.setFieldValue(field.name, file);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        ref={inputRef}
        style={{ display: "none" }}
        name="upload-photo"
        type="file"
        onChange={(o) => handleChange(o)}
      />
      <div
        className={`w-32 h-32 bg-grey-100 rounded-md flex items-center justify-center relative ${
          field.value ? "bg-cover bg-center" : "bg-grey-100"
        }`}
        style={
          field.value
            ? {
                backgroundImage: `url(${URL.createObjectURL(field.value)})`,
              }
            : {}
        }
      >
        <Button
          variant="outlined"
          shape="circle"
          className="absolute w-10 h-10 -top-3 -right-3 shadow-md bg-white"
          onClick={() => inputRef.current?.click()}
        >
          <FontAwesomeIcon icon={faPen} />
        </Button>
        <FontAwesomeIcon
          className={`text-grey-300 text-5xl ${
            field.value ? "invisible" : "visible"
          }`}
          icon={faCamera}
        />
      </div>
      {form.errors[field.name] && (
        <p style={{ color: "red" }}>{form.errors[field.name]}</p>
      )}
    </div>
  );
}

export default MUIFileUpload;
