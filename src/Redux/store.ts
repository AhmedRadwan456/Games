import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./gamesSlice";
import { detailsReducer } from "./gamesDetailsSlice";

export const store = configureStore({
  reducer: {
    Home: homeReducer,
    Details:detailsReducer
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
