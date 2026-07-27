import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const logout = async () => {
  const res = await api.post("/api/auth/logout");
  return res.data;
};