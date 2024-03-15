import { v4 as uuid } from "uuid";
import { getVerificationToken } from "@/data/verification-token";
import { db } from "@/lib/db";

export const generateVerificationToken = async (email: string) => {
  const token = uuid();
  const expiration = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationToken(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expiresAt: expiration,
    },
  });

  return verificationToken;
};
