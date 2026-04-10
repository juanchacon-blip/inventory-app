import ProductRepository from "../../domain/repositories/ProductRepository.js";

export default class InMemoryProductRepository extends ProductRepository {
  constructor() {
    super();
    this.products = [];
  }

  async save(product) {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index >= 0) {
      this.products[index] = product;
    } else {
      this.products.push(product);
    }
    return product;
  }

  async findAll() {
    return this.products;
  }

  async findBySku(sku) {
    return this.products.find(p => p.sku === sku) ?? null;
  }

  async delete(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) throw new Error(`Product with id "${id}" not found`);
    this.products.splice(index, 1);
  }
}