import { Schema, model } from "mongoose";

const productSchema = new Schema({
  id:    { type: String, required: true, unique: true },
  name:  { type: String, required: true },
  sku:   { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export default model("Product", productSchema);