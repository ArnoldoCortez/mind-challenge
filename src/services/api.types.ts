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
  role: string;
};

export type AddUserBody = {
  name: string;
  email: string;
  password: string;
  englishLevel: string;
  cvLink: string;
  knowledge: string;
};

export type EditUserBody = Partial<Omit<AddUserBody, "password" | "email">> & {
  id: string;
};
