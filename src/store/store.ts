import { StoreApi, create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthSlice, createAuthSlice } from "./auth-slice";

export type StoreState = AuthSlice;

export type StoreSlice<T> = (set: StoreApi<StoreState>["setState"], get: StoreApi<StoreState>["getState"]) => T;

export const createPartializedState = (state: StoreState) => ({
  pat: state.pat,
  endpoint: state.endpoint,
  isAuthenticated: state.isAuthenticated,
});

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...createAuthSlice(set, get),
    }),
    {
      name: "gitmiru",
      partialize: (state) => createPartializedState(state),
      version: 1,
    },
  ),
);

export default useStore;
