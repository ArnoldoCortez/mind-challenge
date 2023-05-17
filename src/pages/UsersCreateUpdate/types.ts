import { z } from "zod";
import { AddUserFormSchema, EditUserFormSchema } from "./schemas";

export type AddUserForm = z.infer<typeof AddUserFormSchema>;
export type EditUserForm = z.infer<typeof EditUserFormSchema>;
