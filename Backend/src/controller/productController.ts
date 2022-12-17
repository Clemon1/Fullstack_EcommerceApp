import { Request, Response } from "express";
import product from "../model/productModel";
import User from "../model/userModel";

// Get all product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const findproduct = await product.find().populate("category").exec();
    res.status(200).json(findproduct);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Count all product
const countProduct = async (req: Request, res: Response) => {
  const count = await product.find().count().exec();
  console.log(count);

  res.status(200).json({ count });
};

const getProductByID = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const getSingleProduct = await product.findById(id);
    res.status(200).json(getSingleProduct);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
const createProduct = async (req: Request, res: Response) => {
  try {
    const newProducs = new product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file?.filename,
    });

    const savedProduct = await newProducs.save();
    console.log(savedProduct);

    res.status(200).json(savedProduct);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(result);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedProduct = await product.findByIdAndDelete(id);
    res.status(200).json("Deleted Successfully");
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

export {
  getAllProduct,
  getProductByID,
  countProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
