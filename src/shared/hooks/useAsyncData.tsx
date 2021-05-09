import React from "react";
import usePromise from "./usePromise";

function useAsyncData<T>(fetchFn: () => Promise<T>) {
  const [_data, { reload, ...status }] = usePromise(fetchFn, []);

  return {
    getData() {
      if (_data === undefined && !status.isLoading) {
        console.log("reload");
        reload();
      }
      return _data;
    },
    reload,
    ...status,
  };
}

export default useAsyncData;
