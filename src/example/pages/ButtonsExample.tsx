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
import Card from "../../shared/components/Card/Card";
import CardHeader from "../../shared/components/Card/CardHeader";


const ButtonsExample = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <PageHeader
                title="Examples"
            />
                    <Card>
                        <div className="p-6">

                        </div>
                    </Card>


        </>

    );
};

export default ButtonsExample;
