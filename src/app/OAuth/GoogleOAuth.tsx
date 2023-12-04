"use client";

import { Button } from "@/components/ui-shadcn/ui/button";
import createSupabaseBrowerClient from "@supabase/client";

export async function signInWithGoogle() {
  const supabase = createSupabaseBrowerClient();

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
}

export default function GoogleOAuthForm() {
  return (
    <Button className="w-full" onClick={signInWithGoogle}>
      Login With Google
    </Button>
  );
}
