import { z } from "zod";

export const UserFormSchema = z.object({
  name: z.string().trim().nonempty({ message: "Name is required" }),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Provide a valid email format" }),
  englishLevel: z.string().trim().optional().default(""),
  technicalKnowledge: z.string().trim().optional().default(""),
  cvLink: z
    .string()
    .trim()
    .url({ message: "Provide a valid URL format" })
    .or(z.literal("")),
  password: z
    .string()
    .trim()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" }),
  confirmPassword: z
    .string()
    .trim()
    .nonempty({ message: "Confirm password is required" }),
});

export const AddUserFormSchema = UserFormSchema.refine(
  (val) => val.password === val.confirmPassword,
  {
    message: "Passwords must match",
    path: ["confirmPassword"],
  }
);

export const EditUserFormSchema = UserFormSchema.omit({
  email: true,
  password: true,
  confirmPassword: true,
});
