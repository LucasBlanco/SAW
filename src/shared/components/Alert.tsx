import * as React from 'react';
import {faCheckCircle, faExclamationCircle, faInfoCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    type: "info" | "warning" | "success" | "danger"
    message: string
    color: string
};

export function Alert({type="info", message, color}: Props) {
    const icon = {
        warning: faExclamationCircle,
        info: faInfoCircle,
        success: faCheckCircle,
        danger: faTimesCircle
    }
    return (
        <div className={`w-full rounded-md p-6 flex items-center bg-${color}-100 space-x-4 text-${color}-400 text-sm`}>
            <FontAwesomeIcon icon={icon[type]} size="2x"></FontAwesomeIcon>
            <div className="flex flex-col">
                {message.split("/n").map((parrafo, index) => <p key={index}>{parrafo}</p>)}
            </div>
        </div>
    );
};