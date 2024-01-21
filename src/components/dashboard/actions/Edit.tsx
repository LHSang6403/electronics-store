import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui-shadcn/dialog";
import { Button } from "@components/ui-shadcn/button";

export default function Edit() {
  return (
    <Dialog>
      <DialogTrigger className="mx-1">Edit</DialogTrigger>
      <DialogContent className="rounded-xl">
        <DialogHeader>
          <DialogTitle>To update new information</DialogTitle>
          <DialogDescription>
            This action cannot be undone so you have to be careful.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-32 bg-blue-200">Content here</div>
        <div className="flex flex-row gap-2 justify-center">
          <Button>Cancel</Button>
          <Button className="bg-primary hover:bg-primary">Update</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
