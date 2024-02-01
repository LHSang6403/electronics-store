import SideBar from "@components/layouts/protected/SideBar";
import { v2 as cloudinary } from "cloudinary";
// import { readStaff } from "@app/_actions/user";
import DrawerSideBar from "@components/dashboard/DrawerSideBar";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  // const staffData = await readStaff();

  // if (
  //   !("data" in staffData) ||
  //   staffData.data === null ||
  //   !("role" in staffData.data) ||
  //   staffData.data.role === "customer" ||
  //   staffData.error
  // ) {
  //   throw new Error("Wrong account data.");
  // }

  // if (staffData.data?.role !== "admin" && staffData.data?.role !== "staff") {
  //   throw new Error(
  //     "User do not have permission. Please log in to view this area."
  //   );
  // }

  return (
    <section>
      <div
        className="max-w-[1450px] xl:w-full min-h-[70vh] pt-1 pb-4
          flex flex-row gap-4 xl:flex-col xl:items-start xl:justify-start xl:gap-2
          px-10 xl:px-4 sm:px-2 mx-auto"
      >
        <div className="mt-10 xl:hidden">
          <SideBar />
        </div>
        {children}
      </div>
      <div className="hidden xl:block">
        <DrawerSideBar />
      </div>
    </section>
  );
}
