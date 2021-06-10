import PageContainer from "layout/components/PageContainer";
import React, { useState } from "react";
import SideStep from "shared/components/SideStepper/SideStep";
import SideStepper from "shared/components/SideStepper/SideStepper";
import Step from "shared/components/Stepper/Step";
import Stepper from "shared/components/Stepper/Stepper";
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
          <Stepper value={step1}>
            <Step value={0} title="Step1" description="Description 1" />
            <Step value={1} title="Step2" description="Description 2" />
            <Step value={2} title="Step3" description="Description 3" />
          </Stepper>
          <div className="flex justify-between">
            <Button onClick={() => setStep1((step) => Math.max(step - 1, 0))}>
              Previous
            </Button>
            <Button onClick={() => setStep1((step) => Math.min(step + 1, 2))}>
              Next
            </Button>
          </div>
          <SideStepper value={step2}>
            <SideStep
              value={0}
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              label="Usuario"
            />
            <SideStep
              value={1}
              icon={<FontAwesomeIcon icon={faUser} />}
              label="Datos Personales"
            />
            <SideStep
              value={2}
              icon={<FontAwesomeIcon icon={faEdit} />}
              label="Modificacion"
            />
            <SideStep
              value={3}
              icon={<FontAwesomeIcon icon={faAddressCard} />}
              label="Ubicacion"
            />
          </SideStepper>
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
