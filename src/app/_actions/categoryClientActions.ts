// import createSupabaseBrowserClient from "@supabase/client";

// export async function readAllCategory() {
//   const supabse = createSupabaseBrowserClient();
//   return await supabse.from("category").select("*");
// }

// export async function readCategoryById(id: string) {
//   const supabase = createSupabaseBrowserClient();

//   const { data: category, error } = await supabase
//     .from("category")
//     .select("*")
//     .eq("id", id);

//   if (error) {
//     console.log(error);
//   } else if (category) {
//     console.log(category[0]);
//   }
// }
