export default class GetProductBySku {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(sku) {
    const product = await this.productRepository.findBySku(sku);
    if (!product) throw new Error(`Product with SKU "${sku}" not found`);
    return product;
  }
}