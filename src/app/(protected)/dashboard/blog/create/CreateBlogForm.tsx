"use client";

import PrimaryButton from "@components/buttons/PrimaryButton";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import React, { useState, useEffect } from "react";
import { createBlog } from "@app/_actions/blogActions";
import { useMutation } from "@tanstack/react-query";
import { generateUUID } from "@utils/generateUUID";
import { generateTimestampz } from "@utils/generateTimestampz";
import SpinnerLoading from "@components/loading/SpinnerLoading";
import WriterInformation from "@/app/(protected)/dashboard/blog/create/WriterInformation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// utils
import convertBlobUrlToFile from "@utils/convertBlobUrlToFile";
import uploadFileToCloudinary from "@utils/uploadFileToCloudinary";

// cloudinary's plugins
import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/save.min.js";
import "froala-editor/js/plugins/markdown.min.js";
import "froala-editor/js/plugins/font_size.min.js";

import type BlogData from "@/app/(main)/blog/interface";

const CreateBlogForm = (): JSX.Element => {
  const router = useRouter();

  // fix window is undefined
  const [position, setPosition] = useState<any>();
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((newPos) => {
      setPosition(newPos);
      console.log(position);
    }, console.error);
  }, []);

  // spinner loading
  const [isLoading, setLoading] = useState<boolean>(false);

  // hook-form
  const { register, handleSubmit, watch, setValue } = useForm();
  useFormPersist("blog-information", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  // rich editor auto save
  const [content, setContent] = useState<string>(() => {
    return localStorage.getItem("saved-content") ?? "";
  });

  const mutation = useMutation({
    mutationFn: async (newBlog: BlogData) => await createBlog(newBlog),
    onSuccess: () => {
      toast.success("Blog is created successfully!");
      setContent("");
      setValue("blog-title", "");
      setValue("blog-description", "");
      router.push("/blog");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // get & upload image files to Cloudinary
  const onSubmitHandler = async () => {
    setLoading(true);
    const images: string[] = extractImageUrls(content);

    const uploadPromises = images.map(async (image) => {
      const fileName = `image_${Date.now()}.png`;
      const file = await convertBlobUrlToFile(image, fileName);
      const uploadImageUrl = await uploadFileToCloudinary(file);

      return uploadImageUrl;
    });
    const uploadedFiles = await Promise.all(uploadPromises);

    const createdBlog: BlogData = {
      id: generateUUID(),
      title: watch("blog-title"),
      description: watch("blog-description"),
      content,
      images: uploadedFiles,
      date_created: generateTimestampz(),
      date_updated: generateTimestampz(),
      creator_id: generateUUID(),
      is_top_blog: false,
      is_deleted: false,
      viewers: 0,
    };

    mutation.mutate(createdBlog);
    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <form
        className="w-full h-fit flex flex-col gap-1"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="w-full h-full grid grid-cols-2 sm:flex sm:flex-col gap-4">
          <div className="w-full h-full hidden sm:block">
            <WriterInformation />
          </div>
          <div className="w-full h-fit flex flex-col gap-2">
            <div className="flex flex-col">
              <label className="ml-2">Blog&apos;s Title</label>
              <input
                className="w-full h-8 border border-[#CCCCCC] shadow-sm rounded-lg"
                type="text"
                placeholder="Enter title"
                {...register("blog-title")}
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2">Description:</label>
              <textarea
                className="w-full h-24 border border-[#CCCCCC] shadow-sm rounded-lg"
                placeholder="Enter description"
                {...register("blog-description")}
              />
            </div>
          </div>
          <div className="w-full h-full sm:hidden">
            <WriterInformation />
          </div>
          <div className="w-full">
            <h2 className="ml-2 text-lg">Content</h2>
            <FroalaEditorComponent
              model={content}
              onModelChange={(model: string) => {
                setContent(model);
              }}
              config={{
                placeholderText: "Write your content here ...",
                saveInterval: 1000,
                // *** NOT WORKING HUHUHU ***
                // imageUploadURL:
                //   "https://api.cloudinary.com/v1_1/ddoku9wa1/image/upload",
                // imageUploadMethod: "POST",
                // imageUploadPreset: "ml_default",
                // imageMaxSize: 10 * 1024 * 1024,
                // imageAllowedTypes: ["jpg", "jpeg", "png", "gif"],
                // imageUploadParams: { id: "blog-images" },
                events: {
                  "save.before": function (html: any) {
                    localStorage.setItem("saved-content", html);
                  },
                  // "image.inserted": async () => { },
                },
              }}
              tag="textarea"
            />
          </div>
          <div className="w-full">
            <h2 className="ml-2 text-lg">Content Preview</h2>
            <div className="min-h-[152px] px-4 py-2 bg-[#FFFFFF] border border-[#CCCCCC] shadow-sm rounded-lg">
              <FroalaEditorView model={content} />
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-2 gap-2 justify-center items-center">
          <SpinnerLoading isLoading={isLoading} />
          <div className="w-fit mr-7">
            <PrimaryButton name="Create" onClick={() => {}} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogForm;

const extractImageUrls = (htmlContent: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const images = doc.querySelectorAll("img");
  const imageUrls = Array.from(images).map((img) => img.src);

  return imageUrls;
};
