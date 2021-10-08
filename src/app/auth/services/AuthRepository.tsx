import {
  ADMIN_USER,
  PUBLICATOR_USER,
  USERS,
  VIEWER_USER,
} from "app/main/user/services/UserRepository";
import { User, UserRole } from "../models";

export const useAuthRepository = () => {
  const login = async (x: { email: string; password: string }) => {
    if (x.email === ADMIN_USER.email) {
      return {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozfQ.aNQ5dv54cHUA1q1_CzHs7tHk5Ef4uMPCDHS1lNP_TcU",
      };
    }
    if (x.email === VIEWER_USER.email) {
      return {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyfQ.aWYC6LPsZorO8RI9RkOTd1IgmNdIirR-7C-5J587p7Q",
      };
    }
    if (x.email === PUBLICATOR_USER.email) {
      return {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.zCGBEiC4n4X5jij4lK4nSEtrbebYxELZ6OfBwdm6CJg",
      };
    }
    throw new Error("El email o contraseña es incorrecto");
  };

  const getLoggedUser = async (id: number): Promise<User> => {
    return USERS.find((u) => u.id === id)!;
  };

  return {
    login,
    getLoggedUser,
  };
};
