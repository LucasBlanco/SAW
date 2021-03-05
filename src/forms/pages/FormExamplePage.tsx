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
import { Field, Form, Formik, FormikHelpers } from "formik";
import DayJsUtils from "@date-io/dayjs";
import {
  CheckboxWithLabel,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from "formik-material-ui";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
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

const ExampleSchema = Yup.object().shape({
  email: Yup.string()
    .email("El email es invalido")
    .required("El email es requerido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(4, "La contraseña debe tener como minimo 4 caracteres"),
  terms: Yup.bool(),
  gender: Yup.string(),
  birthdate: Yup.mixed().test(
    "oltherThan18",
    "Must be over 18 years old",
    (value, context) => {
      return !value && (value as Dayjs).isBefore(dayjs().add(-18, "years"));
    }
  ),
});
interface Props {}

const FormExamplePage = (props: Props) => {
  const options = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "Jurassic Park", year: 1995 },
  ];
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
  };

  const submit = async (
    value: any,
    formikHelpers: FormikHelpers<FormSchema>
  ) => {
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
        <Formik
          initialValues={initialValues}
          validationSchema={ExampleSchema}
          onSubmit={submit}
        >
          {({ submitForm, touched, errors }) => (
            <div className="flex flex-col">
              <Form className="grid grid-cols-2 gap-8">
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  component={TextField}
                />
                <Field
                  name="password"
                  label="Contraseña"
                  variant="outlined"
                  component={TextField}
                />
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="terms"
                  color="primary"
                  Label={{ label: "Accept terms and conditions" }}
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
                <Field
                  name="film"
                  component={Autocomplete}
                  options={options}
                  getOptionLabel={(option: any) => option.title}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <MUITextField
                      {...params}
                      error={touched["film"] && !!errors["film"]}
                      helperText={errors["film"]}
                      label="Film"
                      variant="outlined"
                    />
                  )}
                />
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
}

export default FormExamplePage;
