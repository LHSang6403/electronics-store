import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui-shadcn/dialog";
import CreteForm from "@app/(protected)/dashboard/order/Create/CreateForm";

export default function Create() {
  return (
    <Dialog>
      <DialogTrigger className="w-fit h-fit sm:ml-auto rounded-lg px-3 py-1 bg-primary text-black sm:text-sm flex justify-center items-center">
        Create
      </DialogTrigger>
      <DialogContent className="rounded-xl sm:w-[94%] sm:mx-auto">
        <DialogHeader>
          <DialogTitle>To create an order</DialogTitle>
          <DialogDescription>
            An order is a request to buy a product or service.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-fit">
          <CreteForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
