import { z } from "zod";
import { AccountFormSchema } from "./schemas";

export type AccountForm = z.infer<typeof AccountFormSchema>;
