import { create } from "zustand";

interface SessionStore {
  userSession: any;
  saveSession: (session: any) => void;
  removeSession: () => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  userSession: null,
  saveSession: (session: unknown) => {
    set({ userSession: session });
  },
  removeSession: () => {
    set({ userSession: null });
  },
}));
