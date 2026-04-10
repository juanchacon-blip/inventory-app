<template>
  <main>
    <h1>Inventario</h1>

    <form @submit.prevent="handleCreate">
      <AppInput
        id="name"
        label="Nombre"
        placeholder="Nombre del producto"
        v-model="form.name"
        :error="errors.name"
      />
      <AppInput
        id="sku"
        label="SKU"
        placeholder="ABC-001"
        v-model="form.sku"
        :error="errors.sku"
      />
      <AppInput
        id="price"
        label="Precio"
        type="number"
        placeholder="0"
        v-model="form.price"
        :error="errors.price"
      />
      <AppInput
        id="stock"
        label="Stock"
        type="number"
        placeholder="0"
        v-model="form.stock"
        :error="errors.stock"
      />
      <AppButton type="submit" label="Agregar producto" :disabled="loading" />
    </form>

    <p v-if="error">{{ error }}</p>

    <table v-if="products.length">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>SKU</th>
          <th>Precio</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.sku }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <AppButton label="Eliminar" @click="handleDelete(product.id)" />
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else-if="!loading">No hay productos.</p>
  </main>
</template>

<script setup>
import { ref, onMounted }  from "vue";
import { useProducts }     from "../infrastructure/composables/useProducts.js";
import AppInput            from "../components/AppInput.vue";
import AppButton           from "../components/AppButton.vue";
import { v4 as uuidv4 }   from "uuid";

const { products, error, loading, fetchAll, create, remove } = useProducts();

const form = ref({ name: "", sku: "", price: "", stock: "" });
const errors = ref({ name: "", sku: "", price: "", stock: "" });

function validate() {
  errors.value = { name: "", sku: "", price: "", stock: "" };
  if (!form.value.name)  errors.value.name  = "El nombre es requerido";
  if (!form.value.sku)   errors.value.sku   = "El SKU es requerido";
  if (form.value.price === "") errors.value.price = "El precio es requerido";
  if (form.value.stock === "") errors.value.stock = "El stock es requerido";
  return Object.values(errors.value).every(e => e === "");
}

async function handleCreate() {
  if (!validate()) return;
  await create({ id: uuidv4(), ...form.value });
  form.value = { name: "", sku: "", price: "", stock: "" };
}

async function handleDelete(id) {
  await remove(id);
}

onMounted(fetchAll);
</script>