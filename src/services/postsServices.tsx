import { api } from "./api";

const postServices: PostServices = {
  async fetchAllPosts() {
    const res = await api.get("/posts");
    return res.data;
  },
  async fetchOnePost(id) {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  },

  async fetchLastTags() {
    const res = await api.get("/posts/tags/limit");

    return res.data;
  },

  async uploadPostImage(formData) {
    const res = await api.post("/upload", formData);

    return res.data;
  },

  async addNewPost(data) {
    const res = await api.post("/posts", data);

    return res.data;
  },

  async deleteOnePost(id) {
    const res = await api.delete(`/posts/${id}`);
    return res.data;
  },

  async updateOnePost(id, data) {
    const res = await api.patch(`/posts/${id}`, data);
    return res.data;
  },
};

export default postServices;
