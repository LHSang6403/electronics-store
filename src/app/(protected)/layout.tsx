import SideBar from "@components/layouts/protected/SideBar";
import SessionProvider from "@components/wrapper/SessionProvider";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <section>
      <SessionProvider>
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
      </SessionProvider>
    </section>
  );
}
