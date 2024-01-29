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
  const supabaseServerClient = await createSupabaseServerClient();

  const supabase = await createSupabaseAdmin();

  const createResult = await supabase.auth.admin.createUser({
    email: data.email,
    password: data.password,
    email_confirm: true,
  });

  if (createResult.error?.message) {
    return JSON.stringify(createResult);
  } else {
    const memberResult = await supabaseServerClient.from("customers").insert({
      // all new accounts are customers by default,
      // and they can be added to be staff/ admin by the admin after
      id: createResult.data.user?.id,
      name: data.name,
      phone: data.phone,
      email: data.email,
    });
    if (memberResult.error?.message) {
      return JSON.stringify(memberResult);
    }
  }
  return JSON.stringify(createResult);
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
