import { z } from "zod";
import { SelectUserFormSchema } from "./schemas";

export type SelectUserForm = z.infer<typeof SelectUserFormSchema>;
