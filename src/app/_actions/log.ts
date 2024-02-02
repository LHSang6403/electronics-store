"use server";

import createSupabaseServerClient from "@supabase/server";

export async function saveToLog(
  action: string,
  actor: string,
  actionResult: any
) {
  try {
    const supabase = await createSupabaseServerClient();

    const result = await supabase.from("logs").insert({
      action,
      actor,
      result: actionResult.error ? "Failed" : "Success",
    });

    return result;
  } catch (error: any) {
    return error;
  }
}

export async function readLogs(limit: number | "all") {
  try {
    const supabase = await createSupabaseServerClient();

    let result;
    if (limit === "all") {
      result = await supabase.from("logs").select("*");
    } else result = await supabase.from("logs").select("*").limit(limit);

    const staffs = (await supabase.from("staffs").select("id,name")) as {
      data: any;
      error: any;
    };
    result = mergeDataWithStaffName(result.data, staffs.data);

    return result;
  } catch (error: any) {
    return error;
  }
}

function mergeDataWithStaffName(logs: any, staffs: any) {
  return logs.map((log: any) => {
    const staffInfo = staffs.find((staff: any) => staff.id === log.actor);

    if (staffInfo) {
      return {
        ...log,
        name: staffInfo.name,
      };
    } else {
      return {
        ...log,
        name: "Unknown",
      };
    }
  });
}
