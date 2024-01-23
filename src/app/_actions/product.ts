"use server";

import createSupabaseServerClient from "@supabase/server";

export async function readProducts({ limit }: { limit: number | "read-all" }) {
  try {
    const supabase = await createSupabaseServerClient();

    if (limit === "read-all") {
      return await supabase
        .from("products")
        .select("*")
        .eq("is_deleted", false);
    } else {
      return await supabase
        .from("products")
        .select("*")
        .eq("is_deleted", false)
        .limit(limit);
    }
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readProductById(id: string) {
  try {
    const supabase = await createSupabaseServerClient();
    return await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .eq("is_deleted", false)
      .single();
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function updateProductById<Type>(
  id: string,
  permission_id: string,
  data: Type
) {
  try {
    const supabase = await createSupabaseServerClient();
    return await supabase.from("products").update(data).eq("id", id);
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteProductById(id: string, permission_id: string) {
  try {
    const supabase = await createSupabaseServerClient();
    return await supabase
      .from("products")
      .update({ is_deleted: true })
      .eq("id", id);
  } catch (error: any) {
    return { error: error.message };
  }
}
