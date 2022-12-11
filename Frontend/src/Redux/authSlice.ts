import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// const loginUser = createAsyncThunk("auth/login", async (body) => {
//   const response = await axios.post("http://localhost:5000/auth/login", {
//     body,
//   });
//   return await response.data;
// });

interface authLogin {
  user: any;
  loading: boolean;
  error: String;
}
const users = localStorage.getItem("User");

const initialState: authLogin = {
  user: users ? JSON.parse(users) : null,
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<object>) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("User", JSON.stringify(state.user));
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = "";
    },
    logOut: (state) => {
      state.user = null;
      state.loading = false;
      state.error = "";
      localStorage.removeItem("User");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  authSlice.actions;
export const currentUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
