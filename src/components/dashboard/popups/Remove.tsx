"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui-shadcn/dialog";
import { deleteProductById } from "@app/_actions/product";
import { deleteBlogById } from "@app/_actions/blog";
import { deleteOrderById } from "@app/_actions/order";
import { toast } from "sonner";

export default function Remove({ id, table }: { id: string; table: string }) {
  async function handleDelete(id: string): Promise<void> {
    let result = null;

    if (table === "products") {
      result = await deleteProductById(id);
    } else if (table === "blogs") {
      result = await deleteBlogById(id);
    } else if (table === "orders") {
      result = await deleteOrderById(id);
    } else {
      toast.error("Error: can not be deleted.");
    }

    if (result?.error) {
      toast.error(result.error);
    }
    toast.success("Product is deleted successfully");
  }

  return (
    <Dialog>
      <DialogTrigger className="mx-1 text-red-400">Remove</DialogTrigger>
      <DialogContent className="rounded-xl sm:w-[94%] sm:mx-auto">
        <DialogHeader>
          <DialogTitle>To remove this data line</DialogTitle>
          <DialogDescription>
            Confirm to remove this data line in {table}. This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row gap-2 justify-center">
          <button
            onClick={async () => {
              await handleDelete(id);
            }}
            className="bg-primary text-white xl:text-sm font-medium py-1.5 px-4 rounded"
          >
            Remove
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
