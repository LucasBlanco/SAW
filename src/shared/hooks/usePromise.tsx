import React, { useCallback, useReducer, useRef } from "react";

type Action<T> =
  | { type: "pending" }
  | { type: "resolved"; payload: T }
  | { type: "rejected"; payload: Error };

interface State<T> {
  isLoading: boolean;
  isError: boolean;
  data: T | undefined;
  error: Error | undefined;
}

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case "pending":
      return {
        isError: false,
        isLoading: true,
        data: state.data,
        error: undefined,
      };

    case "resolved":
      return {
        isError: false,
        isLoading: false,
        data: action.payload,
        error: undefined,
      };

    case "rejected":
      return {
        isError: true,
        isLoading: false,
        data: undefined,
        error: undefined,
      };

    default:
      return state;
  }
}

const initialState = {
  isLoading: false,
  isError: false,
  error: undefined,
  data: undefined,
};

const usePromise = function <T>(fetchFn: () => Promise<T>, defaultValue?: T) {
  const isSubscribed = useRef(true);
  const [{ isLoading, isError, error, data }, dispatch] = useReducer(reducer, {
    ...initialState,
    data: defaultValue,
  } as State<T>);

  const reload = () => {
    dispatch({ type: "pending" });
    return fetchFn()
      .then((response) => {
        if (isSubscribed.current) {
          dispatch({ type: "resolved", payload: response });
        }
      })
      .catch((res) => {
        if (isSubscribed.current) {
          dispatch({ type: "rejected", payload: res });
        }
      });
  };

  React.useEffect(() => {
    reload();
    return () => {
      isSubscribed.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data as T, { isLoading, isError, reload, error }] as const;
};

export default usePromise;
