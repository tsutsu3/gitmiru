import { StoreSlice } from "./store";

export interface AuthSlice {
  pat?: string;
  endpoint?: string;
  isAuthenticated: boolean;
  setPat: (pat: string) => void;
  setEndpoint: (endpoint: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const createAuthSlice: StoreSlice<AuthSlice> = (set) => ({
  pat: undefined,
  endpoint: undefined,
  isAuthenticated: false,
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
  setIsAuthenticated: (isAuthenticated: boolean) => {
    set((prev: AuthSlice) => ({
      ...prev,
      isAuthenticated: isAuthenticated,
    }));
  },
});
