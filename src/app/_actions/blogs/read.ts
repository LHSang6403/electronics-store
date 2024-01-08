"use server";

import createSupabaseServerClient from "@supabase/server";

export async function readBlogs({ limit }: { limit: number }) {
  try {
    const supabase = await createSupabaseServerClient();
    return await supabase.from("blogs").select("*").limit(limit);
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readBlogById(id: string) {
  const supabase = await createSupabaseServerClient();
  return await supabase.from("blogs").select("*").eq("id", id);
}
