"use server";

import createSupabaseServerClient from "@supabase/server";

export async function readOrders(
  processState: "pending" | "processing" | "delivering" | "done"
) {
  try {
    const supabase = await createSupabaseServerClient();

    const result = await supabase
      .from("orders")
      .select("*")
      .eq("process_state", processState);

    const { data: buyers } = await supabase
      .from("orders")
      .select(`customers (id, name)`);

    const mergedData = mergeDataWithBuyerName(result.data, buyers);
    // console.log("mergedData", mergedData);

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
