import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";


interface Props {
    title?:string
    description?: string
    open: boolean
    onClose: () => void
    onAccept: () => void
}

export default function AreYouSureDialog({title, description, open, onClose, onAccept}: Props) {

    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={onClose}
                fullWidth
            >
                <div className="w-full h-24 bg-orange-400 flex items-center justify-center">
                    <FontAwesomeIcon icon={faExclamationTriangle} size="4x" color="white"/>
                </div>
                <div className="flex flex-col justify-center items-center my-3.5">
                    <div className="font-bold text-gray-600 text-lg">{title}</div>
                    <div className="font-bold text-gray-500 text-sm mt-1">{description}</div>
                </div>
                <div className="flex justify-evenly p-5">
                    <Button onClick={onClose} color="gray" variant="light">
                        Cancelar
                    </Button>
                    <Button onClick={onAccept} color="orange" variant="light">
                        Estoy seguro!
                    </Button>
                </div>

            </Dialog>
        </div>
    );
}