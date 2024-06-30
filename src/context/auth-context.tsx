import { createContext, ReactNode } from "react";
import useStore from "@store/store";

export interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, setIsAuthenticated } = useStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    setIsAuthenticated: state.setIsAuthenticated,
  }));

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
