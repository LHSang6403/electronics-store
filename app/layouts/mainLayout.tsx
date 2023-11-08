import Header from "./includes/header";
import TopMenu from "./includes/topMenu";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps): ReturnType<React.FC> {
  return (
    <div className="">
      <Header />
      <TopMenu />
      <div className="w-[70%] mx-auto bg-slate-400">{children}</div>
    </div>
  );
}
