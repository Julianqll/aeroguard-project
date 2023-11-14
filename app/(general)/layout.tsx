import { getServerSession } from "next-auth";
import { CollapseDesktop } from "../../components/CollapseDesktop/CollapseDesktop";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function GeneralLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <CollapseDesktop data={session}>{children}</CollapseDesktop>
  );
}