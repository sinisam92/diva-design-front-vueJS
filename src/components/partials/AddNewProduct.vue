<template>
  <div>
    <form @submit.prevent="addNewProduct">
      <div class="form-content">
        <input
          type="text"
          v-model="newProduct.title"
          id="title"
          name="title"
          placeholder="Tttle"
          required
        />
        <input
          type="number"
          v-model="newProduct.price"
          id="price"
          name="price"
          placeholder="Price"
          required
        />
        <select v-model="newProduct.currency" class="custom-select mr-sm-2" required>
          <option disabled hidden value>Choose currency</option>
          <option v-for="item in items" :value="item.val" :key="item.id">{{item.val}}</option>
        </select>
        <input
          type="text"
          v-model="newProduct.description"
          name="description"
          placeholder="Description"
        />
        <input
          type="url"
          v-model="newProduct.image_url"
          name="image_url"
          placeholder="Image Url Address"
          required
        />
      </div>
      <div>
        <form>
          <div class="form-check-inline">
            <input
              id="radio1"
              type="radio"
              value="accessory"
              class="radio"
              name="type"
              v-model="newProduct.type"
              required
            />
            <label for="radio1" class="form-check-label">ACCESSORY</label>
          </div>
          <div class="form-check-inline">
            <input
              id="radio2"
              type="radio"
              value="necklace"
              class="radio"
              name="type"
              v-model="newProduct.type"
            />
            <label for="radio2" class="form-check-label">NECKLACE</label>
          </div>
          <div class="form-check-inline">
            <input
              id="radio3"
              type="radio"
              value="bracelet"
              class="radio"
              name="type"
              v-model="newProduct.type"
            />
            <label for="radio3" class="form-check-label">BRACELET</label>
          </div>
          <div class="form-check-inline">
            <input
              id="radio4"
              type="radio"
              value="earring"
              class="radio"
              name="type"
              v-model="newProduct.type"
            />
            <label for="radio4" class="form-check-label">EARRING</label>
          </div>
        </form>
      </div>
      <button type="submit" class="btn btn-outline-dark">Add product</button>
    </form>
  </div>
</template>

<script>
import shopService from "./../../services/shop-service";
export default {
  data() {
    return {
      newProduct: {
        currency: ""
      },
      errors: [],
      items: [{ id: 1, val: "RSD" }, { id: 2, val: "€" }, { id: 3, val: "$" }]
    };
  },
  methods: {
    addNewProduct() {
      shopService
        .addProduct(this.newProduct)
        .then(() => {
          this.$router.push({ path: "/shop" });
        })
        .catch(error => {
          this.errors = error;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../scss/_add-product";
</style>
