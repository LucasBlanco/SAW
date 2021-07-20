import React, { useCallback, useState } from "react";
import TableExample from "./TableExample";
import CreateExample from "./CreateExample";
import EditExample from "./EditExample";
import { ExampleModel } from "example/models/Example";
import useExamples from "example/services/example-service";
import { Button } from "@vadiun/react-components";
import PageContainer from "layout/components/PageContainer";
import PageHeader from "layout/components/PageHeader";
import { useSuperMutation, useSuperQuery } from "@vadiun/react-hooks";

const CrudExample = () => {
  const { getExamples, ...ExampleService } = useExamples();
  const [id, setId] = useState(1);
  const editMutation = useSuperMutation(ExampleService.editExample);
  const addMutation = useSuperMutation(ExampleService.addExample);
  const removeMutation = useSuperMutation(ExampleService.removeExample);
  const examplesQuery = useSuperQuery(() => getExamples(id));
  const [visiblePage, setVisiblePage] =
    useState<"table" | "create" | "edit">("table");
  const [editingExample, setEditingExample] = useState<ExampleModel>();

  async function edit(example: ExampleModel) {
    await editMutation.mutate(example);
    examplesQuery.reload();
  }

  async function create(example: ExampleModel) {
    await addMutation.mutate(example);
    examplesQuery.reload();
  }

  async function remove(example: ExampleModel) {
    await removeMutation.mutate(example);
    examplesQuery.reload();
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
            examples={examplesQuery.data!}
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
