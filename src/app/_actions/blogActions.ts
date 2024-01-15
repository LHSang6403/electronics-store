"use server";

import createSupabaseServerClient from "@supabase/server";

import type BlogData from "@app/(main)/blog/interface";

export async function readBlogs({ limit }: { limit: number }) {
  try {
    const supabase = await createSupabaseServerClient();
    return await supabase
      .from("blogs")
      .select("*")
      .eq("is_deleted", false)
      .eq("is_top_blog", false)
      .limit(limit);
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readTopBlogs({ limit }: { limit: number }) {
  try {
    const supabase = await createSupabaseServerClient();
    return await supabase
      .from("blogs")
      .select("*")
      .eq("is_deleted", false)
      .eq("is_top_blog", true)
      .limit(limit);
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readBlogById(id: string) {
  const supabase = await createSupabaseServerClient();
  return await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .eq("is_deleted", false)
    .single();
}

export async function createBlog(blog: BlogData) {
  try {
    const supabase = await createSupabaseServerClient();
    return await supabase.from("blogs").insert(blog).single();
  } catch (error: any) {
    return { error: error.message };
  }
}