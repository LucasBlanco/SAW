import { httpClient } from "shared/services/http/httpClient";
import { Permission, User } from "auth/models/User";
import React from "react";

const useAuthRepository = () => {
  const users = httpClient.get("users");

  const permissions = httpClient.get("permissions");

  const reloadUsers = () => {};

  const login = (x: { email: string; password: string }) =>
    new Promise<{ token: string }>((resolve) => {
      setTimeout(() => resolve({ token: "token" }), 2000);
    });

  const add = (user: User) => httpClient.post("users", user);

  const remove = (user: User) => httpClient.delete("users/" + user.id);

  const edit = (user: User) => httpClient.put("users/" + user.id, user);

  const forgotPassword = (email: string) => console.log("mail enviado");

  return {
    users,
    permissions,
    login,
    add,
    remove,
    edit,
    forgotPassword,
  };
};

export default useAuthRepository;
