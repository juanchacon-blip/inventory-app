import ProductRepository from "../../domain/repositories/ProductRepository.js";

const BASE_URL = import.meta.env.VITE_API_URL;

export default class ApiProductRepository extends ProductRepository {
  async save(product) {
    const res = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }

  async findAll() {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }

  async findBySku(sku) {
    const res = await fetch(`${BASE_URL}/products/${sku}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }

  async delete(id) {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(await res.text());
  }
}