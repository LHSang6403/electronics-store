"use client";

import { useForm } from "react-hook-form";
import { updateBlogById } from "@app/_actions/blog";
import { toast } from "sonner";
import { Checkbox } from "@components/ui-shadcn-custom/checkbox-custom";

const EditForm = ({ data }: { data: any }) => {
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      title: data.title,
      description: data.description,
      is_top_blog: data.is_top_blog,
    },
  });

  const onSubmit = async (formData: any) => {
    const result = await updateBlogById(data.id, formData);

    if (result.error) {
      toast.error(`Error while updating: ${result.error}.`);
    } else {
      toast.success("Updated successfully.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-0.5 ml-1">
          Title:
        </label>
        <input
          {...register("title")}
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
        <div className="flex flex-row items-center gap-1">
          <Checkbox
            defaultChecked={data.is_top_blog}
            onCheckedChange={(e) => {
              setValue("is_top_blog", e);
            }}
          />
          <p className="block text-gray-500 text-sm">Whether this is on top?</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          type="button"
          onClick={() => {
            reset({
              title: data.title,
              description: data.description,
              is_top_blog: data.is_top_blog,
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
