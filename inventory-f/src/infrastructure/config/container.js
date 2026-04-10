import ApiProductRepository from "../repositories/ApiProductRepository.js";
import CreateProduct        from "../../application/usecases/CreateProduct.js";
import GetAllProducts       from "../../application/usecases/GetAllProducts.js";
import GetProductBySku      from "../../application/usecases/GetProductBySku.js";
import DeleteProduct        from "../../application/usecases/DeleteProduct.js";

const repository = new ApiProductRepository();

export const createProduct   = new CreateProduct(repository);
export const getAllProducts   = new GetAllProducts(repository);
export const getProductBySku = new GetProductBySku(repository);
export const deleteProduct   = new DeleteProduct(repository);