export default class ProductController {
  constructor({ createProduct, getAllProducts, getProductBySku, deleteProduct }) {
    this.createProduct   = createProduct;
    this.getAllProducts   = getAllProducts;
    this.getProductBySku = getProductBySku;
    this.deleteProduct   = deleteProduct;
  }

  async create(req, res) {
    try {
      const product = await this.createProduct.execute(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const products = await this.getAllProducts.execute();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getBySku(req, res) {
    try {
      const product = await this.getProductBySku.execute(req.params.sku);
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await this.deleteProduct.execute(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}