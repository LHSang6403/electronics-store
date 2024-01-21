import FramerPageWrapper from "@/utils/PageWrapper";
import { readUserSession } from "@app/auth/_actions";
import SideBar from "@/components/layouts/protected/SideBar";

import { v2 as cloudinary } from "cloudinary";
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
  const { data } = await readUserSession();
  console.log(data);
  if (!data.session) {
    throw new Error("User not logged in");
  }

  return (
    <section>
      <FramerPageWrapper>
        <div
          className="max-w-[1450px] min-h-[80vh] p-8
          flex flex-row gap-4
          px-10 2xl:px-4 sm:px-2 mx-auto "
        >
          <SideBar />
          {children}
        </div>
      </FramerPageWrapper>
    </section>
  );
}
