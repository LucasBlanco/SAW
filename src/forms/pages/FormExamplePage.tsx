import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Radio,
  TextField as MUITextField,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Field, FieldArray, Form, Formik, FormikHelpers } from "formik";
import DayJsUtils from "@date-io/dayjs";
import {
  CheckboxWithLabel,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from "formik-material-ui";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "formik-material-ui-pickers";
import PageContainer from "layout/components/PageContainer";
import PageHeader from "layout/components/PageHeader";
import React, { useState } from "react";
import Button from "shared/components/Button";
import * as Yup from "yup";
import ptAr from "dayjs/locale/es";
import dayjs, { Dayjs } from "dayjs";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from "formik-material-ui-lab";
import { FormRepeater, MUIFileUpload } from "shared/components";
import Card from "../../shared/components/Card/Card";
import AutocompleteAsync from "layout/components/AutocompleteAsync";

const ExampleSchema = Yup.object().shape({
  email: Yup.string()
    .email("El email es invalido")
    .required("El email es requerido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(4, "La contraseña debe tener como minimo 4 caracteres"),
  terms: Yup.bool(),
  gender: Yup.string(),
  picture: Yup.mixed().required("La foto es requerida"),
  birthdate: Yup.mixed(),
  repeat: Yup.array(),
});
interface Props {}

const FormExamplePage = (props: Props) => {
  const getOptions = async (text: string) => {
    const movies = [
      { title: "The Shawshank Redemption", year: 1994 },
      { title: "Jurassic Park", year: 1995 },
    ];
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLocaleLowerCase())
    );
  };
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: FormSchema = {
    email: "test@test.com",
    password: "12345678",
    terms: true,
    gender: "male",
    country: "argentina",
    enabled: false,
    birthdate: dayjs(),
    film: "",
    repeat: [""],
    picture: undefined,
  };

  const submit = async (
    value: any,
    formikHelpers: FormikHelpers<FormSchema>
  ) => {
    console.log(value);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      formikHelpers.resetForm();
    }, 2000);
  };

  return (
    <>
      <PageHeader title="Forms" subtitle="Copy and paste form example" />
      <PageContainer>
        <Card className="w-full">
          <div className="p-8">
            <Formik
              initialValues={initialValues}
              validationSchema={ExampleSchema}
              onSubmit={submit}
            >
              {({ submitForm, touched, errors, values }) => (
                <div className="flex flex-col">
                  <Form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Field
                      name="film"
                      component={AutocompleteAsync}
                      getOptionLabel={(option: any) =>
                        option ? option.title : ""
                      }
                      getOptionSelected={(option: any, value: any) =>
                        option.film === value?.film
                      }
                      fetchOptions={getOptions}
                      onChange={console.log}
                      renderInput={(params: AutocompleteRenderInputParams) => (
                        <MUITextField
                          {...params}
                          error={touched["film"] && !!errors["film"]}
                          helperText={errors["film"]}
                          label="Autocomplete"
                          variant="outlined"
                        />
                      )}
                    />
                    <Field
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      component={TextField}
                      size="small"
                    />
                    <Field
                      name="password"
                      label="Contraseña"
                      variant="outlined"
                      component={TextField}
                      size="small"
                    />
                    <Field
                      component={CheckboxWithLabel}
                      type="checkbox"
                      name="terms"
                      color="primary"
                      Label={{ label: "Accept terms and conditions" }}
                    />
                    <Field
                      component={MUIFileUpload}
                      className="aspect-w-3 aspect-h-1 "
                      name="picture"
                    />
                    <Field component={RadioGroup} name="gender">
                      <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio color="primary" />}
                        label="Other"
                      />
                    </Field>
                    <FormControl variant="outlined">
                      <InputLabel>Country</InputLabel>
                      <Field component={Select} name="country" label="Country">
                        <MenuItem value={"argentina"}>Argentina</MenuItem>
                        <MenuItem value={"uruguay"}>Uruguay</MenuItem>
                        <MenuItem value={"paraguay"}>Paraguay</MenuItem>
                      </Field>
                    </FormControl>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Field
                            component={Switch}
                            type="checkbox"
                            name="enabled"
                          />
                        }
                        label="Enabled"
                      />
                    </FormGroup>
                    <MuiPickersUtilsProvider locale={ptAr} utils={DayJsUtils}>
                      <Field
                        component={KeyboardDatePicker}
                        label="Birth Date"
                        name="birthdate"
                        format="DD/MM/YYYY"
                        inputVariant="outlined"
                      />
                    </MuiPickersUtilsProvider>
                    <MuiPickersUtilsProvider utils={DayJsUtils}>
                      <Field
                        component={KeyboardTimePicker}
                        label="Hora"
                        name="hora"
                        inputVariant="outlined"
                        ampm={false}
                      />
                    </MuiPickersUtilsProvider>
                    <Field />
                    <div>
                      <FieldArray
                        name="repeat"
                        render={(arrayHelpers) => (
                          <FormRepeater
                            arrayHelpers={arrayHelpers}
                            createField={() => ""}
                          >
                            {values.repeat.map((value, index) => (
                              <>
                                <Field
                                  name={`repeat.${index}`}
                                  label={`Repeat ${index + 1}`}
                                  variant="outlined"
                                  component={TextField}
                                />
                                <Field
                                  name={`repeat.${index}`}
                                  label={`Repeat ${index + 1}`}
                                  variant="outlined"
                                  component={TextField}
                                />
                              </>
                            ))}
                          </FormRepeater>
                        )}
                      />
                    </div>
                  </Form>
                  <Button
                    variant="contained"
                    onClick={submitForm}
                    className="ml-auto mt-8"
                    isLoading={isLoading}
                  >
                    Guardar
                  </Button>
                </div>
              )}
            </Formik>
          </div>
        </Card>
      </PageContainer>
    </>
  );
};

interface FormSchema {
  email: string;
  password: string;
  terms: boolean;
  gender: "male" | "female" | "other";
  country: string;
  enabled: boolean;
  birthdate: Dayjs;
  film: any;
  repeat: string[];
  picture: File | undefined;
}

export default FormExamplePage;
