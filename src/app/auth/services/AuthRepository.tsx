import { httpClient } from "shared/services/http/httpClient";
import { User } from "app/auth/models/User";
import React from "react";

const useAuthRepository = () => {
  //const users = httpClient.get("users");

  //const permissions = httpClient.get("permissions");

  const reloadUsers = () => {};

  const login = (x: { email: string; password: string }) =>
    httpClient.post("login", x);

  const add = (user: User) => httpClient.post("users", user);

  const remove = (user: User) => httpClient.delete("users/" + user.id);

  const edit = (user: User) => httpClient.put("users/" + user.id, user);

  const forgotPassword = async (email: string) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("mail enviado a " + email);
        resolve();
      }, 2000);
    });
  };

  return {
    login,
    add,
    remove,
    edit,
    forgotPassword,
  };
};

export default useAuthRepository;
