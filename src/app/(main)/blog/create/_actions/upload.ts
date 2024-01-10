"use server";

import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import axios from "axios";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function create(formData: FormData) {
  const file = formData.get("image") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: ["nextjs-server-blog-images"],
        },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });

  revalidatePath("/blog");
  redirect("/blog");
}

const uploadImage = async (imageUrl: any) => {
  try {
    console.log("IMG URL", imageUrl);
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const arrayBuffer = response.data;
    const buffer = new Uint8Array(arrayBuffer);

    // Thực hiện upload ảnh lên Cloudinary
    await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            tags: ["nextjs-server-upload-blog-images"],
          },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
  }
};

export default create;
export { uploadImage };
