"use server";

import createSupabaseServerClient from "@supabase/server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

interface ItemsContainerProps {
  check: { isAllProducts: boolean };
}

export async function readProducts({
  check: { isAllProducts },
}: ItemsContainerProps) {
  // noStore();
  const supabse = await createSupabaseServerClient();
  if (isAllProducts)
    return await supabse.from("products").select("*").limit(16);
  return await supabse.from("products").select("*");
}

export async function readProductById(id: string) {
  // noStore();
  const supabse = await createSupabaseServerClient();
  return await supabse.from("products").select("*").eq("id", id);
}

export async function readCategoryById(id: string) {
  // noStore();
  const supabse = await createSupabaseServerClient();
  const { data: product } = await supabse
    .from("products")
    .select("category")
    .eq("id", id)
    .single();
  const categoryId = product.category;
  return await supabse.from("category").select("*").eq("id", categoryId);
}

export async function readProductDetailDescriptionById(id: string) {
  const supabse = await createSupabaseServerClient();
  return await supabse
    .from("product detail descriptions")
    .select("*")
    .eq("product", id)
    .single();
}

export async function readProductDetailImageById(id: string) {
  const supabse = await createSupabaseServerClient();
  return await supabse
    .from("product detail images")
    .select("*")
    .eq("product", id)
    .single();
}
