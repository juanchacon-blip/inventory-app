import Product from "../../domain/entities/Product.js";

export default class CreateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute({ id, name, sku, price, stock }) {
    const product = new Product({ id, name, sku, price, stock });
    return await this.productRepository.save(product);
  }
}