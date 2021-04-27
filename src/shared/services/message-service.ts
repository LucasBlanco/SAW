import React from 'react';
import {useSnackbar} from 'notistack';


export interface MessageServiceInterface {
    handleMessage: <T>(
        promise: Promise<T>,
        options?: {
            successMessage?: string,
            errorMessage?: string,
            type?: 'success' | 'error' | 'info' | 'default';
        }) => Promise<T>;
}

export const useMessage: () => MessageServiceInterface = () => {
    const { enqueueSnackbar } = useSnackbar();


    const handleMessage = <T>(
        promise: Promise<T>,
        options: {
            successMessage?: string,
            errorMessage?: string,
            type?: 'success' | 'error' | 'info' | 'default';
        }) => {
        return promise.then(result => {
            enqueueSnackbar(options?.successMessage ? options?.successMessage : 'La accion se realizo con exito', { variant: 'success',anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }, });
            return result;
        }).catch(error => {
            console.log(error)
            enqueueSnackbar(options?.errorMessage ? options?.errorMessage : error.response.data.error, { variant: 'error',anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }, });
            throw error;
        });
    };

    return {
        handleMessage,
    } as MessageServiceInterface;

};


const baseContext: MessageServiceInterface = {
    handleMessage: (promise: Promise<any>) => { console.log('no se actualiza'); return promise; }
};

export const MessageContext = React.createContext(baseContext);