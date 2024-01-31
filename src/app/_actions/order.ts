"use server";

import createSupabaseServerClient from "@supabase/server";
import { checkRoleAdminAndStaff } from "@app/_actions/user";

export async function readOrders(
  processState: "pending" | "processing" | "delivering" | "done" | "all"
) {
  try {
    const supabase = await createSupabaseServerClient();
    let result;

    if (processState === "all") {
      result = await supabase.from("orders").select("*");
    } else {
      result = await supabase
        .from("orders")
        .select("*")
        .eq("process_state", processState);
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
    const checkRoleAdminAndStaffResult = await checkRoleAdminAndStaff();
    if (checkRoleAdminAndStaffResult.error) {
      return { error: checkRoleAdminAndStaffResult.error };
    }

    const supabase = await createSupabaseServerClient();

    const updateResult = await supabase
      .from("orders")
      .update({ process_state: state })
      .eq("id", id);

    return updateResult;
  } catch (error: any) {
    return { error: error.message };
  }
}
