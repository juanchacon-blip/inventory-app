import ProductRepository from "../../domain/repositories/ProductRepository.js";
import ProductModel      from "../database/models/ProductModel.js";

export default class MongoProductRepository extends ProductRepository {
  async save(product) {
    await ProductModel.findOneAndUpdate(
      { id: product.id },
      product,
      { upsert: true, new: true }
    );
    return product;
  }

  async findAll() {
    return await ProductModel.find();
  }

  async findBySku(sku) {
    return await ProductModel.findOne({ sku }) ?? null;
  }

  async delete(id) {
    const result = await ProductModel.findOneAndDelete({ id });
    if (!result) throw new Error(`Product with id "${id}" not found`);
  }
}