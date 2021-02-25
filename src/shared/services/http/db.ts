import faker from "faker";

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const createN = (amount: number, fn: () => any) =>
  Array.from({ length: amount }, (_, i) => i + 1).map(fn);

const paginate = (items: any[]) => ({
  total: items.length,
  data: items,
});

const createPermissions = () => [
  { id: 1, name: "users" },
  { id: 2, name: "products" },
  { id: 3, name: "customers" },
];

const createUser = () => ({
  id: faker.random.uuid(),
  email: "user@user.com",
  password: "user",
  permissions: [
    { id: 1, name: "users" },
    { id: 2, name: "products" },
  ],
});

export const db = {
  users: createN(10, createUser),
  permissions: createPermissions(),
};
