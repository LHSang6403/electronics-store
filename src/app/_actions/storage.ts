"use server";

import createSupabaseServerClient from "@supabase/server";

export async function readStorage(limit: number | "all") {
  try {
    const supabase = await createSupabaseServerClient();

    let result;
    if (limit === "all") result = await supabase.from("storage").select("*");
    else result = await supabase.from("storage").select("*").limit(limit);

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readProductQuantityById(id: string) {
  try {
    const supabase = await createSupabaseServerClient();

    const result = await supabase
      .from("storage")
      .select("product_quantity")
      .eq("product_id", id)
      .single();

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function updateProductQuantityById(
  productId: string,
  delta: number
) {
  try {
    const supabase = await createSupabaseServerClient();

    const result = await supabase.rpc("update_product_quantity", {
      productId,
      delta,
    });

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readAllAvailableProducts(limit: number) {
  try {
    const supabase = await createSupabaseServerClient();

    const result = await supabase
      .from("storage")
      .select("*")
      .gt("product_quantity", 0)
      .limit(limit);

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}
