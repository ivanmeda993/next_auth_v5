import { auth } from "@/auth";

export const serverCurrentUser = async () => {
  const session = await auth();
  return session?.user;
};

export const serverCurrentRole = async () => {
  const session = await auth();
  return session?.user?.role;
};
