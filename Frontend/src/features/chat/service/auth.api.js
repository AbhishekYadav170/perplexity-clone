import axios from "axios";

const api = axios.create({
  baseURL: "https://perplexity-clone-pvgw.onrender.com",
  withCredentials: true,
});

export const logout = async () => {
  const res = await api.post("/api/auth/logout");
  return res.data;
};

export const getMe = async () => {
    const res = await api.get("/api/auth/get-me");
    return res.data;
};