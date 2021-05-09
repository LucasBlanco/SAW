import React, { FC } from "react";
import HelloWorld from "prueba-component2"
interface Props {
  ilustration: any;
  title: string;
  subtitle?: string;
}

const AuthLayout: FC<Props> = (props) => {
  return (
    <div className="flex h-full w-full">
        <HelloWorld/>
      <div className="hidden md:flex w-1/3 flex-col items-center h-full p-12 bg-gray-600 shadow-md">
        <h1 className="text-2xl font-bold m-12 text-white">LOGO</h1>
        <h2 className="text-4xl font-bold text-white">{props.title}</h2>
        <h4 className="text-xl font-bold text-white text-center mt-8">
          {props.subtitle}
        </h4>
        <img src={props.ilustration} className="mt-auto h-72" />
      </div>
      <div className="flex flex-grow justify-center items-center p-4 bg-gray-50">
        {props.children}
      </div>
    </div>
  );
};

export default AuthLayout;
