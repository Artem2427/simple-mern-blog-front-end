import { api } from "./api";

const authServices: AuthServices = {
  async login(params) {
    const res = await api.post("/auth/login", params);

    return res.data;
  },

  async authMe() {
    const res = await api.get("/auth/me");

    return res.data;
  },

  async register(params) {
    const res = await api.post("/auth/register", params);

    return res.data;
  },
};

export default authServices;
