import { create } from "zustand";

export const useSideBar = create((set) => ({
  isOpenSideBar: false,
  toggleSideBar: () => {
    set((state: any) => {
      return { isOpenSideBar: !state.isOpenSideBar };
    });
  },
  hideSideBar: () => {
    set((state: any) => {
      return { isOpenSideBar: false };
    });
  },
}));
