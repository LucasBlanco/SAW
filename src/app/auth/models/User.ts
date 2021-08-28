export interface User {
  permissions: Permission[];
  email: string;
  password: string;
  id?: number;
}

export interface Permission {
  name: string;
  id: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
