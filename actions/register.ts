"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
export const register = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null,
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (validatedFields.success) {
    return { error: "Invalid fields" };
  }

  console.log("login", values);
  return { success: "Logged in" };
};
