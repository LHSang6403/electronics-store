"use server";

import createSupabaseServerClient from "@/supabase/server";

interface ItemsContainerProps {
  check: { isAllProducts: boolean };
}

export async function readProducts({
  check: { isAllProducts },
}: ItemsContainerProps) {
  try {
    const supabase = await createSupabaseServerClient();
    if (isAllProducts)
      return await supabase.from("products").select("*").limit(16);
    return await supabase.from("products").select("*");
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readProductById(id: string) {
  const supabase = await createSupabaseServerClient();
  return await supabase.from("products").select("*").eq("id", id);
}

export async function readCategoryById(id: string) {
  const supabase = await createSupabaseServerClient();
  const { data: product } = await supabase
    .from("products")
    .select("category")
    .eq("id", id)
    .single();

  if (!product) {
    throw new Error("Product not found");
  }
  const categoryId = product.category;
  return await supabase.from("category").select("*").eq("id", categoryId);
}

// export async function readProductDetailDescriptionById(id: string) {
//   const supabase = await createSupabaseServerClient();
//   return await supabase
//     .from("product detail descriptions")
//     .select("*")
//     .eq("product", id)
//     .single();
// }

// export async function readProductDetailImageById(id: string) {
//   const supabase = await createSupabaseServerClient();
//   return await supabase
//     .from("product detail images")
//     .select("*")
//     .eq("product", id)
//     .single();
// }
