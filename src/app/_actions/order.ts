"use server";

import createSupabaseServerClient from "@supabase/server";
import { checkRoleAdminAndStaff } from "@app/_actions/user";
import { saveToLog } from "@app/_actions/log";

export async function createOrder(data: any) {
  try {
    const supabase = await createSupabaseServerClient();

    const order = {
      buyer_id: data.buyer_id,
      products_name: data.items,
      quantity: data.quantities,
      process_state: "pending",
      total_price: 1000,
    };
    const result = await supabase.from("orders").insert(order);

    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function readOrders(
  processState: "pending" | "processing" | "delivering" | "done" | "all"
) {
  try {
    const supabase = await createSupabaseServerClient();
    let result;

    if (processState === "all") {
      result = await supabase
        .from("orders")
        .select("*")
        .eq("is_deleted", false);
    } else {
      result = await supabase
        .from("orders")
        .select("*")
        .eq("process_state", processState)
        .eq("is_deleted", false);
    }

    const { data: buyers } = await supabase
      .from("orders")
      .select(`customers (id, name)`);
    const mergedData = mergeDataWithBuyerName(result.data, buyers);

    return mergedData;
  } catch (error: any) {
    return { error: error.message };
  }
}

function mergeDataWithBuyerName(data: any, buyersInfo: any) {
  return data.map((order: any) => {
    const buyerInfo = buyersInfo.find(
      (buyer: any) => buyer.customers.id === order.buyer_id
    );

    if (buyerInfo) {
      return {
        ...order,
        buyer_name: buyerInfo.customers.name,
      };
    } else {
      return order;
    }
  });
}

export async function updateOrderStateById(
  id: string,
  state: "pending" | "processing" | "delivering" | "done"
) {
  try {
    const checkRoleAdminAndStaffResult = (await checkRoleAdminAndStaff()) as {
      data: any;
      error: any;
    };

    if (checkRoleAdminAndStaffResult.error) {
      return { error: checkRoleAdminAndStaffResult.error };
    }

    const supabase = await createSupabaseServerClient();
    const updateResult = await supabase
      .from("orders")
      .update({ process_state: state })
      .eq("id", id);

    const actorId = checkRoleAdminAndStaffResult.data.id;
    await saveToLog(`Update state of order ${id}`, actorId, updateResult);

    return updateResult;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteOrderById(id: string) {
  try {
    const checkRoleAdminAndStaffResult = (await checkRoleAdminAndStaff()) as {
      data: any;
      error: any;
    };

    if (checkRoleAdminAndStaffResult.error) {
      return { error: checkRoleAdminAndStaffResult.error };
    }

    const supabase = await createSupabaseServerClient();
    const deleteResult = await supabase
      .from("orders")
      .update({ is_deleted: true })
      .eq("id", id);

    const actorId = checkRoleAdminAndStaffResult.data.id;
    await saveToLog(`Delete order ${id}`, actorId, deleteResult);

    return deleteResult;
  } catch (error: any) {
    return { error: error.message };
  }
}
