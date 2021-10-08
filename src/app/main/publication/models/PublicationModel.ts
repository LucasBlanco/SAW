import { User } from "app/auth/models";

export enum PublicationStatus {
  PENDING = "Pendiente",
  APPROVED = "Aprobado",
}

export interface PublicationModel {
  status: PublicationStatus;
  name: string;
  description: string;
  id: number;
  user: User;
}

export interface PublicationFormType {
  name: string;
  description: string;
}
