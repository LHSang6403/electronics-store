"use server";

import createSupabaseServerClient from "@supabase/server";
import { checkRoleAdmin } from "@app/_actions/user";
import { saveToLog } from "@app/_actions/log";

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

export async function updateProductById(id: string, data: any) {
  try {
    const checkRoleAdminResult = (await checkRoleAdmin()) as {
      data: any;
      error: any;
    };

    if (checkRoleAdminResult.error) {
      return { error: checkRoleAdminResult.error };
    }

    const supabase = await createSupabaseServerClient();
    const result = await supabase
      .from("products")
      .update(data)
      .eq("id", id)
      .select();

    const actorId = checkRoleAdminResult.data.id;
    await saveToLog(`Update product ${id}`, actorId, result);

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteProductById(id: string) {
  try {
    const checkRoleAdminResult = (await checkRoleAdmin()) as {
      data: any;
      error: any;
    };

    if (checkRoleAdminResult.error) {
      return { error: checkRoleAdminResult.error };
    }

    const supabase = await createSupabaseServerClient();
    const result = await supabase
      .from("products")
      .update({ is_deleted: true })
      .eq("id", id);

    const actorId = checkRoleAdminResult.data.id;
    await saveToLog(`Delete product ${id}`, actorId, result);

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}
