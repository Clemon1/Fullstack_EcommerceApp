import { Router } from "express";
import {
  Register,
  Login,
  verifyLink,
  usersLogin,
} from "../controller/userController";

const router = Router();
router.post("/register", Register);
router.post("/login", Login);
router.post("/userslogin", usersLogin);
router.get("/:id/verify/:token", verifyLink);

export default router;
