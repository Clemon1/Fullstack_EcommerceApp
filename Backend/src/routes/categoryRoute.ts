import { Router } from "express";
import {
  getAllCategory,
  getCategoryByID,
  countCategory,
  createCategory,
} from "../controller/categoryController";
const router = Router();
router.get("/", getAllCategory);
router.get("/count", countCategory);
router.get("/:id", getCategoryByID);
router.post("/", createCategory);

export default router;
