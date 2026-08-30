import { Request, Response } from "express";
import { Product } from "../models/Product.model.js";

// Controller function to create a new product
export const createProduct = async (
  req: Request,
  res: Response
) => {
  try{
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create product"
    });
  }
}


// Controller function to get all active products
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

// Controller function to get a product by ID
export const getProductById = async (
  req: Request,
  res: Response
) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    res.json({
      success: true,
      product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product"
    });
  } 
}

// Controller function to update a product by ID
export const updateProduct = async (
  req: Request,
  res: Response
) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    res.json({
      success: true,
      product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update product"
    });
  }
}

// Controller function to delete a product by ID
export const deleteProduct = async (
  req: Request,
  res: Response
) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id,{ isActive: false }, { new: true });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    res.json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false, 
      message: "Failed to delete product"
    });
  } 
}