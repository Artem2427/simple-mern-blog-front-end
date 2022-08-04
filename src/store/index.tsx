import { configureStore, combineReducers } from "@reduxjs/toolkit";

import postsReducer from "./posts/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({ postsReducer, authReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // devTools: true,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
