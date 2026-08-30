import dotenv from "dotenv";
import mongoose from "mongoose";

import { Product } from "./models/Product.model.js";

dotenv.config();

const products = [
  {
    name: "Royal Blue Embroidered Kurta",
    description:
      "Elegant traditional kurta with detailed embroidery.",
    category: "kurta",
    gender: "male",
    colors: ["royal blue"],
    styles: ["traditional", "elegant"],
    occasions: ["wedding", "festival"],
    materials: ["cotton"],
    sizes: ["M", "L", "XL"],
    price: 2499,
    stock: 10,
    isActive: true
  },

  {
    name: "Black Designer Kurta",
    description:
      "Minimal black kurta with a modern silhouette.",
    category: "kurta",
    gender: "male",
    colors: ["black"],
    styles: ["modern", "minimal"],
    occasions: ["party", "wedding"],
    materials: ["cotton"],
    sizes: ["S", "M", "L", "XL"],
    price: 2199,
    stock: 8,
    isActive: true
  },

  {
    name: "Navy Blue Sherwani",
    description:
      "Formal navy sherwani designed for weddings.",
    category: "sherwani",
    gender: "male",
    colors: ["navy blue"],
    styles: ["traditional", "formal", "luxury"],
    occasions: ["wedding"],
    materials: ["silk"],
    sizes: ["M", "L", "XL"],
    price: 6999,
    stock: 5,
    isActive: true
  },

  {
    name: "Maroon Wedding Sherwani",
    description:
      "Rich maroon sherwani with intricate embroidery.",
    category: "sherwani",
    gender: "male",
    colors: ["maroon"],
    styles: ["traditional", "luxury"],
    occasions: ["wedding"],
    materials: ["silk", "velvet"],
    sizes: ["L", "XL", "XXL"],
    price: 7999,
    stock: 4,
    isActive: true
  },

  {
    name: "White Linen Shirt",
    description:
      "Lightweight linen shirt for a clean casual look.",
    category: "shirt",
    gender: "male",
    colors: ["white"],
    styles: ["casual", "minimal"],
    occasions: ["casual", "travel"],
    materials: ["linen"],
    sizes: ["S", "M", "L", "XL"],
    price: 1499,
    stock: 15,
    isActive: true
  },

  {
    name: "Black Slim Fit Shirt",
    description:
      "Classic black shirt with a slim fit.",
    category: "shirt",
    gender: "male",
    colors: ["black"],
    styles: ["modern", "formal"],
    occasions: ["party", "office", "date"],
    materials: ["cotton"],
    sizes: ["S", "M", "L", "XL"],
    price: 1799,
    stock: 12,
    isActive: true
  },

  {
    name: "Emerald Green Anarkali",
    description:
      "Elegant emerald Anarkali with subtle embroidery.",
    category: "anarkali",
    gender: "female",
    colors: ["emerald green"],
    styles: ["traditional", "elegant"],
    occasions: ["wedding", "festival"],
    materials: ["silk"],
    sizes: ["S", "M", "L", "XL"],
    price: 4999,
    stock: 7,
    isActive: true
  },

  {
    name: "Wine Red Anarkali",
    description:
      "Festive wine-red Anarkali with detailed patterns.",
    category: "anarkali",
    gender: "female",
    colors: ["wine red"],
    styles: ["traditional", "luxury"],
    occasions: ["wedding", "party"],
    materials: ["silk"],
    sizes: ["S", "M", "L"],
    price: 5499,
    stock: 6,
    isActive: true
  },

  {
    name: "Pastel Pink Saree",
    description:
      "Soft pastel pink saree for elegant occasions.",
    category: "saree",
    gender: "female",
    colors: ["pastel pink"],
    styles: ["traditional", "elegant"],
    occasions: ["wedding", "festival"],
    materials: ["silk"],
    sizes: ["Free Size"],
    price: 3999,
    stock: 9,
    isActive: true
  },

  {
    name: "Midnight Blue Saree",
    description:
      "Deep blue saree with a sophisticated finish.",
    category: "saree",
    gender: "female",
    colors: ["midnight blue"],
    styles: ["traditional", "luxury"],
    occasions: ["wedding", "party"],
    materials: ["silk"],
    sizes: ["Free Size"],
    price: 5999,
    stock: 3,
    isActive: true
  },

  {
    name: "Beige Casual Trousers",
    description:
      "Comfortable beige trousers for everyday wear.",
    category: "trousers",
    gender: "unisex",
    colors: ["beige"],
    styles: ["casual", "minimal"],
    occasions: ["casual", "travel"],
    materials: ["cotton"],
    sizes: ["S", "M", "L", "XL"],
    price: 1899,
    stock: 20,
    isActive: true
  },

  {
    name: "Olive Cargo Pants",
    description:
      "Relaxed olive cargo pants for travel and casual wear.",
    category: "pants",
    gender: "unisex",
    colors: ["olive"],
    styles: ["casual", "modern"],
    occasions: ["travel", "casual"],
    materials: ["cotton"],
    sizes: ["S", "M", "L", "XL"],
    price: 1999,
    stock: 18,
    isActive: true
  }
];

const seedDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");

    await Product.deleteMany({});

    await Product.insertMany(products);

    console.log(`${products.length} products inserted`);

    await mongoose.disconnect();

    console.log("Database connection closed");

    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);

    process.exit(1);
  }
};

seedDatabase();