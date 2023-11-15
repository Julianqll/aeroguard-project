import { getServerSession } from "next-auth";
import { CollapseDesktop } from "../../components/CollapseDesktop/CollapseDesktop";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default function GeneralLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <CollapseDesktop>{children}</CollapseDesktop>
  );
}