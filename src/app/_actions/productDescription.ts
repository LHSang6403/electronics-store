"use server";

import createSupabaseServerClient from "@supabase/server";

export async function createProductDescription(insertData: any) {
  try {
    const supabase = await createSupabaseServerClient();

    const { data, error }: { data: any; error: any } = await supabase
      .from("products_description")
      .upsert(insertData)
      .select();

    return { data, error };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function getProductDescription(productId: string) {
  try {
    const supabase = await createSupabaseServerClient();

    const { data, error }: { data: any; error: any } = await supabase
      .from("products_description")
      .select()
      .eq("id", productId);

    return { data, error };
  } catch (error: any) {
    return { error: error.message };
  }
}
