import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import productRouter from "./routes/productRoute";
import categoryRouter from "./routes/categoryRoute";
import userRouter from "./routes/userRoutes";

const PORT = 5000;

const app = express();

const db = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/mrBenDB");
    console.log("Connected to Database");
  } catch (err: any) {
    console.log("Error connecting to database");
  }
};
db();

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("./upload"));

//Routes

app.use("/auth", userRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TS World");
});

app.listen(PORT, () => console.log(`TS-APP listening to port ${PORT}`));
