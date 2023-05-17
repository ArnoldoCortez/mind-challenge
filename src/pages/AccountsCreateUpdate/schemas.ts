import { z } from "zod";

export const AccountFormSchema = z.object({
  account: z.string().trim().nonempty({ message: "Account is required" }),
  client: z.string().trim().nonempty({ message: "Client is required" }),
  operationManager: z
    .string()
    .trim()
    .nonempty({ message: "Operation Manager is required" }),
});
