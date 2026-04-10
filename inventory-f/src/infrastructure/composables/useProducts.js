import { ref } from "vue";
import {
  createProduct,
  getAllProducts,
  getProductBySku,
  deleteProduct,
} from "../config/container.js";

export function useProducts() {
  const products = ref([]);
  const error    = ref(null);
  const loading  = ref(false);

  async function fetchAll() {
    loading.value = true;
    try {
      products.value = await getAllProducts.execute();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  async function create(data) {
    try {
      await createProduct.execute(data);
      await fetchAll();
    } catch (err) {
      error.value = err.message;
    }
  }

  async function remove(id) {
    try {
      await deleteProduct.execute(id);
      await fetchAll();
    } catch (err) {
      error.value = err.message;
    }
  }

  async function findBySku(sku) {
    try {
      return await getProductBySku.execute(sku);
    } catch (err) {
      error.value = err.message;
      return null;
    }
  }

  return { products, error, loading, fetchAll, create, remove, findBySku };
}
