import { Request, Response } from "express";
import { Product } from "../models/Product.model.js";

export const getProducts = async (
  _req: Request,
  res: Response
) => {
  try {
    const products = await Product.find({
      isActive: true
    });

    res.json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products"
    });
  }
};