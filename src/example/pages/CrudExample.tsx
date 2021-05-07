import React, { useCallback, useState } from "react";
import TableExample from "./TableExample";
import CreateExample from "./CreateExample";
import EditExample from "./EditExample";
import { ExampleModel } from "example/models/Example";
import useExamples from "example/services/example-service";
import usePromise from "shared/hooks/usePromise";
import Button from "shared/components/Button";
import { useSpinner } from "shared/services/spinner-service";
import { useRequest } from "shared/services/request-service";
import PageContainer from "layout/components/PageContainer";
import PageHeader from "layout/components/PageHeader";

const CrudExample = () => {
  const { getExamples, ...ExampleService } = useExamples();
  const { handleSpinner } = useSpinner();
  const { handleRequest } = useRequest();
  const [id, setId] = useState(1);
  const [examples, helpers] = usePromise(() => handleSpinner(getExamples(id)), [
    id,
  ]);
  const [visiblePage, setVisiblePage] = useState<"table" | "create" | "edit">(
    "table"
  );
  const [editingExample, setEditingExample] = useState<ExampleModel>();

  async function edit(example: ExampleModel) {
    await handleRequest(ExampleService.editExample(example));
    helpers.reload();
  }

  async function create(example: ExampleModel) {
    await handleRequest(ExampleService.addExample(example), {
      successMessage: "El ejemplo fue creado con exito",
      errorMessage: "Hubo un error al crear el ejemplo",
    });
    helpers.reload();
  }

  async function remove(example: ExampleModel) {
    await handleRequest(ExampleService.removeExample(example));
    helpers.reload();
  }

  function selectToEdit(example: ExampleModel) {
    setEditingExample(example);
    setVisiblePage("edit");
  }

  return (
    <>
      <PageHeader
        title="Examples"
        toolbar={
          visiblePage === "table" ? (
            <Button onClick={() => setVisiblePage("create")} variant="light">
              Crear ejemplo
            </Button>
          ) : (
            <Button onClick={() => setVisiblePage("table")} variant="light">
              Volver
            </Button>
          )
        }
      />

      {visiblePage === "table" && (
        <div className="md:my-8 md:mx-32">
          <Button onClick={() => setId((id) => id + 1)} variant="light">
            Next id
          </Button>
          <TableExample
            examples={examples!}
            selectToEdit={selectToEdit}
            delete={remove}
          />
        </div>
      )}

      {visiblePage === "create" && (
        <PageContainer>
          <CreateExample create={create} />
        </PageContainer>
      )}
      {visiblePage === "edit" && editingExample && (
        <PageContainer>
          <EditExample edit={edit} initialValue={editingExample} />
        </PageContainer>
      )}
    </>
  );
};

export default CrudExample;
