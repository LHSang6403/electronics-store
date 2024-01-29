import SideBar from "@components/layouts/protected/SideBar";
import { v2 as cloudinary } from "cloudinary";
import { readStaff } from "@app/_actions/user";

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
  const staffData = await readStaff();
  console.log("Staff data", staffData);

  if (
    !("data" in staffData) ||
    staffData.data === null ||
    !("role" in staffData.data) ||
    staffData.error
  ) {
    throw new Error("Wrong account data.");
  }

  if (staffData.data?.role !== "admin" && staffData.data?.role !== "staff") {
    throw new Error(
      "User do not have permission. Please log in to view this area."
    );
  }

  return (
    <section>
      <div
        className="max-w-[1450px] min-h-[80vh] pt-2 pb-6
          flex flex-row gap-4
          px-10 2xl:px-4 sm:px-2 mx-auto "
      >
        <div className="mt-10">
          <SideBar />
        </div>
        {children}
      </div>
    </section>
  );
}
