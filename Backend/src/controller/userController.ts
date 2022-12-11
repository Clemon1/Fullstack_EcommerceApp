import { Request, Response } from "express";
import User from "../model/userModel";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { sendVerifictionEmail } from "../middleware/emailVerification";

// // Setting up nodemailer
// async () => {
//   let transporter = nodemailer.createTransport({
//     host: "smtp-relay.sendinblue.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "clemonezeh@gmail.com", // generated ethereal user
//       pass: "4vAMaGQpJw9nkhY2", // generated ethereal password
//     },
//   });
//   let info = await transporter.sendMail({
//     from: "clemonezeh@gmail", // sender address
//     to: "nwankwoben5@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });
// };
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
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      sendVerifictionEmail(savedUser.email, savedUser.firstName, savedUser._id);
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

export { Register, Login };
