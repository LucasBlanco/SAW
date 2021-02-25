import environment from "environment/environment";
import mock from "./mock";
import { db } from "./db";
import axiosInstance from "./axiosInstance";

const usersURL = new RegExp(`${environment.backEnd}/users/*`);
const permissionsURL = new RegExp(`${environment.backEnd}/permissions/*`);

if (!environment.production) {
  mock.onGet(usersURL).reply(200, db.users);
  mock.onGet(permissionsURL).reply(200, db.permissions);
}

export const httpClient = axiosInstance;
