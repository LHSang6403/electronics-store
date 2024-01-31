"use client";

import { useForm } from "react-hook-form";
import { updateOrderStateById } from "@app/_actions/order";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui-shadcn-custom/select-custom2";

const EditForm = ({ data }: { data: any }) => {
  const { handleSubmit, reset, setValue } = useForm();

  const onSubmit = async (formData: any) => {
    const result = await updateOrderStateById(data.id, formData.state);

    if (result.error) {
      toast.error("Error while uploading.");
    }
    toast.success("Uploaded state successfully.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-0.5 ml-1">
          State of the order:
        </label>
        <Select
          onValueChange={(e) => {
            setValue("state", e);
          }}
          defaultValue={data.state}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a state of order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="delivering">Delivering</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          type="button"
          onClick={() => {
            reset({
              state: data.state,
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
