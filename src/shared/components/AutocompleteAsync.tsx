import { CircularProgress, TextField } from "@material-ui/core";
import { AutocompleteInputChangeReason } from "@material-ui/lab";
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
} from "formik-material-ui-lab";
import React, { useEffect, useRef, useState } from "react";
import { createTrue } from "typescript";

function AutocompleteAsync<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(
  props: Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    "options"
  > & {
    onChange?: (value: T | T[]) => void;
    fetchOptions: (text: string) => Promise<T[]>;
  }
) {
  const { field, form, meta } = props;
  const [options, setOptions] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { onChange, ...otherProps } = props;
  const debounce = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    onChange && onChange(field.value);
  }, [field.value, onChange]);

  function handleInputChange(
    event: any,
    value: string,
    reason: AutocompleteInputChangeReason
  ) {
    if (reason === "input") {
      setIsLoading(true);
      clearTimeout(debounce.current!);
      debounce.current = setTimeout(async () => {
        const response = await props.fetchOptions(value);
        setOptions(response);
        setIsLoading(false);
      }, 1000);
    }
  }

  return (
    <Autocomplete
      {...otherProps}
      options={options}
      filterOptions={props.filterOptions || ((options) => options)}
      onInputChange={handleInputChange}
      renderInput={(params: AutocompleteRenderInputParams) => {
        const baseInput = props.renderInput(params);
        if (React.isValidElement(baseInput)) {
          return React.cloneElement(baseInput, {
            InputProps: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          });
        }
      }}
    />
  );
}

export default AutocompleteAsync;
