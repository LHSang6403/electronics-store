import MainLayout from "./layouts/mainLayout";

export default function Home(): ReturnType<React.FC> {
  return (
    <>
      <MainLayout>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="">home page</div>
        </main>
      </MainLayout>
    </>
  );
}
