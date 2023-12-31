"use client";

import { Button } from "@components/ui-shadcn/ui/button";
import { toast } from "sonner";
import { signOutHandler } from "./_actions";

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOutHandler();
      toast.success("Sign out successfully.");
    } catch (error: any) {
      toast.error(error.message);
      console.error("Error signing out:", error);
    }
  };

  return (
    <form action={handleSignOut}>
      <Button type="submit" className="w-full h-7 px-2 flex gap-2">
        Sign Out
      </Button>
    </form>
  );
};

export default SignOut;
