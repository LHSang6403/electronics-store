import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import Register from "./register";
import SignInForm from "./signIn";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/ui_shadcn/tabs-custom";

export default async function Page() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  return (
    <div className="w-60 h-fit mx-auto pt-32">
      <Tabs defaultValue="signIn" className="w-full">
        <h1 className="text-xl font-semibold text-center">Authentication</h1>
        <TabsList className="flex flex-row justify-center gap-1 my-2">
          <TabsTrigger value="signIn">Sign In</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="signIn">
          <SignInForm />
        </TabsContent>
        <TabsContent value="register">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  );
}
