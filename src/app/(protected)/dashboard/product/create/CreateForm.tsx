"use client";

import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { readCategories } from "@app/_actions/category";
import WriterInformation from "@/app/(protected)/dashboard/blog/create/WriterInformation";
import { toast } from "sonner";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui-shadcn/form";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@components/ui-shadcn-custom/select-custom2";
import { Button } from "@components/ui-shadcn-custom/button-custom";
import { Input } from "@components/ui-shadcn-custom/input-custom";
import Image from "next/image";
import { createProductDescription } from "@app/_actions/productDescription";
import { createProduct } from "@app/_actions/product";

// utils
import convertBlobUrlToFile from "@utils/convertBlobUrlToFile";
import uploadFileToCloudinary from "@utils/uploadFileToCloudinary";
import extractImageUrls from "@utils/extractImageUrls";

// cloudinary's plugins
import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/save.min.js";
import "froala-editor/js/plugins/markdown.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import { checkRoleAdminAndStaff } from "@/app/_actions/user";

const formSchema = z
  .object({
    product_name: z.string(),
    product_image: z.string(),
    product_category: z.string(),
    product_sale: z.string(),
    product_price: z.string(),
  })
  .refine(
    (data) => {
      return Object.values(data).every((value) => value !== null);
    },
    {
      message: "The fields cannot be null.",
    }
  );

const CreateForm = (): JSX.Element => {
  // fix window is undefined
  const [position, setPosition] = useState<any>();
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((newPos) => {
      console.log("pos", position);
      setPosition(newPos);
    }, console.error);
  }, []);

  const productLocalData = localStorage.getItem("product-create");
  const productLocalDataJson = productLocalData ? JSON.parse(productLocalData) : {};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product_name: productLocalDataJson.product_name ?? "",
      product_image: "",
      product_category: productLocalDataJson.product_category ?? "",
      product_sale: productLocalDataJson.product_sale ?? "",
      product_price: productLocalDataJson.product_price ?? "",
    },
  });

  const { watch, setValue } = form;

  if (typeof window !== "undefined") {
    useFormPersist("product-create", {
      watch,
      setValue,
      storage: window.localStorage,
    });
  }

  // rich editor auto save
  const [descriptionContent, setDescriptionContent] = useState<string>(() => {
    return localStorage.getItem("saved-product-description-content") ?? "";
  });

  //  fetching
  const {
    data: category,
    isSuccess: categoryIsSuccess,
  }: {
    data: any;
    isSuccess: boolean;
  } = useQuery({
    queryKey: [`category`],
    queryFn: async () => await readCategories(),
    staleTime: 1000 * 60 * 5,
  });

  const {
    data: adminAndStaffs,
    error: adminAndStaffsError,
  }: {
    data: any;
    error: any;
  } = useQuery({
    queryKey: [`staffs-dashboard`],
    queryFn: async () => await checkRoleAdminAndStaff(),
    staleTime: 1000 * 60 * 1,
    refetchOnWindowFocus: true,
  });

  if (adminAndStaffsError) {
    throw new Error("Error while fetching session data.");
  }

  const categoryData = category?.data;
  const adminAndStaffsData = adminAndStaffs?.data;

  const [productImageFile, setProductImageFile] = useState<File | null>(null);
  const [productImageFileString, setProductImageFileString] = useState<string | null>(null);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!productImageFile) {
      toast.error("Please upload product image.");
      return;
    }
    const uploadImageResult = await uploadFileToCloudinary(productImageFile);

    const productDescriptionImages: string[] = extractImageUrls(descriptionContent);
    const uploadProductDescriptionPromises = productDescriptionImages.map(async (image) => {
      const fileName = `product_desctiption_${Date.now()}.png`;
      const file = await convertBlobUrlToFile(image, fileName);
      const uploadImageUrl = await uploadFileToCloudinary(file);

      return uploadImageUrl;
    });
    const uploadedProductDescriptionFiles = await Promise.all(uploadProductDescriptionPromises);

    const createdProductDesccription = {
      creator_id: adminAndStaffsData.id,
      content: descriptionContent,
      images: uploadedProductDescriptionFiles,
    };

    const createdProductDescriptionResult = await createProductDescription(createdProductDesccription);

    if (createdProductDescriptionResult.error) {
      toast.error("Error while creating product description.");
      return;
    }

    const createdProduct = {
      name: values.product_name,
      category: values.product_category,
      sale: values.product_sale,
      price: values.product_price,
      image: uploadImageResult,
      description_id: createdProductDescriptionResult.data[0].id,
      rating: 3.5,
    };

    const createdProductResult = await createProduct(createdProduct);
    if (createdProductResult.error) {
      toast.error("Error while creating product.");
    } else {
      toast.success("Product created successfully.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full h-auto grid grid-cols-2 sm:flex sm:flex-col gap-4"
        >
          <div className="w-full h-full flex flex-col gap-4 p-4 bg-white rounded-lg border border-[#CCCCCC]">
            <FormField
              control={form.control}
              name="product_name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter product name" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {categoryIsSuccess && (
              <FormField
                control={form.control}
                name="product_category"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categoryData.map((cat: any, index: number) => (
                            <SelectItem key={index} value={cat.name}>
                              <div className="flex flex-row gap-2">
                                <div className="w-5 h-5 rounded overflow-hidden">
                                  <Image src={cat.image} alt="Category" width={500} height={500} />
                                </div>
                                <p>{cat.name}</p>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            )}
            <FormField
              control={form.control}
              name="product_sale"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Sale</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter product sale" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="product_price"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter product price" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div className="w-full h-full flex flex-col gap-4">
            <div className="mt-3">
              <WriterInformation />
            </div>
            <FormItem className="w-fit mx-auto">
              <FormLabel>Product image</FormLabel>
              <div className="w-full h-fit flex flex-row gap-2">
                <div className="flex flex-col justify-start gap-2">
                  <Input
                    className="p-0 w-[134px]"
                    type="file"
                    onChange={(e) => {
                      if (e.target.files) {
                        const file = e.target.files[0];
                        setProductImageFile(file);

                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setProductImageFileString(reader.result as string);
                        };

                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  {productImageFile && (
                    <Button
                      className="bg-red-400 hover:bg-red-400"
                      onClick={() => {
                        setProductImageFile(null);
                        setProductImageFileString(null);
                      }}
                    >
                      Remove
                    </Button>
                  )}
                </div>
                {productImageFileString && (
                  <div className="w-44 h-28 rounded overflow-hidden shadow">
                    <Image src={productImageFileString} alt="Preview" width={500} height={500} />
                  </div>
                )}
              </div>
            </FormItem>
          </div>
          <div className="w-full">
            <h2 className="ml-2 text-base font-medium text-[#12181C]">Product description</h2>
            <FroalaEditorComponent
              model={descriptionContent}
              onModelChange={(model: string) => {
                setDescriptionContent(model);
              }}
              config={{
                placeholderText: "Write your content here ...",
                saveInterval: 1000,
                events: {
                  "save.before": function (html: any) {
                    localStorage.setItem("saved-product-description-content", html);
                  },
                },
              }}
              tag="textarea"
            />
          </div>
          <div className="w-full">
            <h2 className="ml-2 text-base font-medium text-[#12181C]">Description Preview</h2>
            <div className="min-h-[200px] px-4 py-2 bg-[#FFFFFF] border border-[#CCCCCC] shadow-sm rounded-lg">
              <FroalaEditorView model={descriptionContent} />
            </div>
          </div>
          <div className="col-span-2 w-full flex justify-center items-center">
            <Button className="w-20 p-0 m-0 bg-primary">Create</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateForm;
