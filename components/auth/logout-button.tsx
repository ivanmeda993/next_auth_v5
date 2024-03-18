"use client";
import { logout } from "@/actions/logout";

interface ILogoutButton {
  children?: React.ReactNode;
}
export const LogoutButton = ({ children }: ILogoutButton) => {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
