"use server";

import createSupabaseServerClient from "@supabase/server";
import { readUserSession } from "@app/auth/_actions";
import { saveToLog } from "@app/_actions/log";

export async function readAllCustomers() {
  try {
    const supabase = await createSupabaseServerClient();
    const result = await supabase.from("customers").select("*");

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function updateCustomerById(id: string, data: any) {
  try {
    const checkRoleAdminResult = (await checkRoleAdmin()) as {
      data: any;
      error: any;
    };
    if (checkRoleAdminResult.error) {
      return { error: checkRoleAdminResult.error };
    }

    const supabase = await createSupabaseServerClient();
    let result;

    if (data.role === "staff" || data.role === "admin") {
      // update customer to staff/ admin: move row from customers table to staffs table

      // check if this customer already have oreder
      const orderResult = await supabase
        .from("orders")
        .select("*")
        .eq("buyer_id", id);

      if (orderResult.data) {
        result = { error: "This customer already have order" };
      }

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
        result = { error: addResult.error ?? deleteResult.error };
      } else {
        result = addResult;
      }
    } else {
      result = await supabase.from("customers").update(data).eq("id", id);
    }

    const actorId = checkRoleAdminResult.data.id;
    await saveToLog(`Update customer ${id}`, actorId, result);

    return result;
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

    const result = await supabase.from("staffs").select("*");
    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readStaff() {
  try {
    const session = await readUserSession();
    const userId = session.data.session?.user.id;

    const supabase = await createSupabaseServerClient();
    const result = await supabase
      .from("staffs")
      .select("*")
      .eq("id", userId)
      .single();

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function updateStaffById(id: string, data: any) {
  try {
    const checkRoleAdminResult = (await checkRoleAdmin()) as {
      data: any;
      error: any;
    };

    if (checkRoleAdminResult.error) {
      return { error: checkRoleAdminResult.error };
    }

    const supabase = await createSupabaseServerClient();
    const result = await supabase.from("staffs").update(data).eq("id", id);

    const actorId = checkRoleAdminResult.data.id;
    await saveToLog(`Upate staff ${id}`, actorId, result);

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function checkRoleCustomer() {
  try {
    const session = await readUserSession();
    const userId = session.data.session?.user.id;

    const supabase = await createSupabaseServerClient();
    const result = await supabase
      .from("customers")
      .select("*")
      .eq("id", userId)
      .single();

    if (result.error) {
      return { error: result.error };
    }

    return result;
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

    return staff;
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

    return staff;
  } catch (error: any) {
    return { error: error.message };
  }
}
