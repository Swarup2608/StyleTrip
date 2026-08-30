import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name?: string;
  email?: string;
  phone?: string;
  gender?: "male" | "female" | "other";
  preferences: {
    favoriteColors: string[];
    favoriteStyles: string[];
    favoriteCategories: string[];
    preferredOccasions: string[];
  };
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    preferences: {
      favoriteColors: { type: [String], default: [] },
      favoriteStyles: { type: [String], default: [] },
      favoriteCategories: { type: [String], default: [] },
      preferredOccasions: { type: [String], default: [] }
    }
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
