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
    const checkToken = await db.verificationToken.findFirst({
      where: { token },
    });
    console.log("checkToken", checkToken);
    return checkToken;
  } catch (e) {
    return null;
  }
};
