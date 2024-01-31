import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui-shadcn/dialog";
import EditForm from "@app/(protected)/dashboard/blog/Edit/EditForm";

export default function Edit(data: { data: any }) {
  return (
    <Dialog>
      <DialogTrigger className="mx-1">Edit</DialogTrigger>
      <DialogContent className="rounded-xl sm:w-[94%] sm:mx-auto">
        <DialogHeader>
          <DialogTitle>To update blog information</DialogTitle>
          <DialogDescription>
            This action cannot be undone so you have to be careful.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-fit">
          <EditForm data={data.data} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
