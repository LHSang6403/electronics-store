import { create } from "zustand";

import type BlogData from "@app/(main)/blog/interface";

const blog: BlogData = {
  id: "",
  title: "",
  image: "",
  content: "",
  date_created: "",
  date_updated: "",
  creator_id: "",
  is_top_blog: false,
  is_deleted: false,
};

export const useSideBar = create((set) => ({
  blog,
  createBlog: (title: string, description: string) => {
    set((state: any) => {
      return { isOpenSideBar: !state.isOpenSideBar };
    });
  },
}));
