import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";

//Routes Import
import productRoutes from "./routes/Product.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "AI Lifestyle Assistant API is running"
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "OK",
    service: "backend"
  });
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
};

startServer();