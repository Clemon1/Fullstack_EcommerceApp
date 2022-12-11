import { Request, Response } from "express";
import category from "../model/categoryModel";

const getAllCategory = async (req: Request, res: Response) => {
  try {
    const findCategory = await category.find();
    res.status(200).json(findCategory);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};
const getCategoryByID = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const getSingleCategory = await category.findById(id);
    res.status(200).json(getSingleCategory);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

const countCategory = async (req: Request, res: Response) => {
  const categoryCount = await category.find().count();
  res.status(200).json(categoryCount);
};

const createCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = new category(req.body);
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

export { getAllCategory, getCategoryByID, createCategory, countCategory };
