import SideBar from "@components/layouts/protected/SideBar";
import { v2 as cloudinary } from "cloudinary";
import { readStaff } from "@app/_actions/user";
import DrawerSideBar from "@components/dashboard/DrawerSideBar";
import { redirect } from "next/navigation";

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
  try {
    const staffData = (await readStaff()) as {
      data?: { role?: string };
      error?: any;
    };

    if (!staffData.data || staffData.error) {
      throw new Error("Permission: Wrong account data.");
    } else if (
      staffData.data?.role !== "admin" &&
      staffData.data?.role !== "staff"
    ) {
      throw new Error(
        "User does not have permission. Please log in to view this area."
      );
    }
  } catch (error) {
    console.error("Error:", error);
    redirect("/auth");
  }

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
