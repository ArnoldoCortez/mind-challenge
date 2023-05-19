import { UserRoles } from "../constants/user.constants";

export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles];

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  englishLevel: string;
  cvLink: string;
  knowledge: string;
  createdAt: string;
  updatedAt: string;
  role: UserRoles;
};

export type AddUserBody = {
  name: string;
  email: string;
  password: string;
  englishLevel: string;
  cvLink: string;
  knowledge: string;
  role?: UserRoles;
};

export type EditUserBody = Partial<Omit<AddUserBody, "password" | "email">> & {
  id: string;
};

export type Account = {
  id: string;
  name: string;
  clientName: string;
  personResponsibleForOperation: string;
  users: User[];
  createdAt: string;
  updatedAt: string;
};

export type AddAccountBody = Pick<
  Account,
  "name" | "clientName" | "personResponsibleForOperation"
>;

export type EditAccountBody = Partial<AddAccountBody> & Pick<Account, "id">;

export type TeamMovement = {
  id: string;
  userId: string;
  accountId: string;
  createdAt: string;
  deletedAt: string;
};

export type TeamMovementBody = Pick<TeamMovement, "userId" | "accountId">;

export type TeamMovementDetailed = {
  id: string;
  user: User;
  account: Account;
  createdAt: string;
  deletedAt: string;
};

export type TeamMovementDetailedData = {
  data: TeamMovementDetailed[];
};

export type RemoveUserFromAccount = {
  args: TeamMovementBody[];
};

export type LoginResponse = {
  user: User;
  token: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};
