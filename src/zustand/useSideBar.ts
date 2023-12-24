import { create } from "zustand";

export const useSideBar = create((set) => ({
  isOpenSideBar: false,
  toggleSideBar: () => {
    set((state: any) => {
      // if (state.isOpenSideBar === true) document.body.style.opacity = "1";
      // else document.body.style.opacity = "0.5";
      return { isOpenSideBar: !state.isOpenSideBar };
    });
  },
  hideSideBar: () => {
    set((state: any) => {
      // document.body.style.opacity = "1";
      return { isOpenSideBar: false };
    });
  },
}));
