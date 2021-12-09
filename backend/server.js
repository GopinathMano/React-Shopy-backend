import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from './routers/orderRouter.js';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose connection
mongoose.connect(process.env.MONGODB_URL , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// sever middleware

app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use('/api/orders', orderRouter);

// server Running notification
app.get("/", (req, res) => {
  res.send("server is ready");
});

// error resolver
// app.use((err, req, res) => {
//   res.status(500).send({ message: err.message });
// });

// server listener
const port = 5000;
app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
