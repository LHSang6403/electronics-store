import createSupabaseServerClient from "@/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui-shadcn/ui/button";

const SignOut = () => {
  const signOutHandler = async () => {
    "use server";
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    redirect("/auth");
  };
  return (
    <form action={signOutHandler}>
      <Button type="submit" className="w-full h-7 px-2 flex gap-2">
        Sign Out
      </Button>
    </form>
  );
};

export default SignOut;
