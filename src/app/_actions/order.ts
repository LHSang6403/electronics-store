"use server";

import createSupabaseServerClient from "@supabase/server";

export async function readOrders(
  processState: "pending" | "processing" | "delivering" | "done"
) {
  try {
    const supabase = await createSupabaseServerClient();

    return await supabase
      .from("orders")
      .select("*")
      .eq("process_state", processState);
  } catch (error: any) {
    return { error: error.message };
  }
}
