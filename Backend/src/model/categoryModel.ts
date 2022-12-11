import mongoose from "mongoose";

interface categories {
  Name: string;
}
const categorySchema = new mongoose.Schema<categories>(
  {
    Name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const category = mongoose.model("category", categorySchema);

export default category;
