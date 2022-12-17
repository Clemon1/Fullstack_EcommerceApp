import dotenv from "dotenv";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("/product/all", async () => {
  const response = await axios.get(`http://localhost:4000/product`);
  return await response.data;
});

type productData = {
  _id: string;
  title: string;
  price: number;
  rating: number;
  discountPrice: number;
  brand: string;
  category: string;
  image: string;
  images: [string];
};
interface products {
  isLoading: boolean;
  product: productData[];
  isError: string;
}

const initialState: products = {
  isLoading: false,
  product: [],
  isError: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
      state.product = [];
      state.isError = "";
    });
    builder.addCase(
      fetchProduct.fulfilled,
      (state, action: PayloadAction<productData[]>) => {
        state.isLoading = false;
        state.product = action.payload;
        state.isError = "";
      },
    );
    builder.addCase(fetchProduct.rejected, (state, action) => {
      (state.isLoading = false),
        (state.isError = action.error.message || "Cannot get all products");
    });
  },
});

export default productSlice.reducer;
