import {
  CombinedState,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import authServices from "../../services/authServices";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (params: LoginBody) => {
    const response = await authServices.login(params);
    return response;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const response = await authServices.authMe();
  return response;
});

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params: LoginBody & { fullName: string }) => {
    const response = await authServices.register(params);

    return response;
  }
);

const initialState: AuthSlice = {
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.loading = false;
    },
  },

  extraReducers: {
    [fetchUserData.pending.type]: (state) => {
      state.loading = true;
      state.user = null;
    },
    [fetchUserData.fulfilled.type]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },

    [fetchUserData.rejected.type]: (state) => {
      state.loading = false;
      state.user = null;
    },

    [fetchAuthMe.pending.type]: (state) => {
      state.loading = true;
      state.user = null;
    },
    [fetchAuthMe.fulfilled.type]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },

    [fetchAuthMe.rejected.type]: (state) => {
      state.loading = false;
      state.user = null;
    },

    [fetchRegister.pending.type]: (state) => {
      state.loading = true;
      state.user = null;
    },
    [fetchRegister.fulfilled.type]: (
      state,
      action: PayloadAction<LoginInfo>
    ) => {
      state.user = action.payload.user;
      state.loading = false;
    },

    [fetchRegister.rejected.type]: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
});

export const selectIsAuth = (
  state: CombinedState<{
    postsReducer: PostInitialState;
    authReducer: AuthSlice;
  }>
) => Boolean(state.authReducer.user);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
