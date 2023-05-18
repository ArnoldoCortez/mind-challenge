import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Provide a valid email format" }),
  password: z.string().trim().nonempty({ message: "Password is required" }),
});
