import axios from "axios";

const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/product",
  "/about",
  "/contact",
];

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5067/api",
  // withCredentials: true, // REQUIRED for req.cookies to work in your middleware
});

// --- REQUEST INTERCEPTOR (Sending the data) ---
api.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Automatically attach referenceWebsite to POST/PUT/GET requests
  const refId = process.env.NEXT_PUBLIC_REF_ID;
  if (refId) {
    if (config.method === "post" || config.method === "put") {
      if (!(config.data instanceof FormData)) {
        config.data = { ...config.data, referenceWebsite: refId };
      }
    } else if (config.method === "get") {
      config.params = { ...config.params, referenceWebsite: refId };
    }
  }

  return config;
});

// --- RESPONSE INTERCEPTOR (Handling Refresh & Errors) ---
api.interceptors.response.use(
  (response) => {
    // 1. Capture the new token sent by your verifyToken middleware
    const newToken = response.headers["x-new-access-token"];
    if (newToken) {
      console.log("Access Token Refreshed via Middleware");
      localStorage.setItem("accessToken", newToken);
    }
    return response;
  },
  (error) => {
    // 2. Handle Session Expiry
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userData");

        const currentPath = window.location.pathname;

        const isPublicRoute =
          publicRoutes.includes(currentPath) ||
          currentPath.startsWith("/product");

        if (!isPublicRoute) {
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  },
);

export default api;
