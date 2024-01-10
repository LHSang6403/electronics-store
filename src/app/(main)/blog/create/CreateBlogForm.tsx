"use client";

import PrimaryButton from "@components/buttons/PrimaryButton";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useState, useEffect } from "react";
import htmlParser from "html-react-parser";

import { uploadImage } from "./_actions/upload";

// cloudinary's plugins
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/save.min.js";
import "froala-editor/js/plugins/paragraph_format.min.js";
import "froala-editor/js/plugins/paragraph_style.min.js";
import "froala-editor/js/plugins/markdown.min.js";
import "froala-editor/js/plugins/font_size.min.js";

const CreateBlogForm = () => {
  // fix window is undefined
  const [position, setPosition] = useState<any>();
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((newPos) => {
      setPosition(newPos);
    }, console.error);
  }, []);

  // hook-form
  const { register, handleSubmit, watch, setValue } = useForm();

  // rich editor auto save
  const [content, setContent] = useState<string>(() => {
    return localStorage.getItem("saved-content") ?? "";
  });

  // save hook-form values to localStorage
  useFormPersist("blog-information", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const onSubmitHandler = (data: any) => {
    console.log("Create Blog Form's data:", data, "Blog's content:", content);
  };

  // parse img tag in content in rich text editor
  useEffect(() => {
    htmlParser(content, {
      replace: async (domNode) => {
        if (domNode.type === "tag" && domNode.name === "img") {
          const imageUrl = domNode.attribs.src;
          console.log("---IMG:", imageUrl);
          // call function to upload image to cloudinary (imageUrl)
        }
      },
    });
  }, [content]);

  return (
    <div className="flex flex-row justify-center gap-4">
      <div className="w-[600px]">
        <h2 className="text-lg">Content</h2>
        <FroalaEditorComponent
          model={content}
          onModelChange={(model: string) => {
            setContent(model);
          }}
          config={{
            // imageUploadParam: "images",
            placeholderText: "Write your content here ...",
            saveInterval: 1000,
            events: {
              "save.before": function (html: any) {
                localStorage.setItem("saved-content", html);
              },
              // "image.interted": handleUploadImage,
            },
          }}
          tag="textarea"
        />
      </div>
      <form
        className="w-[400px] h-fit flex flex-col gap-1"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div>
          <label className="text-lg">Blog&apos;s Title:</label>
          <input
            className="w-full h-8 border border-[#CCCCCC] shadow-sm rounded-lg"
            type="text"
            placeholder="Enter title"
            {...register("Blog title")}
          />
        </div>
        <div>
          <label className="text-lg">Description:</label>
          <textarea
            className="w-full h-24 border border-[#CCCCCC] shadow-sm rounded-lg"
            placeholder="Enter description"
            {...register("Description")}
          />
        </div>
        <PrimaryButton name="Create" onClick={() => {}} />
      </form>
    </div>
  );
};

export default CreateBlogForm;
