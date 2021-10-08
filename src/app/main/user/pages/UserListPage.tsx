import React from "react";
import { useSuperQuery } from "@vadiun/react-hooks";
import { PageContainer } from "layout/components";
import { Card } from "shared/components";
import { useUserRepository } from "../services/UserRepository";

export const UserListPage = () => {
  const userRepo = useUserRepository();
  const usersQuery = useSuperQuery(userRepo.getAll, {
    showSpinner: true,
  });

  if (usersQuery.data === undefined) {
    return null;
  }

  return (
    <PageContainer>
      <div className="flex-1">
        <Card title="Usuarios">
          <div className="p-8">
            {usersQuery.data.map((user) => (
              <div className="p-8 shadow-md my-4">
                <p className="text-bold">{user.email}</p>
                <p className="text-gray-500">{user.role}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};
