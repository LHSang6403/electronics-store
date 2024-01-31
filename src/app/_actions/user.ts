"use server";

import createSupabaseServerClient from "@supabase/server";
import { readUserSession } from "@app/auth/_actions";

export async function readAllCustomers() {
  try {
    const supabase = await createSupabaseServerClient();

    return await supabase.from("customers").select("*");
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function updateCustomerById(id: string, data: any) {
  try {
    const checkRoleAdminResult = await checkRoleAdmin();
    if (checkRoleAdminResult.error) {
      return { error: checkRoleAdminResult.error };
    }

    const supabase = await createSupabaseServerClient();

    if (data.role === "staff" || data.role === "admin") {
      // update customer to staff/ admin: move row from customers table to staffs table

      // add row in staffs table
      delete data.score;
      const addResult = await supabase
        .from("staffs")
        .insert({ id, name: data.name, phone: data.phone, role: data.role });

      // delete row in customers table
      const deleteResult = await supabase
        .from("customers")
        .delete()
        .eq("id", id);

      if (addResult.error ?? deleteResult.error) {
        return { error: addResult.error ?? deleteResult.error };
      }
      return addResult;
    } else {
      return await supabase.from("customers").update(data).eq("id", id);
    }
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readAllStaffs() {
  try {
    const checkRoleAdminResult = await checkRoleAdmin();
    if (checkRoleAdminResult.error) {
      return { error: checkRoleAdminResult.error };
    }

    const supabase = await createSupabaseServerClient();

    return await supabase.from("staffs").select("*");
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readStaff() {
  try {
    const session = await readUserSession();
    const userId = session.data.session?.user.id;

    const supabase = await createSupabaseServerClient();

    return await supabase.from("staffs").select("*").eq("id", userId).single();
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function updateStaffById(id: string, data: any) {
  try {
    const checkRoleAdminResult = await checkRoleAdmin();
    if (checkRoleAdminResult.error) {
      return { error: checkRoleAdminResult.error };
    }

    const supabase = await createSupabaseServerClient();

    return await supabase.from("staffs").update(data).eq("id", id);
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function checkRoleAdmin() {
  try {
    const staff = await readStaff();
    if (staff.error || ("data" in staff && staff.data?.role !== "admin")) {
      return { error: staff.error };
    }

    return { data: true };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function checkRoleAdminAndStaff() {
  try {
    const staff = await readStaff();
    if (
      staff.error ||
      ("data" in staff &&
        staff.data?.role !== "admin" &&
        staff.data?.role !== "staff")
    ) {
      return { error: staff.error };
    }

    return { data: true };
  } catch (error: any) {
    return { error: error.message };
  }
}
