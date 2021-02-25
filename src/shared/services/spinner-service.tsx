import React, { useContext, useEffect, useMemo, useState } from "react";
/*import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";*/

export const SpinnerContext = React.createContext(
  {} as MessageServiceInterface
);
export interface MessageServiceInterface {
  isLoading: boolean;
  requestCount: number;
  handleSpinner: <T>(promise: Promise<T>) => Promise<T>;
  //handleSpinner$: <T>(obs: Observable<T>) => Observable<T>;
}

export const SpinnerProvider = (props: any) => {
  const [requestCount, setRequestCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(requestCount > 0);
  }, [requestCount]);

  const handleSpinner = function <T>(promise: Promise<T>) {
    setRequestCount((prevCount) => prevCount + 1);
    return promise
      .then((result) => {
        setRequestCount((prevCount) => prevCount - 1);
        return result;
      })
      .catch((error) => {
        setRequestCount((prevCount) => prevCount - 1);
        throw error;
      });
  };

  /*const handleSpinner$ = function <T>(observable: Observable<T>) {
    setRequestCount((prevCount) => prevCount + 1);
    return observable.pipe(
      tap(() => setRequestCount((prevCount) => prevCount - 1)),
      catchError((error) => {
        setRequestCount((prevCount) => prevCount - 1);
        throw error;
      })
    );
  };*/

  const value = useMemo(
    () => ({
      handleSpinner,
      //handleSpinner$,
      isLoading,
      requestCount,
    }),
    [isLoading, requestCount]
  );

  return <SpinnerContext.Provider value={value} {...props} />;
};

export const useSpinner = () => {
  const context = useContext(SpinnerContext);
  if (!context) {
    throw new Error("useSpinner debe estar dentro de SpinnerProvider");
  }
  return context;
};
