import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui-shadcn/dialog";
import { Button } from "@components/ui-shadcn/button";

export default function Remove() {
  return (
    <Dialog>
      <DialogTrigger className="mx-1 text-red-400">Remove</DialogTrigger>
      <DialogContent className="rounded-xl">
        <DialogHeader>
          <DialogTitle>To remove this data line</DialogTitle>
          <DialogDescription>
            Confirm to remove this data line. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row gap-2 justify-center">
          <Button>Cancel</Button>
          <Button className="bg-primary hover:bg-primary">Confirm</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
