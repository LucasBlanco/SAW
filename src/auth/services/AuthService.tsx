import { useHistory } from "react-router-dom";

import { User, Permission, LoginCredentials } from "../models/User";

import React, { useContext, useEffect, useMemo, useState } from "react";
import useAuthRepository from "./AuthRepository";
import { createFalse } from "typescript";

interface AuthContextType {
  isAuthenticated: () => boolean;
  forgotPassword: (email: string) => {};
  login: (x: LoginCredentials) => {};
  logout: () => {};
  users: User[];
  permissions: Permission[];
}
export const AuthContext = React.createContext({} as AuthContextType);
const _isAuthenticated = () => !!localStorage.getItem("token");

export const AuthProvider = (props: any) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(_isAuthenticated());
  const history = useHistory();
  const authRepo = useAuthRepository();

  useEffect(() => {
    setIsAuthenticated(_isAuthenticated());
  }, []);

  const login = (x: LoginCredentials) => {
    localStorage.setItem("token", "value");
    setIsAuthenticated(true);
    return authRepo.login(x);
  };

  const logout = () => {
    localStorage.setItem("token", "");
    setIsAuthenticated(false);
    history.push("login");
  };

  const forgotPassword = (email: string) => authRepo.forgotPassword(email);

  const add = (user: User) =>
    authRepo.add(user).then((x) => setUsers([...users, x]));

  const remove = (user: User) =>
    authRepo
      .remove(user)
      .then(() => setUsers(users.filter((x) => x.id !== user.id)));

  const edit = (user: User) =>
    authRepo
      .edit(user)
      .then(() => setUsers(users.map((x) => (x.id === user.id ? user : x))));

  const value = {
    users: authRepo.users,
    permissions: authRepo.permissions,
    isAuthenticated,
    forgotPassword,
    login,
    add,
    remove,
    edit,
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
