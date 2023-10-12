import { CollapseDesktop } from "../../components/CollapseDesktop/CollapseDesktop";

export default function GeneralLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <CollapseDesktop>{children}</CollapseDesktop>
      
  );
}