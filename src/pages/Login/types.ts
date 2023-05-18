import { z } from "zod";
import { LoginFormSchema } from "./schemas";

export type LoginForm = z.infer<typeof LoginFormSchema>;
