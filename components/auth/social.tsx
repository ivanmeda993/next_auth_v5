import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button variant="outline" size="lg" className="w-full">
        <FcGoogle className="size-5" />
      </Button>
      <Button variant="outline" size="lg" className="w-full">
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
};
