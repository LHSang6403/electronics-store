import createSupabaseBrowerClient from "@/supabase/client";

export async function readAllCategory() {
  const supabse = createSupabaseBrowerClient();
  return await supabse.from("category").select("*");
}
