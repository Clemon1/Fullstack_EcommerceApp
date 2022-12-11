import mongoose from "mongoose";
interface userModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const userSchema = new mongoose.Schema<userModel>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      max: 5,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
