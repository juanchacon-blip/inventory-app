import InMemoryProductRepository from "../repositories/InMemoryProductRepository.js";
import MongoProductRepository from "../repositories/MongoProductRepository.js";
import CreateProduct              from "../../application/usecases/CreateProduct.js";
import GetAllProducts             from "../../application/usecases/GetAllProducts.js";
import GetProductBySku            from "../../application/usecases/GetProductBySku.js";
import DeleteProduct              from "../../application/usecases/DeleteProduct.js";
import ProductController          from "../controllers/ProductController.js";

// 1. Repositorio
const repositoryInM = new InMemoryProductRepository();
const repository = new MongoProductRepository();

// 2. Use cases
const createProduct   = new CreateProduct(repository);
const getAllProducts   = new GetAllProducts(repository);
const getProductBySku = new GetProductBySku(repository);
const deleteProduct   = new DeleteProduct(repository);

// 3. Controller
const productController = new ProductController({
  createProduct,
  getAllProducts,
  getProductBySku,
  deleteProduct,
});

export { productController };