import { db } from "@/lib/db";

export const getVerificationToken = async (email: string) => {
  try {
    return await db.verificationToken.findFirst({
      where: { email },
    });
  } catch (e) {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    return await db.verificationToken.findFirst({
      where: { token },
    });
  } catch (e) {
    return null;
  }
};
