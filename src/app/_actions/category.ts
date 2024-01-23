"use server";

import createSupabaseServerClient from "@/supabase/server";

export async function readCategoryById(id: string) {
  const supabase = await createSupabaseServerClient();
  const { data: product } = await supabase
    .from("products")
    .select("category")
    .eq("id", id)
    .eq("is_deleted", false)
    .single();

  if (!product) {
    throw new Error("Product not found");
  }

  const categoryId = product.category;
  return await supabase
    .from("category")
    .select("*")
    .eq("id", categoryId)
    .eq("is_deleted", false);
}
