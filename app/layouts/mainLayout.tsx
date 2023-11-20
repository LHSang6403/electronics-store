import Header from "./includes/header";
import TopMenu from "./includes/topMenu";
import Footer from "./includes/footer";

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
      <div className="w-[1050px] xl:w-full lg:w-full sm:w-full xl:px-6 lg:px-6 sm:px-0 mx-auto bg-[#f5f5f555]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
