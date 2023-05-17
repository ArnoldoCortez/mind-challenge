import { z } from "zod";

export const SelectUserFormSchema = z.object({
  user: z.string().trim().nonempty({ message: "Please, select an option" }),
});
