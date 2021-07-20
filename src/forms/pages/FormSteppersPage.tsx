import PageContainer from "layout/components/PageContainer";
import React, { useState } from "react";
import { Stepper, SideStepper } from "@vadiun/react-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faEdit,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@vadiun/react-components";
import Card from "../../shared/components/Card/Card";

interface Props {}

const FormSteppersPage = (props: Props) => {
  const [step1, setStep1] = useState(0);
  const [step2, setStep2] = useState(0);

  return (
    <PageContainer>
      <Card className="w-full">
        <div className="p-8">
          <Stepper.Container value={step1}>
            <Stepper.Step value={0} title="Step1" description="Description 1" />
            <Stepper.Step value={1} title="Step2" description="Description 2" />
            <Stepper.Step value={2} title="Step3" description="Description 3" />
          </Stepper.Container>
          <div className="flex justify-between">
            <Button onClick={() => setStep1((step) => Math.max(step - 1, 0))}>
              Previous
            </Button>
            <Button onClick={() => setStep1((step) => Math.min(step + 1, 2))}>
              Next
            </Button>
          </div>
          <SideStepper.Container value={step2}>
            <SideStepper.Step
              value={0}
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              label="Usuario"
            />
            <SideStepper.Step
              value={1}
              icon={<FontAwesomeIcon icon={faUser} />}
              label="Datos Personales"
            />
            <SideStepper.Step
              value={2}
              icon={<FontAwesomeIcon icon={faEdit} />}
              label="Modificacion"
            />
            <SideStepper.Step
              value={3}
              icon={<FontAwesomeIcon icon={faAddressCard} />}
              label="Ubicacion"
            />
          </SideStepper.Container>
          <div className="flex justify-between">
            <Button onClick={() => setStep2((step) => Math.max(step - 1, 0))}>
              Previous
            </Button>
            <Button onClick={() => setStep2((step) => Math.min(step + 1, 3))}>
              Next
            </Button>
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default FormSteppersPage;
