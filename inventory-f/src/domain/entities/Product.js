export default class Product {
  constructor({ id, name, sku, price, stock }) {
    if (!name) throw new Error("Name is required");
    if (!sku) throw new Error("SKU is required");
    if (price == null || Number(price) < 0) throw new Error("Price must be >= 0");
    if (stock == null || !Number.isInteger(Number(stock)) || Number(stock) < 0)
      throw new Error("Stock must be an integer >= 0");

    this.id = id;
    this.name = name;
    this.sku = sku;
    this.price = Number(price);
    this.stock = Number(stock);
  }
}