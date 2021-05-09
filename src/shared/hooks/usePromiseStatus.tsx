import React, { useEffect } from "react";

const usePromiseStatus = function () {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  let isSubscribed = true;

  async function handlePromise(fetchFn: () => Promise<unknown>) {
    if (!isSubscribed) return;
    setIsLoading(true);
    try {
      const res = await fetchFn();
      if (!isSubscribed) return;
      setIsLoading(false);
    } catch {
      if (!isSubscribed) return;
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    return () => {
      isSubscribed = false;
    };
  }, []);

  return { isLoading, isError, handlePromise } as const;
};

export default usePromiseStatus;
