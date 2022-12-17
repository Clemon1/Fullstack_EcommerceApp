import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

type cartData = {
  _id: string;
  title: string;
  price: number;
  rating: number;
  discountPrice: number;
  image: string;
  cartQuantity: number;
};
interface cartInterface {
  cartItems: cartData[];
  cartTotalQuantity: number;
  cartTotalPrice: number;

  isLoading: boolean;
}

const cartStorage = localStorage.getItem("cart");
const initialState: cartInterface = {
  cartItems: cartStorage ? JSON.parse(cartStorage) : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "Cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<cartData>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id,
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Increased ${state.cartItems[itemIndex].title} quantity`);
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);

        toast.success(`${action.payload.title} has been added to cart`);
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    removeCartItems: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const removeCart = (state.cartItems = state.cartItems.filter(
        (item) => item._id !== itemId,
      ));
      state.cartItems = removeCart;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success("Cart item removed");
    },

    decreaseQuantity: (state, action: PayloadAction<cartData>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id,
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cart");
      toast.success("Cart Items removed");
    },
    getTotals: (state) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalPrice = total;
    },
  },
});

export const {
  addToCart,
  clearCart,
  getTotals,
  decreaseQuantity,
  removeCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
