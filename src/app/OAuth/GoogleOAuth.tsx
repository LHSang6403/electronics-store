"use client";

import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";

export async function signInWithGoogle() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

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
