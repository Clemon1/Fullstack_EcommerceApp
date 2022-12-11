import mongoose from "mongoose";

interface prducts {
  id: string;
  title: string;
  description: string;
  price: number;
  category: object;
  image: object;
}

const productSchema = new mongoose.Schema<prducts>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const product = mongoose.model("Product", productSchema);
export default product;
