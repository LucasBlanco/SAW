import { User, UserRole } from "app/auth/models";

export const PUBLICATOR_USER: User = {
  email: "publicator@publicator.com",
  role: UserRole.PUBLICATOR,
  id: 1,
};
export const VIEWER_USER: User = {
  email: "viewer@viewer.com",
  role: UserRole.VIEWER,
  id: 2,
};
export const ADMIN_USER: User = {
  email: "admin@admin.com",
  role: UserRole.ADMIN,
  id: 3,
};

export const USERS: User[] = [PUBLICATOR_USER, VIEWER_USER, ADMIN_USER];

export const useUserRepository = () => {
  const getAll = async (): Promise<User[]> => {
    return USERS;
  };

  return {
    getAll,
  };
};
