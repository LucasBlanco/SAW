import { User } from "app/auth/models";
import { httpClient } from "shared/services/http/httpClient";

export const useUserRepository = () => {
  const getAll = async (): Promise<User[]> => {
    const res = await httpClient.get("usuarios");
    return res.map((u) => ({
      id: u.id,
      email: u.nombre,
    }));
  };

  return {
    getAll,
  };
};
