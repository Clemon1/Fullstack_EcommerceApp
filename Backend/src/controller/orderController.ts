import order from "../model/orderModel";
import { Request, Response } from "express";

// get orders

const getOrders = async (req: Request, res: Response) => {
  try {
    const findOrders = await order
      .find({})
      .populate("userId")
      .populate({ path: "products._id", model: "Product" })
      .exec();
    res.status(200).json(findOrders);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
// get single orders
const findOrdersByID = async (req: Request, res: Response) => {
  const id = req.params.id;
  const findSingle = await order
    .findById(id)
    .populate({ path: "products._id", model: "Product" });
  res.status(200).json(findSingle);
  try {
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
// create orders
const createOrders = async (req: Request, res: Response) => {
  try {
    const { address, otherPhone } = req.body;
    if (!address || !otherPhone) {
      return res.status(404).json("Address or Phone Number is required");
    }
    const newOrders = new order(req.body);
    const saveOrder = await newOrders.save();
    res.status(200).json(saveOrder);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
// update orders
const updateOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updateORD = await order.findByIdAndUpdate(id, { $set: req.body });
    res.status(200).json(updateORD);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

export { getOrders, findOrdersByID, createOrders, updateOrders };
