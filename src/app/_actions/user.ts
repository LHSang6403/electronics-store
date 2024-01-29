"use server";

import createSupabaseServerClient from "@supabase/server";
import { readUserSession } from "@app/auth/_actions";

export async function readAllCustomers() {
  try {
    const supabase = await createSupabaseServerClient();

    return await supabase.from("customers").select("*");
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readAllStaffs() {
  try {
    // only admin can read all staffs
    // const { data: userSession } = await readUserSession();
    // if (userSession.session?.user.user_metadata.is_admin !== true) {
    //   throw new Error("You are not allowed to do this!");
    // }

    const supabase = await createSupabaseServerClient();

    return await supabase.from("staffs").select("*");
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readStaff() {
  try {
    const session = await readUserSession();
    const userId = session.data.session?.user.id;

    const supabase = await createSupabaseServerClient();
    return await supabase.from("staffs").select("*").eq("id", userId).single();
  } catch (error: any) {
    return { error: error.message };
  }
}
