import { Resend } from "resend";
import ConfirmEmail from "@/components/emails/confirm";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${process.env.NEXTAUTH_URL}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email address",
    react: <ConfirmEmail validationCode={confirmationLink} />,
  });
};
