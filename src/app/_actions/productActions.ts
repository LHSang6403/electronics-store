"use server";

import createSupabaseServerClient from "@/supabase/server";

export async function readProducts({ limit }: { limit: number }) {
  try {
    const supabase = await createSupabaseServerClient();

    return await supabase
      .from("products")
      .select("*")
      .eq("is_deleted", false)
      .limit(limit);
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readProductById(id: string) {
  const supabase = await createSupabaseServerClient();
  return await supabase.from("products").select("*").eq("is_deleted", false);
}

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
