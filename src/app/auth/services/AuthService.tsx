import { useHistory } from "react-router-dom";
import { LoginCredentials, User } from "../models/User";
import React, { useContext, useEffect, useState } from "react";
import { useAuthRepository } from "./AuthRepository";
import decode from "jwt-decode";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (x: LoginCredentials) => Promise<string>;
  logout: () => void;
  getLoggedUser: () => Promise<User>;
  loggedUserId: number | undefined;
}

export const AuthContext = React.createContext({} as AuthContextType);

const _isAuthenticated = () => !!localStorage.getItem("token");

export const AuthProvider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(_isAuthenticated());
  const history = useHistory();
  const authRepo = useAuthRepository();
  const [loggedUserId, setLoggedUserId] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    setIsAuthenticated(_isAuthenticated());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const { user_id } = decode<{ user_id: number }>(
        localStorage.getItem("token")!
      );
      setLoggedUserId(user_id);
    }
  }, [isAuthenticated]);

  const login = async (x: LoginCredentials) => {
    const { token } = await authRepo.login(x);
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

  const value: AuthContextType = {
    isAuthenticated,
    login,
    logout,
    getLoggedUser: () => authRepo.getLoggedUser(loggedUserId!),
    loggedUserId,
  };
  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuthService = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth debe estar dentro del proveedor AuthContext");
  }
  return authContext;
};
