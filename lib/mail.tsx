import { Resend } from "resend";
import ConfirmEmail from "@/components/emails/confirm";
import ResetPasswordEmail from "@/components/emails/reset-password";

const resend = new Resend(process.env.RESEND_API_KEY);
const DOMAIN = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${DOMAIN}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email address",
    react: <ConfirmEmail validationCode={confirmationLink} />,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${DOMAIN}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    react: (
      <ResetPasswordEmail userFirstname={email} resetPasswordLink={resetLink} />
    ),
  });
};
