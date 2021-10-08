import { UserRole } from "app/auth/models";
import { useAuthService } from "app/auth/services";
import {
  PublicationFormType,
  PublicationModel,
  PublicationStatus,
} from "../models/PublicationModel";

let publications: PublicationModel[] = [
  {
    status: PublicationStatus.APPROVED,
    name: "Publicacion 1",
    description: "Descripcion de publicacion 1",
    id: 1,
    user: {
      email: "email@email.com",
      role: UserRole.PUBLICATOR,
      id: 1,
    },
  },
  {
    status: PublicationStatus.APPROVED,
    name: "Publicacion 2",
    description: "Descripcion de publicacion 2",
    id: 2,
    user: {
      email: "email@email.com",
      role: UserRole.PUBLICATOR,
      id: 1,
    },
  },
  {
    status: PublicationStatus.APPROVED,
    name: "Publicacion 3",
    description: "Descripcion de publicacion 3",
    id: 3,
    user: {
      email: "email@email.com",
      role: UserRole.PUBLICATOR,
      id: 1,
    },
  },
  {
    status: PublicationStatus.PENDING,
    name: "Publicacion 3",
    description: "Descripcion de publicacion 3",
    id: 3,
    user: {
      email: "email@email.com",
      role: UserRole.PUBLICATOR,
      id: 1,
    },
  },
];

export const usePublicationRepository = () => {
  const authSrv = useAuthService();
  const getAll = async (): Promise<PublicationModel[]> => publications;

  const getAllApproved = async (): Promise<PublicationModel[]> => {
    return (await getAll()).filter(
      (p) => p.status === PublicationStatus.APPROVED
    );
  };

  const create = async (pub: PublicationFormType) => {
    publications.push({
      ...pub,
      id: Math.random(),
      status: PublicationStatus.PENDING,
      user: {
        email: "email@email.com",
        role: UserRole.PUBLICATOR,
        id: 1,
      },
    });
  };

  const getMyPublications = async (): Promise<PublicationModel[]> => {
    return (await getAll()).filter((p) => p.user.id === authSrv.loggedUserId);
  };

  const getPendingPublication = async (): Promise<PublicationModel[]> => {
    return (await getAll()).filter(
      (p) => p.status === PublicationStatus.PENDING
    );
  };

  const approve = async (id: number) => {
    publications = publications.map((p) =>
      p.id === id ? { ...p, status: PublicationStatus.APPROVED } : p
    );
  };

  return {
    getAll,
    create,
    getMyPublications,
    getPendingPublication,
    approve,
    getAllApproved,
  };
};
