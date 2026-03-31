import { useState, createContext, useContext } from "react";

export interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function useAuth(): AuthContextType {
  return useContext(AuthContext);
}

export function useAuthProvider() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("sportpass-auth") === "true";
  });

  const login = () => {
    localStorage.setItem("sportpass-auth", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("sportpass-auth");
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
}
