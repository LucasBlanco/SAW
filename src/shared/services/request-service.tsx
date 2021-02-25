import { useSpinner } from "shared/services/spinner-service";
import { useMessage } from "shared/services/message-service";
import { useContext } from "react";
import React from "react";

export interface RequestServiceInterface {
  handleRequest: <T>(
    request: Promise<T>,
    options?: { successMessage?: string; errorMessage?: string }
  ) => Promise<T>;
}

const RequestContext = React.createContext({} as RequestServiceInterface);

export const RequestProvider = (props: any) => {
  const { handleSpinner } = useSpinner();
  const { handleMessage } = useMessage();

  const handleRequest = function <T>(
    promise: Promise<T>,
    options?: {
      successMessage?: string;
      errorMessage?: string;
    }
  ) {
    const msgHandled = handleMessage<T>(promise, {
      successMessage: options?.successMessage,
      errorMessage: options?.errorMessage,
    });
    const spinnerHandled = handleSpinner(msgHandled);
    return spinnerHandled;
  };

  const value = {
    handleRequest,
  };
  return <RequestContext.Provider value={value} {...props} />;
};

export const useRequest = () => {
  const context = useContext(RequestContext);
  if (!context) {
    throw new Error("useRequest debe ser usado dentro de RequestProvider");
  }
  return context;
};
