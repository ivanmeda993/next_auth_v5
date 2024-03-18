import { serverCurrentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

const ServerPage = async () => {
  const user = await serverCurrentUser();

  return <UserInfo label="💻 Server component" user={user} />;
};

export default ServerPage;
