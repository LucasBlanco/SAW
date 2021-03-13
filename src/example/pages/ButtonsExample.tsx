import { Field, Form, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import React, { useState } from "react";
import * as Yup from "yup";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ExampleModel } from "example/models/Example";
import dayjs from "dayjs";
import Button from "shared/components/Button";
import PageHeader from "../../layout/components/PageHeader";
import TableExample from "./TableExample";
import PageContainer from "../../layout/components/PageContainer";
import CreateExample from "./CreateExample";
import EditExample from "./EditExample";
import {AddAlarm} from "@material-ui/icons";


const ButtonsExample = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <PageHeader
                title="Examples"
            />

                <PageContainer>
                    <div className="flex flex-row">
                        <Button variant="contained" color="green" className="mr-2"> Green </Button>
                        <Button variant="contained" color="red" className="mr-2"> Red </Button>
                        <Button variant="contained" color="blue" className="mr-2"> Blue </Button>
                        <Button variant="contained" color="yellow" className="mr-2"> Orange </Button>
                    </div>
                    <div className="flex flex-row mt-5">
                        <Button variant="light" color="green" className="mr-2"> Green </Button>
                        <Button variant="light" color="red" className="mr-2"> Red </Button>
                        <Button variant="light" color="blue" className="mr-2"> Blue </Button>
                        <Button variant="light" color="yellow" className="mr-2"> Orange </Button>

                    </div>
                    <div className="flex flex-row mt-5">
                        <Button variant="outlined" color="green" className="mr-2"> Green </Button>
                        <Button variant="outlined" color="red" className="mr-2"> Red </Button>
                        <Button variant="outlined" color="blue" className="mr-2"> Blue </Button>
                        <Button variant="outlined" color="yellow" className="mr-2"> Orange </Button>
                    </div>
                    <div className="flex flex-row mt-5">
                        <Button variant="contained" color="green" className="mr-2" isLoading={true}> Green </Button>
                        <Button variant="light" color="red" className="mr-2" isLoading={true}> Red </Button>
                        <Button variant="outlined" color="blue" className="mr-2" isLoading={true}> Blue </Button>
                        <Button variant="text" color="yellow" className="mr-2" isLoading={true}> Orange </Button>
                    </div>
                    <div className="flex flex-row mt-5">
                        <Button variant="contained" color="green" className="mr-2" disabled={true}> Green </Button>
                        <Button variant="light" color="red" className="mr-2" disabled={true}> Red </Button>
                        <Button variant="outlined" color="blue" className="mr-2" disabled={true}> Blue </Button>
                        <Button variant="text" color="yellow" className="mr-2" disabled={true}> Orange </Button>
                    </div>
                    <div className="flex flex-row mt-5">
                        <Button variant="contained" color="green" className="mr-2" ><AddAlarm className="mr-1"/> Green </Button>
                        <Button variant="light" color="red" className="mr-2" > <AddAlarm className="mr-1"/> Red </Button>
                        <Button variant="outlined" color="blue" className="mr-2" ><AddAlarm className="mr-1"/> Blue </Button>
                        <Button variant="text" color="yellow" className="mr-2" ><AddAlarm className="mr-1"/> Orange </Button>
                    </div>
                </PageContainer>

        </>

    );
};

export default ButtonsExample;
