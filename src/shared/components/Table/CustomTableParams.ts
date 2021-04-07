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

export const customTableHandler = serverSideHandler({
    paginator: serverSidePaginator({ label: "page", firstPageNro: 1 }),
    filter: serverSideFilter("search"),
    order: serverSideOrder(
        ({ name, direction }) => `orden=${name}&orden_tipo=${direction}`
    ),
});

export const customRequestAdapter = <T>(res: ServerResponse<T>) => {
    return { total: res.total, data: res.data };
};
