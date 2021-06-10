import React, { useState } from "react";
import PageHeader from "../../layout/components/PageHeader";
import PageContainer from "../../layout/components/PageContainer";
import Card from "../../shared/components/Card/Card";
import { Modal, Alert } from "@vadiun/react-components";

const ModalExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(true);

  return (
    <>
      <PageHeader title="Exampless" />
      <PageContainer>
        <Card className="w-full">
          <div className="p-6 space-y-4 justify-center flex-col items-center flex">
            <Alert type="danger" message={"Como te gusta la pija"} />
          </div>
        </Card>
      </PageContainer>
      <Modal
        open={open}
        body={<div>hola</div>}
        onClose={() => setOpen(false)}
        title={"Set First Target"}
        subtitle={"if you need more info, please check Project Guidlines"}
      />
    </>
  );
};

export default ModalExample;
