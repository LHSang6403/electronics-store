"use client";

import { useForm } from "react-hook-form";
import { updateProductById } from "@app/_actions/product";
import { toast } from "sonner";

import { type ProductData } from "@app/(main)/product/interface";

const EditForm = ({ data }: { data: ProductData }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: data.name,
      description: data.description ?? "",
      sale: data.sale ?? "",
      price: data.price,
    },
  });

  const onSubmit = async (formData: any) => {
    const result = await updateProductById(data.id, formData);

    if (result.error) {
      toast.error("Error while uploading.");
    }
    toast.success("Uploaded successfully.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-0.5 ml-1">
          Name:
        </label>
        <input
          {...register("name")}
          type="text"
          className="border border-[#E5E7EB] text-sm rounded w-full py-1 px-2"
        />
      </div>
      <div className="mb-1">
        <label className="block text-gray-700 text-sm font-bold mb-0.5 ml-1">
          Description:
        </label>
        <textarea
          {...register("description")}
          className="max-h-[200px] border border-[#E5E7EB] text-sm rounded w-full py-1 px-2"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-0.5 ml-1">
          Sale:
        </label>
        <input
          {...register("sale")}
          type="text"
          className="border border-[#E5E7EB] text-sm rounded w-full py-1 px-2"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-0.5 ml-1">
          Price (x1000 VND):
        </label>
        <input
          {...register("price")}
          type="text"
          className="border border-[#E5E7EB] text-sm rounded w-full py-1 px-2"
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          type="button"
          onClick={() => {
            reset({
              name: data.name,
              description: data.description ?? "",
              sale: data.sale ?? "",
              price: data.price,
            });
          }}
          className="bg-[#101827] text-white xl:text-sm font-medium py-1.5 px-4 mr-4 rounded"
        >
          Undo
        </button>
        <button
          type="submit"
          className="bg-primary text-white xl:text-sm font-medium py-1.5 px-4 rounded"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default EditForm;
