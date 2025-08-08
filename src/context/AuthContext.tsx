import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";


interface UserType {
  id: string;
  exp: number;
  iat: number;
}

interface AuthUserContextType {
  user: UserType | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;

}

const AuthUserContext = createContext<AuthUserContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        const decoded = jwtDecode<UserType>(storedToken);
        setUser(decoded);
        setToken(storedToken);
      } catch (error) {
        console.error("Token decoding failed:", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = useCallback((newToken: string) => {
    localStorage.setItem("token", newToken);
    const decoded = jwtDecode<any>(newToken);


    const userId = decoded.id || decoded.userId;
    if (!userId) {
      throw new Error("User ID not found in token");
    }

    const userData: UserType = {
      id: userId,  
      exp: decoded.exp,
      iat: decoded.iat,
    };

    setUser(userData);
    setToken(newToken);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  }, []);



  return (
    <AuthUserContext.Provider value={{ user, token, login, logout, }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthUserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};