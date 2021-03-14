import { CircularProgress } from "@material-ui/core";
import React from "react";
import { overrideTailwindClasses } from "tailwind-override";
import Button from "../Button";
import ChangePassword from "../../../profile/pages/ChangePassword";
import CardHeader from "./CardHeader";
interface Props {
    children: React.ReactNode;
    title?: string | React.ReactNode;
    toolbar?: string | React.ReactNode;
    cardHeader?: React.ReactNode
    className?: string;

}

const Card = ({
                    children,
                    title,
                    toolbar,
                    cardHeader = "",
                    className = "",
                }: Props) => {

    const cardHeaderElement = () => {
        if(title || toolbar )
            return (<CardHeader>
                {React.isValidElement(title) ? {title} : <h1 className="font-bold">{title}</h1>}
                {toolbar}
            </CardHeader>)

        return cardHeader ? cardHeader : null
    }

    const classNameElem = `rounded-md bg-white text-gray-600 ${className}`
    return (

            <div className={overrideTailwindClasses(classNameElem)}>
                {cardHeaderElement()}
                {children}
            </div>
    );
};

export default Card;
