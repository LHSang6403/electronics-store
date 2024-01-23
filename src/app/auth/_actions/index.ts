"use server";

import createSupabaseServerClient, {
  createSupabaseAdmin,
} from "@supabase/server";
import { redirect } from "next/navigation";

export async function signUpWithEmailAndPassword(data: {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirm: string;
  role?: string;
}) {
  // const supabase = await createSupabaseServerClient();
  // const result = await supabase.auth.signUp({
  //   email: data.email,
  //   password: data.password,
  // });

  const supabase = await createSupabaseAdmin();

  const result = await supabase.auth.admin.createUser({
    email: data.email,
    password: data.password,
    email_confirm: true,
    user_metadata: {
      name: data.name,
      phone: data.phone,
      role: data.role === "staff" ? "staff" : "customer",
      is_admin: false,
    },
  });

  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(result);
}

export async function signOutHandler() {
  "use server";
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    return error;
  }
  return redirect("/auth");
}

export async function readUserSession() {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.getSession();
  return result;
}
