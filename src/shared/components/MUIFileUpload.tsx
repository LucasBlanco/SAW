import { Fab } from "@material-ui/core";
import React, { useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import { FieldProps, FormikProps } from "formik";

import { faCamera, faEdit, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@vadiun/react-components";
import { overrideTailwindClasses } from "tailwind-override";

function MUIFileUpload(props: FieldProps & { className?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { field, form } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length >= 1) {
      const file: File = e.currentTarget.files[0];
      form.setFieldValue(field.name, file);
    }
  };

  const processCustomClassName = () => {
    if (!props.className) {
      return `aspect-w-2 aspect-h-1`;
    }
    const addAspectW = !props.className.includes("aspect-w");
    const addAspectH = !props.className.includes("aspect-h");
    return `${props.className} ${addAspectW ? "aspect-w-2" : ""} ${
      addAspectH ? "aspect-h-1" : ""
    }`;
  };

  const renderImg = () => {
    if (typeof field.value === "string")
      return <img src={field.value} className="object-cover rounded-md" />;
    return (
      <img
        src={URL.createObjectURL(field.value)}
        className="object-cover rounded-md"
      />
    );
  };

  return (
    <div>
      <input
        ref={inputRef}
        style={{ display: "none" }}
        name="upload-photo"
        type="file"
        onChange={(o) => handleChange(o)}
      />
      <div
        className={overrideTailwindClasses(
          `bg-gray-100 rounded-md flex items-center justify-center relative ${processCustomClassName()} `
        )}
      >
        <div
          style={{ left: "calc( 100% - 2rem)", top: "-1rem" }}
          className="absolute w-10 h-10  z-10"
        >
          <Button
            variant="outlined"
            shape="circle"
            type="button"
            className="shadow-md bg-white"
            onClick={() => inputRef.current?.click()}
          >
            <FontAwesomeIcon icon={faPen} />
          </Button>
        </div>
        {field.value ? (
          renderImg()
        ) : (
          <FontAwesomeIcon
            className={`text-gray-300 text-5xl m-auto`}
            icon={faCamera}
          />
        )}
      </div>
      {form.errors[field.name] && (
        <p style={{ color: "red" }}>{form.errors[field.name]}</p>
      )}
    </div>
  );
}

export default MUIFileUpload;
