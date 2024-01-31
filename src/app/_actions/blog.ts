"use server";

import createSupabaseServerClient from "@supabase/server";
import { checkRoleAdmin, checkRoleAdminAndStaff } from "@app/_actions/user";

import type BlogData from "@app/(main)/blog/interface";

export async function readBlogs({ limit }: { limit: number | "read-all" }) {
  try {
    const supabase = await createSupabaseServerClient();

    if (limit === "read-all") {
      return await supabase.from("blogs").select("*").eq("is_deleted", false);
    } else {
      return await supabase
        .from("blogs")
        .select("*")
        .eq("is_deleted", false)
        .eq("is_top_blog", false)
        .limit(limit);
    }
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
    const checkRoleAdminAndStaffResult = await checkRoleAdminAndStaff();
    if (checkRoleAdminAndStaffResult.error) {
      return { error: checkRoleAdminAndStaffResult.error };
    }

    const supabase = await createSupabaseServerClient();
    return await supabase.from("blogs").insert(blog).single();
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function updateBlogById(id: string, data: any) {
  try {
    const checkRoleAdminResult = await checkRoleAdmin();
    if (checkRoleAdminResult.error) {
      return { error: checkRoleAdminResult.error };
    }

    const supabase = await createSupabaseServerClient();
    return await supabase.from("blogs").update(data).eq("id", id);
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteBlogById(id: string) {
  try {
    const checkRoleAdminAndStaffResult = await checkRoleAdminAndStaff();
    if (checkRoleAdminAndStaffResult.error) {
      return { error: checkRoleAdminAndStaffResult.error };
    }

    const supabase = await createSupabaseServerClient();

    const deleteResult = await supabase
      .from("blogs")
      .update({ is_deleted: true })
      .eq("id", id);

    return deleteResult;
  } catch (error: any) {
    return { error: error.message };
  }
}
