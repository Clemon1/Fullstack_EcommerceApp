import mongoose from "mongoose";
import product from "./productModel";

interface Order {
  userId: Object;
  products: {
    productId: string;
    quantity: number;
  };
  amount: number;
  address: string;
  otherPhone: string;
  status: string;
}

const orderModel = new mongoose.Schema<Order>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        cartQuantity: {
          type: Number,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    otherPhone: {
      type: String,
      required: [true, "Phone Number is required"],
    },
    status: {
      type: String,
      enum: ["pending", "Successful", "Failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

const order = mongoose.model("orders", orderModel);

export default order;
