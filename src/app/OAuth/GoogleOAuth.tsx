"use client";

import { Button } from "@/components/ui-shadcn/button";
import createSupabaseBrowerClient from "@supabase/client";
import { toast } from "sonner";

export async function signInWithGoogle() {
  const supabase = createSupabaseBrowerClient();

  try {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/OAuth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  } catch (error: any) {
    toast.error(error.message);
  }
}

export default function GoogleOAuthForm() {
  return (
    <Button className="w-full" onClick={signInWithGoogle}>
      Login With Google
    </Button>
  );
}
