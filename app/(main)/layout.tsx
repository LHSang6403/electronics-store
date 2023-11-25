import Header from "@components/layouts/public/header";
import TopMenu from "@components/layouts/public/topMenu";
import Footer from "@components/layouts/public/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): ReturnType<React.FC> {
  return (
    <section>
      <Header />
      <TopMenu />
      <div
        className="w-[1050px] xl:w-full lg:w-full sm:w-full xl:px-6 lg:px-6 sm:px-0 mx-auto bg-[#f5f5f555]
       h-auto flex flex-col gap-8 pb-8"
      >
        {children}
      </div>
      <Footer />
    </section>
  );
}
