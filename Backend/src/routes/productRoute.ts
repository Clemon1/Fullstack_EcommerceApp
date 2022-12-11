import { Router } from "express";
import {
  getAllProduct,
  getProductByID,
  createProduct,
  countProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController";
import multer from "multer";
import path from "path";

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./upload"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/", getAllProduct);
router.get("/:id", getProductByID);
router.get("/count", countProduct);
router.post("/create", upload.single("ImageFile"), createProduct);
router.put("/:id", upload.single("ImageFlie"), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
