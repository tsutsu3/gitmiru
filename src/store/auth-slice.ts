import { StoreSlice } from "./store";

export interface AuthSlice {
  pat?: string;
  endpoint?: string;
  firstVisit: boolean;
  setPat: (pat: string) => void;
  setEndpoint: (endpoint: string) => void;
  setFirstVisit: (firstVisit: boolean) => void;
}

export const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  pat: undefined,
  endpoint: undefined,
  firstVisit: true,
  setPat: (pat: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      pat: pat,
    }));
  },
  setEndpoint: (endpoint: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      endpoint: endpoint,
    }));
  },
  setFirstVisit: (firstVisit: boolean) => {
    set((prev: AuthSlice) => ({
      ...prev,
      firstVisit: firstVisit,
    }));
  },
});
