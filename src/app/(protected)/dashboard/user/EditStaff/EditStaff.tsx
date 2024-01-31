import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui-shadcn/dialog";
import EditForm from "@app/(protected)/dashboard/user/EditStaff/EditForm";

export default function EditStaff(data: { data: any }) {
  return (
    <Dialog>
      <DialogTrigger className="mx-1">Edit</DialogTrigger>
      <DialogContent className="rounded-xl sm:w-[94%] sm:mx-auto">
        <DialogHeader>
          <DialogTitle>To update staff information</DialogTitle>
          <DialogDescription>Only admin can do this access.</DialogDescription>
        </DialogHeader>
        <div className="w-full h-fit">
          <EditForm data={data.data} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
