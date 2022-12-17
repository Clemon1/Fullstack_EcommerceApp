import {
  getOrders,
  findOrdersByID,
  createOrders,
  updateOrders,
} from "../controller/orderController";
import { Router } from "express";

const router = Router();

router.get("/", getOrders);
router.get("/:id", findOrdersByID);
router.post("/create", createOrders);
router.put("/:id", updateOrders);

export default router;
