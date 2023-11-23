export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): ReturnType<React.FC> {
  return (
    <section>
      <div className="w-[1050px] xl:w-full lg:w-full sm:w-full xl:px-6 lg:px-6 sm:px-0 mx-auto bg-[#f5f5f555]">
        Protected route
        {children}
      </div>
    </section>
  );
}
