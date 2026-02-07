import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";

//-------------- App Config-------------

const app = express();
const PORT = process.env.PORT || 4000;
connectDB()
connectCloudinary()


// -----------Middlewares-----------
app.use(express.json());
app.use(cors());


//---------- API Endpoints-------------
app.use("/api/user",userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter)


app.get("/", (req, res) => {
  res.status(200).send("The server is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});