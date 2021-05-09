import { useServerSide } from "@lblanco/server-side-table";
import { useSpinner } from "../services/spinner-service";
import {
  serverSideHandler,
  serverSidePaginator,
  serverSideFilter,
  serverSideOrder,
} from "@lblanco/server-side-table";

export interface ServerResponse<T> {
  total: number;
  data: T[];
}
export interface LaravelPaginated<T> {
  data: T[];
  meta: {
    total: number;
  };
}

const customTableHandler = serverSideHandler({
  paginator: serverSidePaginator({
    label: "page",
    firstPageNro: 1,
    itemsPerPageLabel: "limit",
  }),
  filter: serverSideFilter("search"),
  order: serverSideOrder(
    ({ name, direction }) => `orden=${name}&orden_tipo=${direction}`
  ),
});

function customRequestAdapter<T>(res: LaravelPaginated<T>): ServerResponse<T> {
  return { total: res.meta.total, data: res.data };
}

declare type ServerRequestFn<T> = (
  params: string
) => Promise<LaravelPaginated<T>>;

export function useCustomTablePagination<T>(requestFn: ServerRequestFn<T>) {
  const { handleSpinner } = useSpinner();

  return useServerSide<T>({
    requestFn: (params) =>
      handleSpinner(requestFn(params)).then(customRequestAdapter),
    tableHandler: customTableHandler,
  });
}
