import { ExampleModel } from "../models/Example";

let examples: ExampleModel[] = [
  {
    id: 1,
    email: "admin@admin.com",
    password: "admin",
  },
];

const createPromise = <T>(x?: any) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(x), 2000));

export const useExampleService = () => {
  const addExample = (x: ExampleModel) => {
    examples.push({ ...x, id: Math.random() });
    return createPromise(x);
  };

  const removeExample = (example: ExampleModel) => {
    examples = examples.filter((x) => x.id !== example.id);
    return createPromise(example);
  };

  const editExample = (example: ExampleModel) => {
    examples = examples.map((x) => (x.id === example.id ? example : x));
    return createPromise(example);
  };

  const getExamples = (id: number) => {
    console.log(id);
    return createPromise<ExampleModel[]>(examples);
  };

  return {
    addExample,
    removeExample,
    editExample,
    getExamples,
  };
};
