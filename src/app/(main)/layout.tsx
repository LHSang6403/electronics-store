import FramerPageWrapper from "@/utils/PageWrapper";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): ReturnType<React.FC> {
  return (
    <section>
      <FramerPageWrapper>
        <div
          className="w-full min-h-screen pt-1
          flex flex-col gap-8 pb-8
          px-10 2xl:px-4 sm:px-2 mx-auto bg-[#f5f5f555]"
        >
          {children}
        </div>
      </FramerPageWrapper>
    </section>
  );
}
