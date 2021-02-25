import { TrafficRounded, TramOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";

const usePromise = function <T>(fetchFn: () => Promise<T>, defaultValue?: T) {
  const [data, setData] = React.useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  let isSubscribed = true;

  useEffect(() => {
    if (defaultValue) {
      setData(defaultValue);
    }
  }, []);

  const reload = () => {
    return fetchFn()
      .then((response) => {
        if (isSubscribed) {
          setData(response);
          setIsLoading(false);
        }
        return response;
      })
      .catch((res) => {
        if (isSubscribed) {
          setIsError(true);
        }
        throw res;
      });
  };

  React.useEffect(() => {
    reload();
    return () => {
      isSubscribed = false;
    };
  }, []);

  return { data, isLoading, isError, helpers: { reload } };
};

export default usePromise;
