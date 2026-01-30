import { useEffect, useState } from "react";

export interface User {
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
     const [loading, setLoading] = useState(true);
   

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch {
        localStorage.removeItem("user");
      }
    }
     setLoading(false);
  }, []);

  const login = (email: string): void => {
    const userData: User = { email };

    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = (): void => {
    localStorage.removeItem("user");
    setUser(null);
  };
   const isAuthenticated = !!user;

  return {
    user,
    login,
    logout,
    loading,
    isAuthenticated,
  };
}
