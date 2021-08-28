import { useHistory } from "react-router-dom";

import { LoginCredentials, Permission, User } from "../models/User";

import React, { useContext, useEffect, useState } from "react";
import useAuthRepository from "./AuthRepository";

export interface AuthContextType {
  isAuthenticated: () => boolean;
  forgotPassword: (email: string) => {};
  login: (x: LoginCredentials) => Promise<string>;
  logout: () => {};
}
export const AuthContext = React.createContext({} as AuthContextType);
const _isAuthenticated = () => !!localStorage.getItem("token");

export const AuthProvider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(_isAuthenticated());
  const history = useHistory();
  const authRepo = useAuthRepository();

  useEffect(() => {
    setIsAuthenticated(_isAuthenticated());
  }, []);

  const login = async (x: LoginCredentials) => {
    console.log("LOGIN", x);
    // const { token } = await authRepo.login(x);
    const token = "token";
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    history.push("/main/landing");
    return token;
  };

  const logout = () => {
    localStorage.setItem("token", "");
    setIsAuthenticated(false);
    history.push("login");
  };

  const forgotPassword = (email: string) => authRepo.forgotPassword(email);

  const value = {
    isAuthenticated,
    forgotPassword,
    login,
    logout,
  };
  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth debe estar dentro del proveedor AuthContext");
  }
  return authContext;
};
