import Register from "@app/auth/Register";
import SignInForm from "@app/auth/SignIn";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui-shadcn-custom/tabs-custom";

export default function Page() {
  return (
    <div className="w-72 h-fit bg-white shadow border rounded-xl mx-auto p-4 mt-28 mb-44">
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
