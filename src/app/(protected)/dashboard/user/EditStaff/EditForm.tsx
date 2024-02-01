"use client";

import { useForm } from "react-hook-form";
import { updateStaffById } from "@app/_actions/user";
import { toast } from "sonner";

const EditForm = ({ data }: { data: any }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: data.name,
      phone: data.phone ?? "",
    },
  });

  const onSubmit = async (formData: any) => {
    const result = await updateStaffById(data.id, formData);

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
          Name:
        </label>
        <input
          {...register("name")}
          type="text"
          className="border border-[#E5E7EB] text-sm rounded w-full py-1 px-2"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-0.5 ml-1">
          Phone:
        </label>
        <input
          {...register("phone")}
          className="border border-[#E5E7EB] text-sm rounded w-full py-1 px-2"
        />
      </div>

      <div className="flex items-center justify-center mt-4">
        <button
          type="button"
          onClick={() => {
            reset({
              name: data.name,
              phone: data.phone ?? "",
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
