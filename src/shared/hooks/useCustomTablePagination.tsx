import {useServerSide} from "@lblanco/server-side-table";
import {customRequestAdapter, customTableHandler} from "../components/Table/CustomTableParams";
import {useSpinner} from "../services/spinner-service";

interface RequestFnResponse<T> {
    data: T[];
    total: number;
}

declare type ServerRequestFn<T> = (params: string) => Promise<RequestFnResponse<T>>;

export function useCustomTablePagination<T>(requestFn: ServerRequestFn<T>) {
    const {handleSpinner} = useSpinner();

    return useServerSide<T>(
        {
            requestFn: (params) =>
                handleSpinner(requestFn(params)).then(customRequestAdapter),
            tableHandler: customTableHandler,
        }
    );

}