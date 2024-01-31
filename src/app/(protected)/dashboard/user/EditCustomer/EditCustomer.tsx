import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui-shadcn/dialog";
import EditForm from "@app/(protected)/dashboard/user/EditCustomer/EditForm";

export default function EditCustomer(data: { data: any }) {
  return (
    <Dialog>
      <DialogTrigger className="mx-1">Edit</DialogTrigger>
      <DialogContent className="rounded-xl sm:w-[94%] sm:mx-auto">
        <DialogHeader>
          <DialogTitle>To update customer information</DialogTitle>
          <DialogDescription>
            Staff and Admin can access this information.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-fit">
          <EditForm data={data.data} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
