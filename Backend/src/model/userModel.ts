import mongoose from "mongoose";
interface userModel {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  emailToken: string;
  isVerified: boolean;
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
    emailToken: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      max: 5,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
