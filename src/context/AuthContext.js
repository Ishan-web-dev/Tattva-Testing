"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 🔄 Restore user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const token = localStorage.getItem("accessToken");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  // ✅ LOGIN
  const login = (token, userData) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userData", JSON.stringify(userData));

    // Optional: quick access
    localStorage.setItem("email", userData.email);

    setUser(userData);
    router.push("/product");
  };

  // ✅ register
  const register = (userData) => {
    router.push(
      `/verify-otp?email=${encodeURIComponent(userData?.email)}&firstName=${userData?.firstName}&lastName=${userData?.lastName}&mobile=${userData?.mobile}&referenceWebsite=${userData?.referenceWebsite}&password=${userData?.password}`,
    );
  };

  // ✅ otp verify register
  const otpVerify = (token, userData) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userData", JSON.stringify(userData));

    // Optional: quick access
    localStorage.setItem("email", userData.email);

    setUser(userData);
    router.push("/");
  };

  // ✅ LOGOUT
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("email");

    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, otpVerify, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
