"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        {ROUTES.map((route) => (
          <Button
            key={route.path}
            asChild
            variant={pathname === route.path ? "default" : "outline"}
          >
            <Link href={route.path}>{route.name}</Link>
          </Button>
        ))}
      </div>
      <UserButton />
    </div>
  );
};
