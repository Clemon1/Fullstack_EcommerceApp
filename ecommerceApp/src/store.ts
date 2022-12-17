import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { getTotals } from "./features/cartSlice";
import productSlice from "./features/productSlice";
import authSlice from "./features/authSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    auth: authSlice,
  },
});

store.dispatch(getTotals);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
