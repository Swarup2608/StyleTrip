import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description?: string;
  category: string;
  gender: "male" | "female" | "unisex";
  colors: string[];
  styles: string[];
  occasions: string[];
  materials: string[];
  sizes: string[];
  price: number;
  stock: number;
  imageUrl?: string;
  embedding?: number[];
  isActive: boolean;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    category: { type: String, required: true, index: true },
    gender: { type: String, enum: ["male", "female", "unisex"], required: true },
    colors: { type: [String], default: [] },
    styles: { type: [String], default: [] },
    occasions: { type: [String], default: [] },
    materials: { type: [String], default: [] },
    sizes: { type: [String], default: [] },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0, default: 0 },
    imageUrl: { type: String },
    embedding: { type: [Number] },
    isActive: { type: Boolean, default: true, index: true }
  },
  { timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
