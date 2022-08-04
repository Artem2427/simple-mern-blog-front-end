import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postServices from "../../services/postsServices";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await postServices.fetchAllPosts();
  return response;
});

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const response = await postServices.fetchLastTags();
  return response;
});

export const fetchRemovePost = createAsyncThunk(
  "posts/fetchRemovePost",
  async (id: string) => {
    await postServices.deleteOnePost(id);
  }
);

const initialState: PostInitialState = {
  posts: {
    items: [],
    loading: false,
  },
  tags: {
    items: [],
    loading: false,
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.posts.items = [];
      state.posts.loading = true;
    },

    [fetchPosts.fulfilled.type]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.loading = false;
    },

    [fetchPosts.rejected.type]: (state) => {
      state.posts.loading = false;
    },

    [fetchTags.pending.type]: (state) => {
      state.tags.loading = true;
    },

    [fetchTags.fulfilled.type]: (state, action) => {
      state.tags.items = action.payload;
      state.tags.loading = false;
    },

    [fetchTags.rejected.type]: (state) => {
      state.tags.loading = false;
    },

    [fetchRemovePost.pending.type]: (state, action) => {
      state.posts.items = state.posts.items.filter(
        (item) => item._id !== action.meta.arg
      );
    },
  },
});

export default postsSlice.reducer;
