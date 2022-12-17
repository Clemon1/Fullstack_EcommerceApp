import { Request, Response } from "express";
import User from "../model/userModel";
import bcrypt from "bcrypt";
import crypto from "crypto";

import { sendVerifictionEmail } from "../middleware/emailVerification";

// Register Controller

const Register = async (req: Request, res: Response) => {
  try {
    // Check for existing email
    const { email } = req.body;
    const isMatch = await User.findOne({ email });
    if (isMatch) {
      // this is to check for existing account
      return res.status(404).json("This user exist already");
    }
    // Hashing password with bcrypt
    const salt = await bcrypt.genSalt(12);

    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
      emailToken: crypto.randomBytes(64).toString("hex"),
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      sendVerifictionEmail(savedUser);
      res
        .status(200)
        .json({ message: "Registration successful, please verify email" });
    }
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Login

const Login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // If your not an admin you wont be authenticated
    if (user?.isAdmin !== true) {
      return res
        .status(401)
        .json("You are not an admin you cannot enter here ");
    }

    if (!user) {
      return res.status(404).json("User does not exist");
    }
    const ifPassword = await bcrypt.compare(password, user.password);
    if (!ifPassword) {
      return res.status(404).json("Invalid password");
    }

    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

const usersLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json("User does not exist");
    }
    const ifPassword = await bcrypt.compare(password, user.password);
    if (!ifPassword) {
      return res.status(404).json("Invalid password");
    }

    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Verify Email
const verifyLink = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.find({
      _id: id,
      emailToken: req.params.emailToken,
    });

    await User.findOneAndUpdate({ _id: id, isVerified: true });

    res.status(200).json({ message: "Email Verification Succesfully" });
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

export { Register, Login, usersLogin, verifyLink };
